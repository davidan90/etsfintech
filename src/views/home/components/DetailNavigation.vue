<style lang="scss" scoped>
@import "mixins";
@import "responsive";

.detail-nav {
  @include flex(row, center, space-between);

  padding: 1rem 0;
  width: 100%;

  .nav-icon {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
  }

  @media #{$screen-m}, #{$screen-l} {
    display: none;
  }
}
</style>

<template>
  <div class="detail-nav">
    <svgicon name="nav_prev" class="nav-icon" color="#360052" @click="prev"/>
    <svgicon name="nav_next" class="nav-icon" color="#360052" @click="next"/>
  </div>
</template>

<script>
const move = "move";

export default {
  name: "DetailNavigation",
  methods: {
    next() {
      this.$emit(move, 1);
    },
    prev() {
      this.$emit(move, -1);
    }
  }
};
</script>
