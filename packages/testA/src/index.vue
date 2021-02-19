<template>
  <div>
    <input :value="value" @input="onInput" />
    <div>{{ value }}</div>
  </div>
</template>
<script>
export default {
  name: "testA",
  props: {
    value: {
      type: String,
      defaule: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    onInput(event) {
      this.$emit("update:value", event.target.value);
      this.$emit("input", event.target.value);
    },
  },
};
</script>
