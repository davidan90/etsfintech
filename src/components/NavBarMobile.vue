<style lang="scss" scoped>
@import "responsive";
@import "colors";
@import "mixins";

.navbar-mobile {
  span {
    color: $blue-color;
    cursor: pointer;
    text-transform: uppercase;
  }

  nav {
    display: none;
  }

  &.active {
    nav {
      @include flex(column, center, inherit);

      background-color: $gray-color;
      height: 100vh;
      left: 0;
      position: absolute;
      top: 50px;
      width: 100vw;

      span {
        border-bottom: 1px solid $blue-color;
        padding: 1rem 0;
        text-align: center;
        width: 100%;
      }
    }
  }

  @media #{$screen-m}, #{$screen-l} {
    display: none;
  }
}
</style>

<template>
  <div :class="{active: isMenuShow}" class="navbar-mobile">
    <span v-if="isMenuShow" class="close" @click="toogleMenu">{{ $t("app.close") }}</span>
    <span v-else class="title" @click="toogleMenu">{{ $t("app.menu") }}</span>
    <nav>
      <span @click="toogleMenu">
        <router-link to="/home">{{ $t("home.title") }}</router-link>
      </span>
      <span @click="toogleMenu">
        <router-link to="/contact">{{ $t("contact.title") }}</router-link>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBarMobile",
  data() {
    return {
      menuShow: false
    };
  },
  computed: {
    isMenuShow() {
      return this.menuShow;
    }
  },
  methods: {
    toogleMenu() {
      this.menuShow = !this.menuShow;
    }
  }
};
</script>
