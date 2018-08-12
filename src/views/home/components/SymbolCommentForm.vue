<style lang="scss" scoped>
@import "mixins";

.comment-form {
  @include flex(column, flex-start, inherit);

  width: 100%;

  textarea {
    height: 4rem;
    resize: none;
    width: 100%;
  }
}
</style>

<template>
  <form class="comment-form" @submit="saveComment">
    <textarea v-model="comment" :placeholder="$t('home.comment.placeholder')" class="comment-form__input" />
    <button type="submit">{{ $t("home.comment.button") }}</button>
  </form>
</template>

<script>
export default {
  name: "SymbolCommentForm",
  props: {
    symbolid: {
      default: undefined,
      type: Number
    }
  },
  data() {
    return {
      comment: undefined,
      place: "Write"
    };
  },
  methods: {
    saveComment(e) {
      e.preventDefault();
      const isValid = this.isValidComment(this.comment);
      if (isValid) {
        this.saveInLocalStorage(this.symbolid, this.comment);
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
          comment = this.createComment(comments[id].length, text);
          comments[id].push(comment);
        } else {
          comment = this.createComment(0, text);
          comments[id] = [comment];
        }
        console.log(comments);
        localStorage.setItem("comments", JSON.stringify(comments));
      }
    },
    generateCommentsLocal() {
      if (!localStorage.getItem("comments")) {
        localStorage.setItem("comments", JSON.stringify({}));
      }
    },
    createComment(id, text) {
      return {
        id,
        text
      };
    }
  }
};
</script>
