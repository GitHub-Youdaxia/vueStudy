<template>
    <transition name="fade">
      <div class="message" :class="type" v-if="visible">
        <i class="icon-type iconfont" :class="'icon-'+type"></i>
        <div class="content">{{content}}
          <i v-if="hasClose" class="btn-close iconfont icon-close" @click="visible=false"></i>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
    export default {
      name: "MyMessage",
      data() {
        return {
          content: '',
          time: 3000,
          visible: false,
          type:'info',//'success','warning','error'
          hasClose:false,
        }
      },
      created:function(){
          window.vueExtendMessage=this;
      },
      mounted() {
        this.close()
      },
      methods: {
        close() {
          window.setTimeout(() =>{
            this.visible = false
          }, this.time);
        }
      }
    }
  </script>
  <style scoped>
      .message {
          position: fixed;
          margin: auto;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin-top: 80px;
          text-align: center;
      }
  </style>
