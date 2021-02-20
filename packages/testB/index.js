import test from "./src/index.vue";

test.install = function(Vue) {
  const ToastConstructor = Vue.extend(test);
  console.log(test);

  function showToast({ text, duration = 1000 }) {
    console.log(this.toastDom);

    if (this.toastDom) {
      this.toastDom.text = text;
      this.toastDom.isShow = true;
    } else {
      this.toastDom = new ToastConstructor({
        el: document.createElement("div"),
      });
      this.toastDom.text = text;
      // 添加节点
      document.body.appendChild(this.toastDom.$el);
    }

    // 过渡时间
    // setTimeout(() => {
    //   this.toastDom.isShow = false;
    // }, duration);
  }

  Vue.prototype.$toast = showToast;
};
export default test;
