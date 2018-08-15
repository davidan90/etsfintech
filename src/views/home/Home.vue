<style lang="scss" scoped>
@import "mixins";

#home,
#home article {
  @include flex(column, center, center);

  width: 100%;
}
</style>

<template>
  <section id="home">
    <article>
      <h1>{{ $t("home.sections.symbols.title") }}</h1>
      <Spinner v-if="isLoading"/>
      <template v-else>
        <SymbolsFilter />
        <SymbolsTable :symbols="symbols" @show-symbol-detail="showSymbolDetail"/>
        <SymbolDetail :symbol="symbolSelected" @change-detail="changeDetail"/>
      </template>
    </article>
  </section>
</template>

<script>
import { Spinner } from "components";
import { SymbolsTable, SymbolDetail, SymbolsFilter } from "./components";

export default {
  name: "Home",
  components: {
    Spinner,
    SymbolsFilter,
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
      return this.$store.getters.filteredSymbols;
    }
  },
  mounted() {
    if (!this.symbols) {
      this.$store.dispatch("getAllSymbols");
    }
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
    },
    changeDetail(movement) {
      const symbolsIds = this.symbols.map(symbol => symbol.id);
      const indexOfSymbolSelected = symbolsIds.indexOf(this.symbolSelected.id);
      const newIndexOfSymbolSelected = this.$utils.getIndexCircleArray(
        symbolsIds,
        indexOfSymbolSelected + movement
      );
      const newDetail = this.symbols[newIndexOfSymbolSelected];
      this.showSymbolDetail(newDetail);
    }
  }
};
</script>
