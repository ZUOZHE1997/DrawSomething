<template>
  <div class="comment-container">
    <div class="message-box">
      <Message v-for="i in 20" :key="i"></Message>
    </div>
    <div class="comment-box">
      <input type="text" class="comment-input" />
      <button class="comment-button">发表</button>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message";

export default {
  name: "Comment",
  components: { Message }
};
</script>

<style scoped lang="scss">
.comment-container {
  width: 500px;
  height: 600px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  box-shadow: 1px -1px 15px #595959;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.message-box {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.comment-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  .comment-input {
    height: 24px;
    outline: none;
    padding: 0;
    border: 1px solid;
    border-radius: 4px;
  }

  .comment-input:focus {
    border: #1890ff 1px solid;
  }

  .comment-input:hover {
    border: #40a9ff 1px solid;
  }

  .comment-button {
    margin-top: 10px;
    width: 100%;
    height: 28px;
    color: #fff;
    background: #1890ff;
    outline: none;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    border-radius: 4px;
  }

  .comment-button:hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }

  .comment-button:active {
    color: #fff;
    background: #096dd9;
    border-color: #096dd9;
  }
}
</style>
