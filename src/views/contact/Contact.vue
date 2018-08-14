<style lang="scss" scoped>
@import "mixins";

#contact {
  article {
    @include flex(column, center, center);

    .info {
      @include flex(column, center, center);

      .name {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <section id="contact">
    <article>
      <h1>{{ $t("contact.title") }}</h1>
      <div class="info">
        <span class="name">{{ $t("contact.enterprise.name") }}</span>
        <span class="dir">{{ $t("contact.enterprise.dir") }}</span>
        <span class="tel">{{ $t("contact.enterprise.tel") }}</span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>
