<template>
  <div class="form">
    <div class="container-form">
      <center>
        <h1>Registeration Form</h1>
      </center>
      <hr>
      <label><b>Firstname :</b></label>
      <input type="text" placeholder= "Firstname" size="10" name="firstname">


    <div>
      <label><b>Gender :</b></label> <br>
       <input type="radio" value="Male" name="gender" checked > Male   
      <input type="radio" value="Female" name="gender"> Female   
      <input type="radio" value="Other" name="gender"> Other  
    </div>  

      <label><b>Phone :</b></label> 
      <input type="text" placeholder="phone no." size="10" name="phone"> 


      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email"> 

      <label for="psw"><b>Password</b></label>  
      <input type="password" placeholder="Enter Password" name="psw">  

      <button type="submit" class="registerbtn" @click.prevent="submitForm()">SUBMIT</button>

    </div>
  </div>
</template>

<script>
export default {
 name: "Form",
  data(){
    return{
      model:{}
    }
  },
  methods:{
    submitForm(){
      console.log(this.model)

      this.$emit('onSave', this.model)

      document.getElementsByName("firstname").value="";
      document.getElementsByName("gender").value="";
      document.getElementsByName("phone").value="";
      document.getElementsByName("email").value="";
      document.getElementsByName("psw").value="";
    },
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
input[type=text], input[type=password], textarea{  
  width: 100%;  
  padding: 15px;  
  margin: 5px 0 22px 0;  
  display: inline-block;  
  border: none;  
  background: #f1f1f1;  
}  
input[type=text]:focus, input[type=password]:focus{  
  background-color: rgb(0, 255, 242);  
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
  width: 100%;  
  opacity: 0.9;  
}  
.registerbtn:hover{  
  opacity: 1;  
}  
</style>