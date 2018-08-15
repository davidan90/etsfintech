<style lang="scss">
@import "global";
@import "mixins";
@import "colors";
@import "responsive";

#etsfintech {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  main {
    @include flex(column, center, inherit);

    box-sizing: border-box;
    padding: 1.5rem;
    width: 100%;

    @media #{$screen-s} {
      padding-top: 60px;
    }
  }
}

h1 {
  color: $blue-color;
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
  text-transform: uppercase;
}

a {
  color: $purple-color;
  text-decoration: none;
}

button {
  &:hover {
    transform: scale(1.05);
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<template>
  <div id="etsfintech">
    <Header />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import { Header } from "components";

export default {
  name: "EtsFintechApp",
  components: {
    Header
  }
};
</script>
