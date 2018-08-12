<style lang="scss" scoped>
@import "mixins";
@import "colors";
$margin: 0.5rem;
$padding: 0.5rem;

header,
footer {
  @include flex(row, center, inherit);

  background-color: $third-color;
  height: 50px;
  padding: 10px 0;
  width: 100%;
}

header {
  h2 {
    margin: $margin;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.symbol-detail {
  @include flex(column, flex-start, inherit);

  box-sizing: border-box;
  padding: $padding;
  width: 100%;

  &.loader {
    @include flex(column, center, inherit);
  }
}

footer {
  bottom: 0;
  justify-content: center;
  position: absolute;

  button {
    background-color: $white-color;
    border-radius: 5px;
    cursor: pointer;
    height: 2rem;
    min-width: 70px;
  }
}
</style>

<template>
  <Aside v-if="symbol">
    <header>
      <h2>{{ symbol.name }}</h2>
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
      <SymbolCommentForm :symbol="symbol" />
    </section>
    <footer>
      <button @click="close">{{ $t("app.close") }}</button>
    </footer>
  </Aside>
</template>

<script>
import { Aside, Spinner } from "components";
import SymbolCommentForm from "./SymbolCommentForm";

export default {
  name: "SymboldDetail",
  components: {
    Aside,
    Spinner,
    SymbolCommentForm
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
      return `${this.details.name} ${
        this.details.sub_family ? "/ " + this.details.sub_family.name : ""
      }`;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("hideAside");
    },
    nestedInfo(key) {
      return this.$utils.recursion.nestedLevels(
        this.details[key],
        key,
        this.details[key].name,
        2
      );
    }
  }
};
</script>
