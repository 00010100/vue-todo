<template>
  <div class="app-loader">
    <div class="preloader-wrapper active">
      <div class="spinner-layer" :class="color">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader",
  computed: {
    color() {
      const colors = [
        "spinner-red-only",
        "spinner-blue-only",
        "spinner-green-only"
      ];
      return colors[Math.floor(Math.random() * 3)];
    }
  }
};
</script>

<style scoped>
  .app-loader {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }
</style>