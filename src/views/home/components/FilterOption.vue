<style lang="scss" scoped>
@import "colors";
@import "responsive";

.filter-option {
  border: 2px solid $blue-color;
  border-radius: 3px;
  color: $blue-color;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.3rem;

  &.checked {
    background-color: $blue-color;
    color: $purple-color;

    @media #{$screen-l} {
      &:hover {
        background-color: $gray-color;
        color: $blue-color;
        transform: scale(1.03);
      }
    }
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
