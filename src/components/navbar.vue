<template>
  <div class="navbar">
      <div class="navbar-items">
        <ul class="ul">
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

<style scoped>
.navbar{
  width: 100%;
  height: 1%;
  background: rgb(38, 71, 87);
  list-style: none;
  /*margin-left: 20%; */
}
.ul{
  display: flex;
  text-decoration: none;
  margin-left: 900px;
  
}
.ul  a{
  display: flex;
  line-height: 55px;
  font-size: 15px;
  color: white;
  text-decoration: none;
  padding-left: 40px;
  text-align: center;
}
.navbar-items  ul a:hover{
  color: rgb(108, 178, 190);
}
</style>