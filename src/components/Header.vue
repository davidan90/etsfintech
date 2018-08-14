<style lang="scss" scoped>
@import "mixins";
@import "responsive";
@import "colors";

.main-header {
  background-color: $gray-color;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  width: 100%;

  .section-inner {
    @include flex(row, center, space-between);

    padding: 0 1rem;

    picture {
      display: inline-block;

      img {
        height: 50px;
        width: 60px;
      }
    }
  }

  @media #{$screen-s} {
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>

<template>
  <header class="main-header">
    <div class="section-inner">
      <picture class="logo-container">
        <img src="../assets/img/ets_logo.png">
      </picture>
      <NavBar />
      <NavBarMobile />
      <LocaleSwitch />
    </div>
  </header>
</template>

<script>
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import LocaleSwitch from "./LocaleSwitch";

export default {
  name: "Header",
  components: {
    NavBar,
    NavBarMobile,
    LocaleSwitch
  }
};
</script>
