<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <testA :value.sync="age" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      age: "",
    };
  },
  watch: {
    age() {
      console.log(this.age);
    },
  },
  components: {
    // HelloWorld
  },
};
</script>
