<template>
  <div id="home">
    <Form />

    <router-view></router-view>

  </div>
</template>

<script>
import Form from '../components/Form.vue'


export default {
  name: 'Home',
  components: {
    Form
  },
   methods:{
    saveData(e){
      console.log(e)
    }
  }

}
</script>
