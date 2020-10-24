<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},

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
