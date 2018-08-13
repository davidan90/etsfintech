<style lang="scss" scoped>
@import "colors";

#navBar {
  width: 100%;

  span {
    margin: 0 1rem;

    a {
      color: $blue-color;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: $purple-color;
      }
    }
  }
}
</style>

<template>
  <nav id="navBar">
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
