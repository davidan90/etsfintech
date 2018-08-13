<style lang="scss" scoped>
@import "mixins";
@import "colors";
@import "responsive";

.table {
  border: 1px solid $third-color;
  margin: 1rem 0;
  width: 100%;

  .tr {
    .th,
    .td {
      @include flex(row, center, center);

      height: 100%;
    }

    .th {
      background-color: $third-color;
    }
  }

  .table__head,
  .table__body {
    width: 100%;
  }

  .table__head .tr,
  .table__body .tr {
    display: grid;
    grid-template-columns: 2fr repeat(3, 0.75fr);
  }

  .table__head .tr {
    height: 1.5rem;
    text-transform: uppercase;

    @media #{$screen-s} {
      @include flex(row, center, center);

      .th {
        &:not(:first-child) {
          display: none;
        }

        &:first-child {
          width: 100%;
        }
      }
    }
  }

  .table__body {
    @include flex(column, inherit, inherit);

    .tr {
      height: 3rem;

      .td {
        border: 0.5px solid $third-color;
        text-align: center;
      }

      &:nth-child(even) {
        background-color: $gray-color;
      }

      &:hover {
        background-color: $primary-color;
        cursor: pointer;
      }

      @media #{$screen-s} {
        @include flex(row, center, center);

        .td {
          overflow: hidden;

          &:not(:first-child) {
            display: none;
          }

          &:first-child {
            width: 100%;
          }
        }
      }
    }
  }

  .table__body--empty {
    background-color: $gray-color;
    text-align: center;
    width: 100%;
  }
}
</style>

<template>
  <div v-if="symbols" class="table">
    <div class="table__head">
      <div class="tr">
        <div v-for="(header, index) in headers" :key="index" class="th">
          <span>{{ header }}</span>
        </div>
      </div>
    </div>
    <div v-if="hasSymbols" class="table__body">
      <div v-for="symbol in symbols" :key="symbol.id" class="tr" @click="showDetail(symbol)">
        <div class="td">
          <span>{{ symbol.name }}</span>
        </div>
        <div class="td">
          <span>{{ symbol.risk_family }}</span>
        </div>
        <div class="td">
          <span>{{ symbol.currency }}</span>
        </div>
        <div class="td">
          <span v-if="symbol.comments">{{ symbol.comments.length }}</span>
          <span v-else>0</span>
        </div>
      </div>
    </div>
    <div v-if="!hasSymbols" class="table__body--empty">
      <span>{{ $t("home.sections.symbols.table.empty") }}</span>
    </div>
  </div>
</template>

<script>
const showSymbolDetail = "show-symbol-detail";

export default {
  name: "SymbolsTable",
  props: {
    symbols: {
      default: undefined,
      type: Array
    }
  },
  computed: {
    headers() {
      const locale = this.$i18n.locale;
      const messages = this.$i18n.messages[locale];
      return [
        messages.home.sections.symbols.table.head.name,
        messages.home.sections.symbols.table.head.risk,
        messages.home.sections.symbols.table.head.currency,
        messages.home.sections.symbols.table.head.comments
      ];
    },
    hasSymbols() {
      return this.symbols && this.symbols.length;
    }
  },
  methods: {
    showDetail(symbol) {
      this.$emit(showSymbolDetail, symbol);
    }
  }
};
</script>
