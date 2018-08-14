<style lang="scss" scoped>
@import "mixins";

.comment-section {
  width: 100%;

  .comment-form {
    @include flex(column, flex-start, inherit);

    margin: 1rem 0;

    textarea {
      border-radius: 0.3rem;
      box-sizing: border-box;
      height: 4rem;
      margin-bottom: 0.5rem;
      resize: none;
      width: 100%;
    }
  }
}
</style>

<template>
  <div v-if="symbol" class="comment-section">
    <div v-if="comments" class="comments">
      <h3>{{ $t('home.comments.title') }}</h3>
      <Comment v-for="comment in comments" :key="comment.id" :comment="comment" :symbolid="symbol.id"/>
    </div>
    <form class="comment-form" @submit="create">
      <textarea v-model="comment" :placeholder="$t('home.comments.placeholder')" />
      <button type="submit">{{ $t("home.comments.button.create") }}</button>
    </form>
  </div>
</template>

<script>
import Comment from "./Comment";

export default {
  name: "DetailComments",
  components: {
    Comment
  },
  props: {
    symbol: {
      default: undefined,
      type: Object
    }
  },
  data() {
    return {
      comment: undefined
    };
  },
  computed: {
    comments() {
      return this.$store.getters.getSymbolComments(this.symbol.id);
    }
  },
  methods: {
    create(e) {
      e.preventDefault();
      const isValid = this.isValidComment(this.comment);
      if (isValid) {
        this.save(this.symbol.id, this.comment);
      }
    },
    isValidComment(comment) {
      if (comment) {
        const isWhite = comment === "";
        const isEmpty = comment.trim().length === 0;
        return comment && !isWhite && !isEmpty;
      }
      return false;
    },
    save(id, text) {
      const comment = this.$services.comment.createComment(text);
      this.$services.comment.saveInLocal(id, comment);
      this.comment = undefined;
    }
  }
};
</script>
