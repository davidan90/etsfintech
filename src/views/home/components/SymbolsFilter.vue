<style lang="scss" scoped>
@import "mixins";
@import "colors";
@import "responsive";

.filters {
  width: 100%;

  .filters-content {
    @include flex(row, center, inherit);

    background-color: $gray-dark-color;
    border-radius: 3px;
    padding: 1rem 0.3rem;

    select {
      background: $blue-color;
      border: 0;
      border-radius: 3px;
      color: $purple-color;
      min-width: 200px;
      padding: 0.3rem;
    }

    .filter-list {
      border-left: 2px solid $purple-color;
      margin: 0 1rem;
      padding: 0 0.5rem;

      @media #{$screen-s} {
        margin: 1rem 0;
      }
    }

    @media #{$screen-s} {
      @include flex(column, flex-start, inherit);
    }
  }
}
</style>

<template>
  <div class="filters">
    <h3>{{ $t("home.sections.symbols.filters.title") }}</h3>
    <div class="filters-content">
      <select class="filter-select" @change="changeFilter">
        <option value="" selected>--</option>
        <option value="currency">{{ $t("home.sections.symbols.table.head.currency") }}</option>
        <option value="risk_family">{{ $t("home.sections.symbols.table.head.risk") }}</option>
      </select>
      <div v-if="filterOptions.enabled" class="filter-list">
        <FilterOption v-for="(filterValue, index) in filterOptions.allValues"
                      :key="`${filterOptions.type}${index}`"
                      :value="filterValue" @filter-toggle="filterToggle"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterOption from "./FilterOption";

const filterOptionsDefault = {
  enabled: false,
  type: undefined,
  allValues: undefined
};

export default {
  name: "SymbolsFilter",
  components: {
    FilterOption
  },
  data() {
    return {
      filterOptions: {
        ...filterOptionsDefault
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
        this.filterOptions.allValues = this.$utils.getAllValuesByAttribute(
          this.allSymbols,
          attr
        );
      } else {
        this.filterOptions = { ...filterOptionsDefault };
      }
    },
    filterToggle(filter) {
      this.$store.dispatch("filterAllSymbols", {
        type: this.filterOptions.type,
        isAdd: filter.checked,
        value: filter.value
      });
    }
  }
};
</script>
