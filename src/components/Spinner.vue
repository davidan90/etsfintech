<template>
  <div class="spinner"/>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style lang="scss" scoped>
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
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #74848e;
  height: 50px;
  width: 50px;
}
</style>
