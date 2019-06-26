<template>
    <div  style="height:1000px;">
    
      app2-home;
      <pre>
          new Vue({
            router2,
            render: h => h(App2)
          }).$mount('#app2')
      </pre>
    </div>
  </template>
  
  <script>
    export default {
      name :"home",

      data(){
        return{
          routerArr:null,
        }
      },
      created:function(){
    
      },
      mouted:function(){
      },
      methods: {
    
      }
    }
  </script>
  <style>


  
  </style>
  