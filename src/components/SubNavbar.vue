<template>
<div class="">
    <ul class="flex-column nav float-nav nav-pills " @click="NavClick">
        <a v-for="header in this.headers" @click="header.click" :key="header.id" class="nav-link" :class="header.active ? 'active':''">
          {{header.name }}
        </a>
        
    </ul>
</div>
</template>
<script>
export default{
    name: "SubNavbar",
    data(){
        return{
            headers:[
            {
                id: 1,
                name: "Создать новую заявку",
                active: true,
                click:()=>{
                    this.$emit('navlink-click',{
                        infokey: "SaleBuyForm",
                        component: "OperationForm"
                    });
                }
            },
            {
                id: 2,
                name:"Создать контрагента",
                active: false,
                click:()=>{
                    this.$emit('navlink-click',{
                        infokey: "SellerForm",
                        component: "OperationForm"
                    });
                }
            },
            {
                id: 3,
                name:"Зарегистрировать авто",
                active: false,
                click:()=>{
                    this.$emit('navlink-click',
                    {
                        infokey: "AutoForm",
                        component: "OperationForm"
                    });
                }
            },
            {
                id: 4,
                name:"Смотреть все созданные заявки на обработку",
                active: false,
                click:()=>{
                    this.$emit('navlink-click',
                    {
                        infokey: "Createdapps",
                        component: "OperationTable"
                    });
                }
            },
            {
                id: 5,
                name:"Смотреть все созданные заявки на формирование документа",
                active: false,
                click:()=>{
                    this.$emit('navlink-click',
                    {
                        infokey: "Createdappsdocs",
                        component: "OperationTable"
                    });
                }
            },
            {
                id: 6,
                name:"Создать запрос на формирование документа",
                active: false,
                click:()=>{
                    this.$emit('navlink-click',
                    {
                        infokey: "Createdappsdocsall",
                        component: "OperationTable"
                    });
                }
            },
            
            ]
        }
    },
    methods:{
        NavClick:(e)=>{
    
            let active_item = e.target.parentNode.querySelector('.active');
            if (active_item)
                active_item.classList.remove("active");
            e.target.classList.add("active");
            e.target.click();
           
        }
    }
}
</script>
<style>
.float-nav{
    padding: 4px 8px !important;
    border-right: 1px solid gray;
}
 .nav-link{
    cursor: pointer;
 }

 
</style>