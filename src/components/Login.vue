<template>
  <h1>Login</h1>
  <input v-model="email" type="text" placeholder="Enter Email" />
  <input v-model="password" type="password" placeholder="Enter Password" />
  <button v-on:click="handleLogin">Login</button>
  <router-link to="/signUp">SignUp</router-link>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped></style>
