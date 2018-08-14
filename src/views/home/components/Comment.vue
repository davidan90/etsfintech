<style lang="scss" scoped>
@import "mixins";
@import "colors";

.comment {
  background: $purple-transparent-color;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.5rem 0;

  .comment-content {
    @include flex(row, center, flex-start);

    p {
      background-color: $white-color;
      margin: 0.3rem;
      overflow-x: hidden;
      padding: 0.5rem;
      width: 90%;
    }

    .options {
      @include flex(column, center, space-around);

      max-height: 100px;
      min-height: 60px;
      width: 10%;

      .option-icon {
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }

  .option-update {
    padding: 0 0.3rem;

    textarea {
      border-radius: 0.3rem;
      box-sizing: border-box;
      min-height: 60px;
      padding: 0.5rem;
      resize: none;
      width: 100%;
    }
  }
}
</style>

<template>
  <div v-if="isValidComment" class="comment">
    <div v-if="!isUpdating" class="comment-content">
      <p>{{ comment.text }}</p>
      <div class="options">
        <svgicon name="edit" class="option-icon" color="#360052" @click="toggleUpdate"/>
        <svgicon name="delete" class="option-icon" color="#360052" @click="remove"/>
      </div>
    </div>
    <form v-else class="option-update" @submit="update">
      <textarea v-model="comment.text" />
      <button type="submit">{{ $t("home.comments.button.update") }}</button>
    </form>

  </div>
</template>

<script>
import "../../../assets/icons/compiled";

export default {
  name: "Comment",
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
      const comments = JSON.parse(localStorage.getItem("comments"));
      if (comments) {
        const commentIds = comments[this.symbolid].map(comment => comment.id);
        const comment = Object.assign(
          {},
          comments[this.symbolid][commentIds.indexOf(this.comment.id)],
          { text: this.comment.text }
        );

        comments[this.symbolid][commentIds.indexOf(this.comment.id)] = comment;
      }
      this.$store.dispatch("updateComment", {
        symbolId: this.symbolid,
        updatedComment: this.comment
      });
      localStorage.setItem("comments", JSON.stringify(comments));
      this.toggleUpdate();
    }
  }
};
</script>
