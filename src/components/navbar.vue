<template>
  <div class="navbar">
      <div class="navbar-items">
        <ul>
          <li>
            <a>
              <router-link to="/home">HOME</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/About">ABOUT</router-link>
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
.navbar ul{
  display: flex;
  text-decoration: none;
  margin-left: 1000px;
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
  padding-left: 20px;
  text-align: center;
}
.navbar-items  ul a:hover{
  color: rgb(108, 178, 190);
}
</style>