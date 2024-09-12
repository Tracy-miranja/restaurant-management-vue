<template>
  <div class="HeaderSec">
    <div>
      <img src="../assets/resto-logo.png" alt="restaurant" class="logo" />
    </div>
    <div>
      <a href="#">LogOut</a>
      <a href="#">Updated Restaurant</a>
      <a href="#">Add Restaurant</a>
      <a href="#">Home</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerSection",
};
</script>
<style scoped>
.HeaderSec {
  width: 100%;
  height: 55px;
  margin-top: 0px;
  background-color: black;
  color: #fff;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.HeaderSec a {
  color: #fff;
  /* float: right; */
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.logo {
  width: 50px;

  /* height: 10vh; */
}
</style>
