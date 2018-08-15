<style lang="scss" scoped>
@import "mixins";

.symbol-detail {
  @include flex(column, flex-start, inherit);

  box-sizing: border-box;
  overflow-y: auto;
  padding: 0.5rem;
  width: 100%;

  &.loader {
    @include flex(column, center, inherit);

    overflow-y: hidden;
  }
}
</style>

<template>
  <Aside v-if="symbol">
    <DetailHeader :title="symbol.name" @move="changeDetail" />
    <div v-if="isLoadingDetails" class="symbol-detail loader">
      <Spinner />
    </div>
    <div v-else class="symbol-detail">
      <DetailInfo :details="details" />
      <DetailComments :symbol="symbol" />
    </div>
  </Aside>
</template>

<script>
import { Aside, Spinner } from "components";
import DetailHeader from "./DetailHeader";
import DetailInfo from "./DetailInfo";
import DetailComments from "./DetailComments";

const onChangeDetail = "change-detail";

export default {
  name: "SymboldDetail",
  components: {
    Aside,
    Spinner,
    DetailHeader,
    DetailInfo,
    DetailComments
  },
  props: {
    symbol: {
      default: undefined,
      type: Object
    }
  },
  computed: {
    isLoadingDetails() {
      return this.$store.getters.isLoadingDetailSymbol;
    },
    details() {
      return this.$store.getters.detailSymbol;
    }
  },
  methods: {
    changeDetail(movement) {
      this.$emit(onChangeDetail, movement);
    }
  }
};
</script>
