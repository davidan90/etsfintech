<style lang="scss" scoped>
@import "colors";

.locale-switch {
  select {
    background: transparent;
    border: 0;
    color: $blue-color;
    padding: 0.3rem;
  }
}
</style>

<template>
  <div class="locale-switch">
    <select @change="changeLocale">
      <option value="en" selected>{{ $t("app.locale.en") }}</option>
      <option value="es">{{ $t("app.locale.es") }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitch",
  methods: {
    changeLocale(e) {
      this.$i18n.locale = e.target.value;
    }
  }
};
</script>
