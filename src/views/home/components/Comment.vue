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

    .info {
      margin: 0.3rem;
      width: 90%;

      p {
        background-color: $white-color;
        overflow-x: hidden;
        padding: 0.5rem;
      }
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
      border-radius: 3px;
      box-sizing: border-box;
      min-height: 60px;
      padding: 0.5rem;
      resize: none;
      width: 100%;
    }

    button {
      background-color: $purple-color;
      border: 0;
      border-radius: 3px;
      color: $white-color;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div v-if="isValidComment" class="comment">
    <div v-if="!isUpdating" class="comment-content">
      <div class="info">
        <span>{{ comment.date }}</span>
        <p>{{ comment.text }}</p>
      </div>
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
import "assets/icons/compiled";

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
      this.$services.comment.removeFromLocal(this.symbolid, this.comment.id);
    },
    update(e) {
      e.preventDefault();
      this.$services.comment.updateFromLocal(this.symbolid, this.comment);
      this.toggleUpdate();
    }
  }
};
</script>
