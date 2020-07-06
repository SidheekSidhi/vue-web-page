<template>
  <div>
    <div>
      <h5>User Name:</h5>
      <input type="text" v-model="username" />
    </div>
    <div>
      <h5>Password:</h5>
      <input type="text" v-model="password" />
    </div>
    <div>
      <input type="submit" value="LOGIN" v-on:click="submit" />
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
      console.log("done", res.username, res.password);
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style>
.h5 {
  font-style: oblique;
  color: rgb(99, 99, 99);
}
</style>