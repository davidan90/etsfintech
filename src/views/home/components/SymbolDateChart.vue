<script>
import { generateChart } from "vue-chartjs";

const CustomLine = generateChart("symbol-date-chart", "line");

export default {
  name: "SymbolDateChart",
  extends: CustomLine,
  props: {
    data: {
      type: Array,
      default: undefined
    },
    options: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      datacollection: null
    };
  },
  beforeMount() {
    const data = this.data.map((set, index) => ({
      x: new Date(set.date),
      y: parseInt(set.value, 10)
    }));

    this.datacollection = {
      labels: [
        this.getYear(this.data[0].date),
        this.getYear(this.data[this.data.length - 1].date)
      ],
      datasets: [
        {
          data: data,
          backgroundColor: "rgba(54, 0, 82, 0.2)",
          borderColor: "#360052",
          label: this.getLabel()
        }
      ]
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
  methods: {
    getYear(dateString) {
      return new Date(dateString).getFullYear();
    },
    getLabel() {
      const locale = this.$i18n.locale;
      const messages = this.$i18n.messages[locale];
      return messages.home.aside.symbols.detail.prices;
    }
  }
};
</script>
