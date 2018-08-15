<style lang="scss" scoped>
@import "mixins";
@import "colors";
@import "responsive";

header {
  @include flex(row, center, inherit);

  background-color: $purple-color;
  color: $white-color;
  min-height: 80px;
  padding: 10px 0;
  width: 100%;

  .detail-nav {
    @include flex(row, center, space-between);

    width: 100%;

    h2 {
      margin: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 90%;
    }

    .nav-icon {
      height: 50px;
      width: 50px;

      @media #{$screen-m}, #{$screen-l} {
        display: none;
      }
    }
  }

  .icon {
    cursor: pointer;

    &.close-icon {
      height: 35px;
      position: absolute;
      right: 0;
      top: 0;
      width: 35px;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>

<template>
  <header>
    <div class="detail-nav">
      <svgicon name="nav_prev" class="icon nav-icon" color="#ffffff" @click="prev"/>
      <h2>{{ title }}</h2>
      <svgicon name="nav_next" class="icon nav-icon" color="#ffffff" @click="next"/>
    </div>
    <svgicon name="clear" class="icon close-icon" color="#ffffff" @click="close" />
  </header>
</template>

<script>
const move = "move";

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
    },
    next() {
      this.$emit(move, 1);
    },
    prev() {
      this.$emit(move, -1);
    }
  }
};
</script>
