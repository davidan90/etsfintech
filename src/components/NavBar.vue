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

<style lang="scss" scoped>
#navBar {
  width: 100%;

  span {
    margin: 0 1rem;

    a {
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: #2c3e50;
      }
    }
  }
}
</style>
