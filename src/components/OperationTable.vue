<template>
<table class="table table-striped">
      <thead>
    <tr>
      <th scope="col" v-for="header in headers" :key="header.name">{{ header.name }}</th>
      
    </tr>
  </thead>
  <tbody>

  </tbody>

  </table>
</template>
<script lang="js">
export default{
name: "OperationTable",
props:{
    Headers: Array,
},
data(){
    return{
        headers: this.Headers,
    }
}
}
</script>
<style scoped>

</style>