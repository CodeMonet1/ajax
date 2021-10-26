<template>
  <div>Hello</div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    axios.get('/api/userinfo').then(result=>{
      console.log(result.data);
    })
  }
}
</script>

<style>
</style>