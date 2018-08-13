<style lang="scss" scoped>
@import "mixins";
@import "colors";
@import "responsive";
$aside-width: 40vw;
$aside-active-right: 0;

@keyframes activate {
  0% {
    right: -$aside-width;
  }

  100% {
    right: $aside-active-right;
  }
}

aside {
  background-color: $gray-color;
  box-shadow: -3px 0 5px 0 rgba(0, 0, 0, 0.7);
  display: none;
  height: 100%;
  min-width: 500px;
  position: fixed;
  top: 0;
  width: $aside-width;

  &.aside--active {
    @include flex(column, center, flex-start);

    animation: activate 0.5s;
    right: $aside-active-right;
  }

  @media #{$screen-s} {
    min-width: 0;
    width: 100%;
  }
}
</style>

<template>
  <aside :class="{ 'aside--active': isActive }">
    <slot/>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  computed: {
    isActive() {
      return this.$store.getters.isAsideShow;
    }
  }
};
</script>
