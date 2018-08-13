<style lang="scss" scoped>
.filters {
  width: 100%;

  select {
    min-width: 200px;
  }

  .filter-list {
    margin: 1rem 0;
  }
}
</style>

<template>
  <div class="filters">
    <h3>{{ $t("home.sections.symbols.filters.title") }}</h3>
    <select class="filter-select" @change="changeFilter">
      <option value="" selected>--</option>
      <option value="currency">{{ $t("home.sections.symbols.table.head.currency") }}</option>
      <option value="risk_family">{{ $t("home.sections.symbols.table.head.risk") }}</option>
    </select>
    <div v-if="filterOptions.enabled" class="filter-list">
      <FilterOption v-for="(filterValue, index) in filterOptions.values"
                    :key="`${filterOptions.type}${index}`"
                    :value="filterValue" @filter-toggle="filterToggle"/>
    </div>
  </div>
</template>

<script>
import FilterOption from "./FilterOption";

export default {
  name: "SymbolsFilter",
  components: {
    FilterOption
  },
  data() {
    return {
      filterOptions: {
        enabled: false,
        type: undefined,
        values: undefined
      }
    };
  },
  computed: {
    allSymbols() {
      return this.$store.getters.allSymbols;
    }
  },
  methods: {
    changeFilter(e) {
      const option = e.target.value !== "" ? e.target.value : null;
      this.enabledFilterValues(option);
    },
    enabledFilterValues(attr) {
      this.$store.dispatch("resetFilters");
      if (attr) {
        this.filterOptions.enabled = true;
        this.filterOptions.type = attr;
        this.filterOptions.values = this.$utils.symbols.getAllValuesByAttribute(
          this.allSymbols,
          attr
        );
      } else {
        this.removeFilters();
      }
    },
    removeFilters() {
      this.filterOptions.enabled = false;
      this.filterOptions.type = undefined;
      this.filterOptions.values = undefined;
    },
    filterToggle(filter) {
      this.$store.dispatch("filterAllSymbols", {
        type: this.filterOptions.type,
        value: filter.value
      });
    }
  }
};
</script>
