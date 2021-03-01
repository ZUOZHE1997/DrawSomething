<template>
  <div class="draw-content">
    <canvas id="draw" />
    <div class="operating-btn-list">
      <button @click="checkPen">画笔</button>
      <button @click="cleaning">橡皮擦</button>
      <button @click="undo">撤销</button>
      <button @click="reset">重绘</button>
      <div class="range-set">
        <Slider
          @input="change"
          v-model:value="silder"
          max="12"
          min="1"
        ></Slider>
      </div>
    </div>
  </div>
</template>

<script>
import { Draw } from "@/utils/draw";
import { onMounted, ref, computed } from "vue";
import Slider from "@/components/Slider";
import { useStore } from "vuex";

export default {
  name: "DrawingBoard",
  components: {
    Slider
  },
  setup() {
    const people = computed(() => {
      return useStore().state.userNumber;
    });
    let drawing = "";
    const silder = ref(3);
    onMounted(() => {
      drawing = new Draw({ element: "draw" });
      drawing.init();
    });
    const change = () => {
      drawing.changeLine(silder.value);
    };
    const checkPen = () => {
      drawing.checkPen();
    };
    const cleaning = () => {
      drawing.cleaning();
    };
    const undo = () => {
      drawing.undo();
    };
    const reset = () => {
      drawing.reset();
    };
    return {
      checkPen,
      cleaning,
      undo,
      reset,
      drawing,
      silder,
      change,
      people
    };
  }
};
</script>

<style scoped lang="scss">
#draw {
  background-image: url("https://file-1252913134.cos.ap-nanjing.myqcloud.com/paper.jpg");
  background-size: cover;
}

.operating-btn-list {
  position: absolute;
  left: 0;
  right: 0;
  //top: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  button {
    width: 60px;
    height: 28px;
    color: #fff;
    background: #1890ff;
    outline: none;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    border-radius: 4px;
  }

  button:hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }

  button:active {
    color: #fff;
    background: #096dd9;
    border-color: #096dd9;
  }
}

.draw-content {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.range-set {
  display: flex;
  flex-direction: column;
}

.people {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
