<template>
  <section id="contact">
    <article>
      <h1>{{ $t("contact.title") }}</h1>
      <div class="info">
        <span class="name">{{ $t("contact.me.name") }}</span>
        <span class="job">{{ $t("contact.me.job") }}</span>
        <span class="email">{{ $t("contact.me.email") }}</span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

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
