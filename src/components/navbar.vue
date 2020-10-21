<template>
  <div class="navbar">
      <div class="navbar-items">
        <ul>
          <li>
            <a>
              <router-link to="/">HOME</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/about">ABOUT</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/login">LOGIN</router-link>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar{
  width: auto;
  height: 70px;
  background: rgb(38, 71, 87);
  list-style: none;
}
.navbar-items {
  display: flex;
}
.navbar ul{
  display: flex;
  position: relative;
  left: 900px;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
.navbar-items  ul  a{
  display: flex;
  line-height: 55px;
  font-size: 15px;
  color: white;
  text-decoration: none;
  padding-left: 50px;
  text-align: center;
}
.navbar-items  ul a:hover{
  color: rgb(108, 178, 190);
}
</style>