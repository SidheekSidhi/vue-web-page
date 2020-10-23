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
              <router-link to="/About">ABOUT</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/login">LOGIN</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/grid">EMPLOYEES</router-link>
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
  width: 100%;
  height: 1%;
  background: rgb(38, 71, 87);
  list-style: none;
}
.navbar-items {
  display: flex;
}
.navbar ul{
  display: flex;
  position: relative;
  left: 90px;
  text-decoration: none;
  margin-left: 95%;
}
ul {
  list-style-type: none;
}
.navbar-items  ul  a{
  display: flex;
  line-height: 55px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  padding-left: 48px;
  text-align: center;
}
.navbar-items  ul a:hover{
  color: rgb(108, 178, 190);
}
</style>