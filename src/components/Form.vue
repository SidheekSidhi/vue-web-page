<template>
  <div class="form">
    <div class="container-form">
      <center>
        <h1>Registeration Form</h1>
      </center>
      <hr>
      <label><b>Name :</b></label>
      <input type="text" placeholder= "Name" v-model="model.Name" size="10" name="name">

     <div class="contry">
        <label><b>Contry :</b></label>
          <select v-model="model.Name" name="name">
              <option v-for="item in list" v-bind:key="item.id">{{item.name}}</option>
          </select>
     </div>

    <div>
      <label><b>Gender :</b></label> <br>
       <input type="radio" value="Male" name="gender" v-model="model.Gender"> Male   
      <input type="radio" value="Female" name="gender" v-model="model.Gender"> Female   
      <input type="radio" value="Other" name="gender" v-model="model.Gender"> Other  
    </div>  

      <label><b>Phone :</b></label> 
      <input type="text" placeholder="phone no." size="10" name="phone" v-model="model.Phone"> 


      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" v-model="model.Email"> 

      <label for="psw"><b>Password</b></label>  
      <input type="password" placeholder="Enter Password" name="psw" v-model="model.Password">  

      <button type="submit" class="registerbtn" @click.prevent="submitForm()">SUBMIT</button>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
 name: "Form",
  data(){
    return{
      list : undefined,
      model:{}
    }
  },
  methods:{
    submitForm(){
      console.log(this.model)

      this.$emit('onSave', this.model)
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
.form{
  width: 600px;
  height: 50px;
  margin-top: 30px;
  margin-left: 40%;
}
.container-form{  
  padding: 50px;  
  background-color: rgb(108, 128, 134);
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px; 
}  
input[type=text], input[type=password],select{  
  width: 100%;  
  padding: 10px;  
  margin: 5px 0 22px 0;  
  display: inline-block;  
  border: none;  
  background: #f1f1f1;  
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}  
input[type=text]:focus, input[type=password]:focus,select:focus{  
  background-color: rgb(99, 172, 168);  
  outline: none;  
}
hr{  
  border: 1px solid #f1f1f1;  
  margin-bottom: 25px;  
}  
.registerbtn{  
  background-color: #4CAF50;  
  color: white;  
  padding: 16px 20px;  
  margin: 8px 0;  
  border: none;  
  cursor: pointer;  
  width: 60%;  
  opacity: 0.9; 
  margin-left: 90px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}  
.registerbtn:hover{  
  background-color: rgba(20, 90, 44, 0.671); 
}  
</style>










