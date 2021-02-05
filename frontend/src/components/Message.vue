<template>
  <div class="message-content">
    <div><img src="../assets/avatar.jpg" alt="" class="avatar" /></div>
    <div class="message-right">
      <p class="name">{{ name }}</p>
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    name: {
      type: String,
      default: "name"
    },
    content: {
      type: String,
      default: "content"
    }
  }
};
</script>

<style scoped lang="scss">
.message-content {
  width: 100%;
  display: flex;
  padding: 2px;
  border-bottom: 1px solid #dfe4ea;
  margin: 2px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .message-right {
    text-align: left;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-size: 14px;
      color: #a4b0be;
    }

    .content {
      width: 100%;
      color: #747d8c;
      font-size: 16px;
      word-break: break-all;
    }
  }
}
</style>
