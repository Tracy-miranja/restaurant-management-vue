<template>
  <div class="container2">
    <img class="logo" src="../assets/resto-logo.png" alt="web development" />
    <h1>Login</h1>
    <div class="register">
      <input v-model="email" id="email" type="text" placeholder="Enter Email" />
      <input
        v-model="password"
        id="password"
        autocomplete="current-password"
        type="password"
        placeholder="Enter Password"
      />
      <button @click="handleLogin">Login</button>
    </div>
    <router-link to="/signUp">SignUp</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Fetch the user with matching email and password
        const response = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        const users = response.data;

        if (users.length > 0) {
          console.log("Login successful");
          this.$router.push({ name: "Home" });
        } else {
          this.errorMessage = "Invalid email or password.";
          console.log(this.errorMessage);
        }
      } catch (error) {
        console.error("Error during login:", error);
        this.errorMessage = "An error occurred. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.logo {
  width: 100px;
}
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register input {
  width: 300px;
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
.container2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
