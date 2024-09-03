<template>
  <div class="container">
    <img class="logo" src="../assets/resto-logo.png" alt="web development" />
    <h1>SignUp</h1>
    <div class="register">
      <input type="text" placeholder="Enter name" />
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
      <button>SignUp</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
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
