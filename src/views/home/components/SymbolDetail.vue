<style lang="scss" scoped>
@import "mixins";
@import "colors";
$margin: 0.5rem;
$padding: 0.5rem;

header {
  @include flex(row, center, inherit);

  background-color: $purple-color;
  color: $white-color;
  min-height: 50px;
  padding: 10px 0;
  width: 100%;

  h2 {
    margin: $margin;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .close-icon {
    cursor: pointer;
    height: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.symbol-detail {
  @include flex(column, flex-start, inherit);

  box-sizing: border-box;
  overflow-y: auto;
  padding: $padding;
  width: 100%;

  &.loader {
    @include flex(column, center, inherit);

    overflow-y: hidden;
  }

  .symbol-chart {
    @include flex(row, center, center);

    min-height: 420px;
    width: 100%;
  }
}
</style>

<template>
  <Aside v-if="symbol">
    <header>
      <h2>{{ symbol.name }}</h2>
      <svgicon name="clear" class="close-icon" color="#ffffff" @click="close"/>
    </header>
    <section v-if="isLoadingDetails" class="symbol-detail loader">
      <Spinner />
    </section>
    <section v-else class="symbol-detail">
      <h3>{{ $t('home.aside.symbols.details') }}</h3>
      <div class="symbol-detail__info">
        <span>
          {{ `${$t("home.aside.symbols.detail.isin")}: ${details.isin}` }}
        </span>
      </div>
      <div class="symbol-detail__info">
        <span>
          {{ `${$t("home.aside.symbols.detail.issuer")}: ${details.issuer.name}` }}
        </span>
      </div>
      <div class="symbol-detail__info">
        <span>
          {{ `${$t("home.aside.symbols.detail.risk")}: ${riskDetails}` }}
        </span>
      </div>
      <div class="symbol-detail__info">
        <span>
          {{ `${$t("home.aside.symbols.detail.currency")}: ${details.currency.name}` }}
        </span>
      </div>
      <div class="symbol-detail__info">
        <span>
          {{ `${$t("home.aside.symbols.detail.sector")}: ${nestedInfo("sector")}` }}
        </span>
      </div>
      <div class="symbol-detail__info">
        <span>
          {{ `${$t("home.aside.symbols.detail.region")}: ${nestedInfo("region")}` }}
        </span>
      </div>
      <div class="symbol-chart">
        <LineChart :data="details.prices" :options="{responsive: true}"/>
      </div>
      <SymbolCommentForm :symbol="symbol" />
    </section>
  </Aside>
</template>

<script>
import { Aside, Spinner } from "components";
import SymbolCommentForm from "./SymbolCommentForm";
import LineChart from "./SymbolDateChart";

export default {
  name: "SymboldDetail",
  components: {
    Aside,
    Spinner,
    SymbolCommentForm,
    LineChart
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
    },
    riskDetails() {
      return `${this.details.risk_family.name} ${
        this.details.sub_family ? "/ " + this.details.sub_family.name : ""
      }`;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("hideAside");
    },
    nestedInfo(key) {
      return this.details[key]
        ? this.$utils.recursion.nestedLevels(
            this.details[key],
            key,
            this.details[key].name,
            2
          )
        : "-";
    }
  }
};
</script>
