<template>
  <img class="logo" src="../assets/resto-logo.png" alt="web development" />
  <h1>SignUp</h1>
  <div>
    <input type="text" placeholder="enter name" />
    <input type="email" placeholder="enter email" />
    <input type="password" placeholder="enter password" />
    <button>SignUp</button>
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
</style>
