<template>
<div class="d-flex">
    <SubNavbar @navlink-click="ChangeComponent" v-bind:headers="subnavbar_headers"></SubNavbar>
    <OperationTable  :headers="CurrentFormData.headers" :key="DataKey"></OperationTable>
</div>
</template>
<script>
import SubNavbar from "@/components/SubNavbar.vue"
import OperationTable from "./OperationTable.vue";
export default{
    name: "OperatorPage",
    components:{
        SubNavbar,
        OperationTable
    },
    data(){
        return{
            DataKey: "Createdappsdocsall",
            FormsData:{
                Createdappsdocsall:{
                headers:[
                    {name:"id"},
                    {name:"vin"},
                    {name:"ID машины"},
                    {name:"Дата выпуска"},
                    {name:"Цена"},
                    {name:"Номер пасспорта"},
                    {name:"Серия пасспорта"},
                    {name:"ID работника"},
                    {name:"ID продавца"},
                    {name:"ID покупателя"},
                    {name:"Действие"}
                ],
                },
                threatment:{
                headers:[
                    {name:"id"},
                    {name:"vin"},
                    {name:"ID машины"},
                    {name:"Дата выпуска"},
                    {name:"Цена"},
                    {name:"Номер пасспорта"},
                    {name:"Серия пасспорта"},
                    {name:"ID работника"},
                    {name:"ID продавца"},
                    {name:"ID покупателя"},
                    {name:"Действие"}
                ],
                }
            },
            subnavbar_headers:[
            {
                id: 1,
                name: "Заявки на обработку",
                active: true,
                click:()=>{
                    this.ChangeComponent({
                        infokey: "threatment",
                        component: "OperationTable"
                    });
                }
            },
            {
                id: 2,
                name:"Заявки на формирование документов",
                active: false,
                click:()=>{
                    this.ChangeComponent({
                        infokey: "Createdappsdocsall",
                        component: "OperationTable"
                    });
                }
            }
            ]
        }
    },
    methods:{
        ChangeComponent(val){
            console.log(val);
            this.DataKey = val.infokey.toString();
            this.Component = val.component.toString();
        }
    },
    computed:{
    CurrentFormData:function(){
       
        return this.FormsData[this.DataKey];
    }
}
}
</script>