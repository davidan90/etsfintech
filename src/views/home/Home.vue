<template>
  <section id="home">
    <article>
      <h1>{{ $t("home.sections.symbols.title") }}</h1>
      <Spinner v-if="isLoading"/>
      <SymbolsTable :symbols="symbols" @show-symbol-detail="showSymbolDetail"/>
      <SymbolDetail :symbol="symbolSelected"/>
    </article>
  </section>
</template>

<script>
import { Spinner } from "components";
import { SymbolsTable, SymbolDetail } from "./components";

export default {
  name: "Home",
  components: {
    Spinner,
    SymbolsTable,
    SymbolDetail
  },
  data() {
    return {
      symbolSelected: undefined
    };
  },
  computed: {
    isLoading() {
      return !this.symbols;
    },
    symbols() {
      return this.$store.getters.allSymbols;
    }
  },
  mounted() {
    this.$store.dispatch("getAllSymbols");
  },
  methods: {
    showSymbolDetail(symbol) {
      if (symbol) {
        this.symbolSelected = symbol;
        this.showAside();
        this.loadSymbolDetail(symbol.id);
      }
    },
    showAside() {
      const isAsideShow = this.$store.getters.isAsideShow;
      if (!isAsideShow) {
        this.$store.dispatch("showAside");
      }
    },
    loadSymbolDetail(id) {
      if (id) {
        this.$store.dispatch("getDetailSymbol", { id });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "mixins";

#home,
#home article {
  @include flex(column, center, center);

  width: 100%;
}
</style>
