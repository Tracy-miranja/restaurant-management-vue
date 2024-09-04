<template>
  <div class="container">
    <img class="logo" src="../assets/resto-logo.png" alt="web development" />
    <h1>SignUp</h1>
    <div class="register">
      <input v-model="name" type="text" placeholder="Enter name" />
      <input v-model="email" type="email" placeholder="Enter email" />
      <input v-model="password" type="password" placeholder="Enter password" />
      <button v-on:click="signUp">SignUp</button>
    </div>
    <h6>Already sign up? <a href="Login">Login in</a></h6>
  </div>
</template>
<script>
import axios from "axios";
// import Home from "./Home.vue";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status === 201) {
        localStorage.setItem("user info", JSON.stringify(result));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style scoped>
.logo {
  width: 100px;
  /* height: 10vh; */
}
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register input {
  width: 300px;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid rgb(7, 252, 219);
}
.register button {
  width: 200px;
  margin-top: 5px;
  padding: 5px;
  border-radius: 20px;
  background: rgb(7, 252, 219);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
