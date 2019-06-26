<template>
  <div class="app">
    <div class="nav">
      <router-link class="nav-a" v-for="(item,index,arr) in routerArr" :to="item.path" :key="index">{{item.name}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name :"APP2",

    data(){
      return{
        routerArr:null,
      }
    },
    created:function(){
      this.routerArr=window.routerArr2;
 
    },
    mouted:function(){},
    
    methods: {
     
    }
  }
</script>
<style>


</style>
