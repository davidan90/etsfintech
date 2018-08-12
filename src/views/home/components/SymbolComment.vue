<style lang="scss" scoped>
.comment {
  .option-update {
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
  <div v-if="isValidComment" class="comment">
    <div v-if="!isUpdating">
      <p>{{ comment.text }}</p>
      <div class="options">
        <button @click="toggleUpdate">{{ $t("home.comments.button.update") }}</button>
        <button @click="remove">{{ $t("home.comments.button.remove") }}</button>
      </div>
    </div>
    <form v-else class="option-update" @submit="update">
      <textarea v-model="comment.text" />
      <button type="submit">{{ $t("home.comments.button.update") }}</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "SymbolComment",
  props: {
    comment: {
      default: undefined,
      type: Object
    },
    symbolid: {
      default: undefined,
      type: Number
    }
  },
  data() {
    return {
      isUpdating: false
    };
  },
  computed: {
    isValidComment() {
      return this.symbolid && this.comment;
    }
  },
  methods: {
    toggleUpdate() {
      this.isUpdating = !this.isUpdating;
    },
    remove() {
      const comments = JSON.parse(localStorage.getItem("comments"));
      if (comments) {
        const commentIds = comments[this.symbolid].map(comment => comment.id);
        comments[this.symbolid].splice(commentIds.indexOf(this.comment.id), 1);
      }
      this.$store.dispatch("removeComment", {
        symbolId: this.symbolid,
        commentId: this.comment.id
      });
      localStorage.setItem("comments", JSON.stringify(comments));
    },
    update(e) {
      e.preventDefault();
      // TODO
      this.toggleUpdate();
    }
  }
};
</script>
