<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$toast({ text: "测试1" });
  },
  mounted() {
    setTimeout(() => {
      this.$toast({ text: "测试2" });
    }, 3000);
  },
};
</script>