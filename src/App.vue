<template>
  <div id="app">
    <Nvabar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Form from '../components/navbar.vue'
import Form from '../components/navbar.vue'


export default {
  name: "App",
  components: {
    navbar,Sidebar
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
