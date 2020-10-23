<template>
<div class="grid">
      <table class="table table-hover">
  <thead>
    <tr class="head">
      <th scope="col">CONTRIES</th>
      <th scope="col">NATIVE NAME</th>
      <th scope="col">REGION</th>
      <th scope="col">CAPITAL</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="item in list" v-bind:key="item.id">    
    <td>{{item.name}}</td>
    <td>{{item.nativeName}}</td>
    <td>{{item.region}}</td>
    <td>{{item.capital}}</td>
    </tr>   
  </tbody>
</table>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
   name: "Grid",

   data(){
    return{
        list : undefined
       }
   },
   mounted(){
       Vue.axios.get('https://restcountries.eu/rest/v2/all')
       .then((response) =>{
           this.list = response.data
           console.warn(response.data);
       })
   }


}
</script>

<style>
.grid{
    width: 70%;
    position: absolute;
    margin-left: 40%;
    margin-top: 5%;
    background: rgb(117, 150, 161);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.grid td{
  cursor: pointer;
}
.head{
    background: rgb(85, 138, 155);

}
</style>