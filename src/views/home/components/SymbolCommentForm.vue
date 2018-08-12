<style lang="scss" scoped>
@import "mixins";

.comment-section {
  width: 100%;

  .comment-form {
    @include flex(column, flex-start, inherit);

    margin: 1rem 0;

    textarea {
      box-sizing: border-box;
      height: 4rem;
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
      <SymbolComment v-for="comment in comments" :key="comment.id" :comment="comment" :symbolid="symbol.id"/>
    </div>
    <form class="comment-form" @submit="create">
      <textarea v-model="comment" :placeholder="$t('home.comments.placeholder')" class="comment-form__input" />
      <button type="submit">{{ $t("home.comments.button.create") }}</button>
    </form>
  </div>
</template>

<script>
import SymbolComment from "./SymbolComment";

export default {
  name: "SymbolCommentForm",
  components: {
    SymbolComment
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
        this.saveInLocalStorage(this.symbol.id, this.comment);
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
    saveInLocalStorage(id, text) {
      this.generateCommentsLocal();
      const comments = JSON.parse(localStorage.getItem("comments"));
      if (comments) {
        let comment;
        if (comments[id]) {
          comment = this.createComment(text);
          comments[id].push(comment);
        } else {
          comment = this.createComment(text);
          comments[id] = [comment];
        }
        this.$store.dispatch("addComment", { symbolId: id, comment });
        localStorage.setItem("comments", JSON.stringify(comments));
        this.comment = undefined;
      }
    },
    generateCommentsLocal() {
      if (!localStorage.getItem("comments")) {
        localStorage.setItem("comments", JSON.stringify({}));
      }
    },
    createComment(text) {
      return {
        id: `_${Math.random()
          .toString(36)
          .substring(2, 9)}`,
        text
      };
    }
  }
};
</script>
