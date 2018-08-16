<style lang="scss" scoped>
.prices-chart {
  padding-top: 2rem;
  width: 100%;
}
</style>

<template>
  <highcharts v-if="hasPrices" :options="chartOptions" class="prices-chart" />
</template>

<script>
const configOptions = {
  chart: {
    type: "area",
    height: `${0.5625 * 100}%`,
    backgroundColor: "#eeeff1"
  },
  title: {
    text: ""
  },
  credits: {
    enabled: false
  },
  yAxis: {
    title: false
  },
  xAxis: {
    type: "datetime",
    dateTimeLabelFormats: {
      year: "%Y"
    }
  },
  tooltip: {
    formatter: function() {
      return `<b>${this.x.toLocaleDateString()}</b> ${this.y}`;
    }
  },
  plotOptions: {
    series: {
      lineColor: "#360052"
    }
  }
};

export default {
  name: "PricesChart",
  props: {
    prices: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      chartOptions: Object.assign({}, configOptions, {
        series: [
          {
            data: this.getData(),
            name: this.getLabel(),
            color: "rgba(54, 0, 82, 0.1)"
          }
        ]
      })
    };
  },
  computed: {
    hasPrices() {
      return this.prices && this.prices.length;
    }
  },
  methods: {
    getData() {
      return this.prices.map(price => [
        new Date(price.date),
        parseFloat(price.value.toFixed(2))
      ]);
    },
    getLabel() {
      const locale = this.$i18n.locale;
      const messages = this.$i18n.messages[locale];
      return messages.home.aside.symbols.detail.price;
    }
  }
};
</script>
