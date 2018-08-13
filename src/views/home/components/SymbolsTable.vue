<style lang="scss" scoped>
@import "mixins";
@import "colors";
@import "responsive";

.table {
  margin: 1rem 0;
  width: 100%;

  .tr {
    .th,
    .td {
      @include flex(row, center, center);

      height: 100%;

      @media #{$screen-m}, #{$screen-l} {
        &:first-child {
          @include flex(row, center, flex-start);

          span {
            margin-left: 0.5rem;
          }
        }
      }

      @media #{$screen-s} {
        span {
          text-align: center;
          width: 100;
        }
      }
    }
  }

  .table-head,
  .table-body {
    width: 100%;
  }

  .table-head .tr,
  .table-body .tr {
    display: grid;
    grid-template-columns: 2fr repeat(3, 0.75fr);
  }

  .table-head .tr {
    border-bottom: 5px solid $blue-color;
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

  .table-body {
    @include flex(column, inherit, inherit);

    .tr {
      height: 3rem;
      transition: transform 0.3s;

      &:nth-child(even) {
        background-color: $gray-color;
      }

      &:hover {
        background-color: $blue-transparent-color;
        cursor: pointer;
        transform: scale(1.03);
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

  .table-body--empty {
    background-color: $gray-color;
    text-align: center;
    width: 100%;
  }
}
</style>

<template>
  <div v-if="symbols" class="table">
    <div class="table-head">
      <div class="tr">
        <div v-for="(header, index) in headers" :key="index" class="th">
          <span>{{ header }}</span>
        </div>
      </div>
    </div>
    <div v-if="hasSymbols" class="table-body">
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
    <div v-if="!hasSymbols" class="table-body--empty">
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
