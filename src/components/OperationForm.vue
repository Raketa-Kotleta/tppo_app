<template>
    <form action="" class="form">
        <div class="input-group bg-primary p-5">
            <label for="" class="label">Инн</label>
            <input type="text" id="" class="input">
            <button class="btn"></button>
        </div>
    </form>
</template>
<script>

export default{
    name: "OperationForm",
}
</script>
<style scoped>
.input-group{
    margin: 16px 0;
}
.input-group .label{
    display: block;
}
.input{
    outline: none;
    padding: 2px 4px;
  
   border: none;
   
    background-color: transparent;
   border-bottom: 1px solid black;
    font-size: 1.2rem;
}
.label{
    font-size: 1.1rem;
    color: cornflowerblue;
    font-weight: 500;
    letter-spacing: 1px;
}
</style>