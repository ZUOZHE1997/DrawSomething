<template>
  <div>
    <input
      class="slider"
      type="range"
      max="12"
      min="1"
      step="1"
      :value="value"
      @input="setValue"
    />
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "slider",
  emits: ["update:value", "input"],
  props: {
    max: {
      type: [String, Number],
      default: "10"
    },
    min: {
      type: [String, Number],
      default: "1"
    },
    step: {
      type: [String, Number],
      default: "1"
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  setup(props, context) {
    const setValue = e => {
      context.emit("update:value", e.target.value);
      context.emit("input", e.target.value);
    };
    return {
      setValue
    };
  }
};
</script>

<style scoped lang="scss">
input[type="range"] {
  background: #f5f5f5;
  border: 1px solid #a4b0be;
  height: 6px;
  -webkit-appearance: none;
  outline: none;
  width: 200px;
  border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 12px;
  width: 12px;
  border-radius: 8px;
  background: #40a9ff;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  border: none;
  height: 10px;
  width: 10px;
  border-radius: 8px;
  background: #40a9ff;
  cursor: pointer;
}
</style>
