<template>
  <div class="container">
    <img class="logo" src="../assets/resto-logo.png" alt="web development" />
    <h1>SignUp</h1>
    <div class="register">
      <input type="text" placeholder="enter name" />
      <input type="email" placeholder="enter email" />
      <input type="password" placeholder="enter password" />
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
  padding: 5px;
}
.register button {
  width: 200px;
  margin-top: 5px;
  padding: 5px;
  border-radius: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
