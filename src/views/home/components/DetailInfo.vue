<style lang="scss" scoped>
@import "mixins";
@import "colors";

.detail-info {
  width: 100%;

  .info {
    margin: 0.5rem 0;

    &:hover {
      background-color: $purple-transparent-color;
    }

    span:first-child {
      color: $blue-color;
    }
  }

  .symbol-chart {
    @include flex(row, center, center);

    min-height: 420px;
    width: 100%;
  }
}
</style>

<template>
  <section v-if="details" class="detail-info">
    <h3>{{ $t('home.aside.symbols.details') }}</h3>
    <div class="info">
      <span> {{ `${$t("home.aside.symbols.detail.isin")}: ` }}</span>
      <span>{{ details.isin }}</span>
    </div>
    <div class="info">
      <span>{{ `${$t("home.aside.symbols.detail.issuer")}: ` }}</span>
      <span>{{ details.issuer.name }}</span>
    </div>
    <div class="info">
      <span>{{ `${$t("home.aside.symbols.detail.risk")}: ` }}</span>
      <span>{{ riskDetails }}</span>
    </div>
    <div class="info">
      <span>{{ `${$t("home.aside.symbols.detail.currency")}: ` }}</span>
      <span>{{ details.currency.name }}</span>
    </div>
    <div class="info">
      <span>{{ `${$t("home.aside.symbols.detail.sector")}: ` }}</span>
      <span>{{ nestedInfo("sector") }}</span>
    </div>
    <div class="info">
      <span>{{ `${$t("home.aside.symbols.detail.region")}: ` }}</span>
      <span>{{ nestedInfo("region") }}</span>
    </div>
    <div class="symbol-chart">
      <DateChart :data="details.prices" :options="{responsive: true}"/>
    </div>
  </section>
</template>

<script>
import DateChart from "./DateChart";

export default {
  name: "DetailInfo",
  components: {
    DateChart
  },
  props: {
    details: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    riskDetails() {
      return `${this.details.risk_family.name} ${
        this.details.sub_family ? "/ " + this.details.sub_family.name : ""
      }`;
    }
  },
  methods: {
    nestedInfo(key) {
      return this.details[key]
        ? this.$utils.nestedLevels(
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
