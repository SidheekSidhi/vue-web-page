<template>
  <div class="sidebar">
      <div class="sidebar-items">
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
              <router-link to="/grid">EMPLOYEES</router-link>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar{
  position: fixed;
  left: 0;
  width: 20%;
  height: 1000px  ;
  background: rgb(38, 102, 131);
  float: left;
  
}
.sidebar-items  ul a{
  display: block;
  height: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  box-sizing: border-box;
  text-decoration: none;
}
.sidebar-items  ul a:hover{
  background-color: rgb(108, 178, 190);
}
</style>