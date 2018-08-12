<style lang="scss">
@import "global";
@import "mixins";
@import "colors";

#etsfintech {
  color: $second-color;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  header.header,
  main.main {
    box-sizing: border-box;
  }

  header.header {
    @include flex(row, center, flex-start);

    background-color: $primary-color;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.7);
    padding: 10px 0;
    text-transform: uppercase;
    width: 100%;

    .header__logo,
    .header__navbar {
      @include flex(row, center, inherit);
    }

    .header__logo {
      justify-content: center;
      width: 20vw;

      img {
        height: 50px;
        width: 60px;
      }
    }

    .header__navbar {
      justify-content: flex-start;
      width: 80vw;
    }
  }

  main.main {
    @include flex(column, center, inherit);

    padding: 1.5rem;
    width: 100%;
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

a {
  color: $third-color;
}
</style>

<template>
  <div id="etsfintech">
    <header class="header">
      <picture class="header__logo">
        <img src="./assets/img/logo.png">
      </picture>
      <div class="header__navbar">
        <NavBar />
      </div>
    </header>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { NavBar } from "components";

export default {
  name: "EtsFintechApp",
  components: {
    NavBar
  }
};
</script>
