<template>
  <div class="login-container">
    <div class="login-input-content">
      <p class="login-title">What's your nickname?</p>
      <input
        v-model="username"
        autofocus="autofocus"
        class="login-input"
        type="text"
        placeholder="your nickname"
        @keydown.enter="inputName()"
        maxlength="10"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
    let username = ref("");
    const inputName = () => {
      console.log(123);
      store.dispatch("setName", username.value);
      console.log(router);
      router.push("/homePage");
    };
    return {
      inputName,
      username
    };
  }
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-content: center;
}

.login-input-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: white;
}

.login-title {
  font-size: 36px;
}

.login-input {
  margin-top: 10px;
  width: 100%;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  border: none;
  background: none;
  outline: none;
}
</style>
