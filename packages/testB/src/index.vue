<template>
  <div class="app-toast info" v-if="isShow">
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "testB",
  data() {
    return {
      isShow: true, // 是否显示
      text: "", // 文本内容
    };
  },
};
</script>
<style scoped>
.app-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.info {
  background: #00aaee;
}
</style>