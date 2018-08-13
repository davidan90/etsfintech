<style lang="scss" scoped>
@import "colors";

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 2s linear infinite;
  border: 5px solid $blue-transparent-color;
  border-radius: 50%;
  border-top: 5px solid $purple-color;
  height: 50px;
  width: 50px;
}
</style>

<template>
  <div class="spinner"/>
</template>

<script>
export default {
  name: "Spinner"
};
</script>
