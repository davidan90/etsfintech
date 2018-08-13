<style lang="scss" scoped>
@import "colors";

.filter-option {
  border: 1px solid $black-color;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  padding: 1rem;

  &.checked {
    background-color: $primary-color;
  }
}
</style>

<template>
  <div v-if="value" :class="{ 'checked': isChecked }" class="filter-option" @click="toggleChecked">
    <span>{{ value }}</span>
  </div>
</template>

<script>
const filterToggle = "filter-toggle";

export default {
  name: "FilterOption",
  props: {
    value: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    toggleChecked() {
      this.isChecked = !this.isChecked;
      this.$emit(filterToggle, {
        checked: this.isChecked,
        value: this.value
      });
    }
  }
};
</script>
