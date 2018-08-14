import store from "store";

export default function() {
  createLocal();

  return {
    getLocalComments() {
      return JSON.parse(localStorage.getItem("comments"));
    },

    getSymbolComments(symbolId) {
      return this.getLocalComments()[symbolId];
    },

    createComment(text) {
      const date = new Date();
      const localeDate = date.toLocaleDateString();
      const localeTime = date.toLocaleTimeString();

      return {
        id: `_${Math.random()
          .toString(36)
          .substring(2, 9)}`,
        date: `${localeDate} ${localeTime}`,
        text
      };
    },

    saveInLocal(symbolId, comment) {
      const comments = this.getLocalComments();
      if (comments) {
        if (comments[symbolId]) {
          comments[symbolId].push(comment);
        } else {
          comments[symbolId] = [comment];
        }
        localStorage.setItem("comments", JSON.stringify(comments));
        store.dispatch("addComment", { symbolId, comment });
      }
    },

    removeFromLocal(symbolId, commentId) {
      const comments = this.getLocalComments();
      if (comments) {
        const allCommentIds = comments[symbolId].map(comment => comment.id);
        const indexToRemove = allCommentIds.indexOf(commentId);
        comments[symbolId].splice(indexToRemove, 1);

        localStorage.setItem("comments", JSON.stringify(comments));
        store.dispatch("removeComment", { symbolId, commentId });
      }
    },

    updateFromLocal(symbolId, comment) {
      const comments = this.getLocalComments();
      if (comments) {
        const allCommentIds = comments[symbolId].map(comment => comment.id);
        const indexToUpdate = allCommentIds.indexOf(comment.id);
        const newComment = Object.assign(
          {},
          comments[symbolId][indexToUpdate],
          { text: comment.text }
        );
        comments[symbolId][indexToUpdate] = newComment;

        localStorage.setItem("comments", JSON.stringify(comments));
        store.dispatch("updateComment", {
          updatedComment: newComment,
          symbolId
        });
      }
    }
  };
}

const createLocal = () => {
  if (!localStorage.getItem("comments")) {
    localStorage.setItem("comments", JSON.stringify({}));
  }
};
