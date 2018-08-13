<style lang="scss" scoped>
@import "mixins";
@import "colors";

.comment {
  margin: 1rem 0;

  .comment-content {
    @include flex(row, center, flex-start);

    p,
    .options {
      min-height: 60px;
    }

    p {
      background-color: $white-color;
      margin: 0;
      min-height: 60px;
      padding: 0.5rem;
      width: 90%;
    }

    .options {
      @include flex(column, center, space-between);

      width: 10%;

      .option-icon {
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }

  .option-update {
    textarea {
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
        <!-- <button @click="toggleUpdate">{{ $t("home.comments.button.update") }}</button> -->
        <!-- <button @click="remove">{{ $t("home.comments.button.remove") }}</button> -->
        <svgicon name="edit" class="option-icon" @click="toggleUpdate"/>
        <svgicon name="delete" class="option-icon" height="1.5rem" width="1.5rem" @click="remove"/>
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
