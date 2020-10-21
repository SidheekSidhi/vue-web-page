<template>
<div class="login-section">
    <div class="login">
    <h2>Login to account</h2>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <input  type="submit" value="Login"  @click="submit">
    <p>Dont have an account? <a href="/">SignUp</a></p>
  </div>
</div>
</template>
<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    submit: async function() {
      const { username, password } = this;
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      };
      const res = await fetch("https://httpbin.org/post", opts)
        .then(res => res.json())
        .then(res => JSON.parse(res.data));
      console.log("done", "Username:", res.username, "password:", res.password);
      this.username = "";
      this.password = "";
     
      alert("Added Succesful!");
      
    }
  },
};
</script>

<style>
.login{
  width: 500px;
  height: 400px;
  margin-left: 40%;
  margin-top: 50px;  
  padding-top: 50px;
  background-color: rgba(108, 128, 134, 0.767);
  text-align: center;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
}
.login input[type="text"],.login input[type='password']{
    display: block;
    margin: 20px auto;
    padding: 5px 5px;
    width: 250px;
    background: none;
    border: 2px solid rgb(90, 196, 214);
    border-radius: 15px;
    transition: 0.8s;
}
.login input[type="text"]:focus,.login input[type="password"]:focus{
  border-left: 40px solid rgb(129, 217, 233);
}
.login input[type="submit"]{
    background: none;
    border: 2px solid rgb(90, 196, 214);
    padding: 5px 10px;
    width: 10px 10px;
    margin: 20px 10px;
    border-radius: 15px;
    transition: 0.6s;
}
.login input[type="submit"]:hover{
    background-color: rgb(129, 217, 233);
    color: rgb(9, 89, 121);
}
</style>