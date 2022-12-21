<template>
<div class="d-flex">
    <SubNavbar @navlink-click="ChangeComponent" :headers="subnavbar_headers"></SubNavbar>
    <OperationForm v-if="Component == 'OperationForm'" v-bind:inputs="CurrentFormData.inputs" :header="CurrentFormData.header" :key="DataKey"></OperationForm>
    <OperationTable v-if="Component == 'OperationTable'" :headers="CurrentFormData.headers" :key="DataKey"></OperationTable>
</div>
</template>
<script>
import OperationForm from './OperationForm.vue';
import SubNavbar from './SubNavbar.vue';
import OperationTable from './OperationTable.vue';
export default{
name: "ManagerPage",
components: {
 OperationForm,
 SubNavbar,
 OperationTable,
},
data(){
    return{
        Component: "OperationForm",
        DataKey: "SaleBuyForm",
        FormsData:{
            SaleBuyForm:{
                header:"Информация о покупке",
                inputs:[
                {
                    id:"producer",
                    name:"Производитель",
                    type:"text"
                },
                {
                    id:"mark",
                    name:"Марка",
                    type:"text"
                },
                {
                    id:"model",
                    name:"Модель",
                    type:"text"
                },
                {
                    id:"vin",
                    name:"Vin-номер",
                    type:"text"
                },
                {
                    id:"passport_serial",
                    name:"Серия пасспорта авто",
                    type:"text"
                },
                {
                    id:"passport_number",
                    name:"Номер пасспорта авто",
                    type:"text"
                },
                {
                    id:"price",
                    name:"Цена",
                    type:"text"
                },
                {
                    id:"ogrn",
                    name:"ОГРН поставщика",
                    type:"text"
                },
                {
                    id:"prod_date",
                    name:"Дата выпуска",
                    type:"date"
                },
            ],
            submit: function () {
                
            }
            },
            SellerForm:{
                header:"Информация о контрагенте",
                inputs:[
                {
                    id:"name",
                    name:"Название/ФИО",
                    type:"text"
                },
                {
                    id:"inn",
                    name:"ИНН",
                    type:"text"
                },{
                    id:"ogrn",
                    name:"ОГРН",
                    type:"text"
                },
                {
                    id:"address",
                    name:"Адрес",
                    type:"text"
                },
                {
                    id:"passport_serial",
                    name:"Серия паспорта",
                    type:"text"
                },
                {
                    id:"passport_number",
                    name:"Номер паспорта",
                    type:"text"
                },
                {
                    id:"passport_giver",
                    name:"Паспорт выдан",
                    type:"text"
                },
                {
                    id:"passport_date",
                    name:"Дата выдачи паспорта",
                    type:"date"
                },
                ],
                submit: function () {
                
            }
            },
            AutoForm:{
                header:"Информация об авто",
                inputs:[
                {
                    id:"prod",
                    name:"Производитель",
                    type:"text"
                },
                {
                    id:"mark",
                    name:"Марка",
                    type:"text"
                },
                {
                    id:"model",
                    name:"Модель",
                    type:"text"
                },
                ],
                submit: function () {
                
                }
            },
            Createdapps:{
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
                inputs:[]
            },
            Createdappsdocs:{
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
            }
        },
        subnavbar_headers:[
            {
                id: 1,
                name: "Создать новую заявку",
                active: true,
                click:()=>{
                    this.ChangeComponent({
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
                    this.ChangeComponent({
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
                    this.ChangeComponent(
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
                    this.ChangeComponent(
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
                    this.ChangeComponent(
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
                    this.ChangeComponent(
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
    ChangeComponent(val){
        console.log(val);
        this.DataKey = val.infokey.toString();
        this.Component = val.component.toString();
    }
},
computed:{
    CurrentFormData:function(){
        console.log(this.FormsData[this.DataKey].inputs)
        return this.FormsData[this.DataKey];
    }
}
}
</script>
<style scoped>

</style>