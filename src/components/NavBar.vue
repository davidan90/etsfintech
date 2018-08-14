<style lang="scss" scoped>
@import "responsive";
@import "colors";

.navbar {
  span {
    border-right: 2px solid $blue-color;
    font-size: 1.2rem;
    padding: 0 5px;
    text-transform: uppercase;

    &:last-child {
      border-right: 0;
    }
  }

  @media #{$screen-s} {
    display: none;
  }
}
</style>

<template>
  <nav class="navbar">
    <span>
      <router-link to="/home">{{ $t("home.title") }}</router-link>
    </span>
    <span>
      <router-link to="/contact">{{ $t("contact.title") }}</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
