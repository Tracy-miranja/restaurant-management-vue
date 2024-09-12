<template class="App">
  <headerSection />
  <!-- <signup /> -->
  <router-view />
  <main></main>
</template>
<script>
import headerSection from "./components/Header.vue";
// import Signup from "./components/Signup.vue";
export default {
  name: "App",

  components: {
    headerSection,
    // Signup,
  },
};
</script>

<style>
.App {
  padding: 0px;
  margin: 0px;
}
html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
