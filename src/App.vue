<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar.vue";


export default {
  name: "App",
  components: {
    Navbar,Sidebar
  },

  methods:{
    saveData(e){
    console.log(e)
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #000000;
  list-style-type: none;
  padding-top: 0;
  position: sticky;
}
</style>
