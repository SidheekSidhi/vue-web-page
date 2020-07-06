<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="imgs/img1.jpg" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="nav-bar" id="bar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/">HOME</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/login">LOGIN</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/about">ABOUT</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>
<style >
* {
  margin: 0px;
  padding: 0px;
}
.navbar {
  background-color: #ce391f;
  text-align: center;
  padding: 10px;
}

.navbar-light .navbar-brand {
  height: 50px;
  width: 55px;
}

.navbar-brand img {
  width: 100%;
}

.navbar-nav li {
  padding: 0 10px;
}

.navbar-nav li a {
  float: right;
  text-align: left;
}

#nav-bar ul li a:hover {
  color: #007bff !important;
}
.navbar-toggler {
  border: none !important;
}

.nav-link {
  color: #555 !important;
  font-weight: 600;
  font-size: 16px;
}
