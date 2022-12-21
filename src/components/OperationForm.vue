<template>

    <form class="operating-from flex-grow-1">       
        <span class="text-primary hr-text">{{ Header }}</span>
        <hr/>
        <div class="mb-3" v-for="input in inputs" :key="input.id">
            <label :for="input.id" class="form-label">{{input.name }}</label>
            <input :type="input.type" class="form-control" :id="input.id">
        </div>
        <button type="submit" class="btn btn-success" :click="submit">Отправить</button>
    </form>
</template>
<script>

export default{
    name: "OperationForm",
    props:{
        Header:String,
        Inputs: Array,
        Submit: Function,
    },
    data(){
        return{
           inputs: this.Inputs,
           submit: this.Submit
        }
    }
}
</script>
<style scoped>
.operating-from{
   padding: 0 20vw;
}
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
hr{
    margin: 2px 0;
    margin-bottom: 16px;
}
.hr-text{
    font-size: 1.2rem;
}
</style>