<template>
<div class="">
    <ul class="flex-column nav float-nav nav-pills " @click="NavClick">
        <a v-for="header in headers" @click="header.click" :key="header.id" class="nav-link" :class="header.active ? 'active':''">
          {{header.name }}
        </a>
        
    </ul>
</div>
</template>
<script>
export default{
    name: "SubNavbar",
    props:{
        Headers: Array,
    },
    data(){
        return{
            headers: this.Headers,
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