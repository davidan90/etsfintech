<style lang="scss" scoped>
@import "mixins";
@import "colors";

header {
  @include flex(row, center, inherit);

  background-color: $purple-color;
  color: $white-color;
  min-height: 80px;
  padding: 10px 0;
  width: 100%;

  h2 {
    margin: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .close-icon {
    cursor: pointer;
    height: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>

<template>
  <header>
    <h2>{{ title }}</h2>
    <svgicon name="clear" class="close-icon" color="#ffffff" @click="close" />
  </header>
</template>

<script>
export default {
  name: "DetailHeader",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    close() {
      this.$store.dispatch("hideAside");
    }
  }
};
</script>
