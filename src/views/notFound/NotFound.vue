<template>
  <section id="notFound">
    <h1>{{ $t("notFound.message") }}</h1>
  </section>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
@import "mixins";

#notFound {
  @include flex(column, center, center);

  height: 5rem;
  width: 100%;
}
</style>
