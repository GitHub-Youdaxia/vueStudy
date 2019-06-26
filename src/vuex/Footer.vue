<template>
    <div class="footer" v-show="isShow">
        这里是底部
        <p> ___APP 是APP.vue组件 的实例化对象,___APP.$store.dispatch('hideFooter')可以隐藏底部</p>
        <p> 5秒后  自动调用  ___APP.$store.dispatch('hideFooter')可以隐藏底部</p>
        <p> 任何一个实例化的组件 例如 ___APP 都可以调用 ___APP.$store.dispatch('hideFooter') 来修改 共享的状态 去控制底部显示不显示</p>
        
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {

            }
        },
        created: function () {
            setTimeout(() => {
                ___APP.$store.dispatch('hideFooter')    
            }, 5000);
        },
        methods: {

        },
        computed: {
            isShow() {
                return this.$store.getters.isShow;
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: #CCC;
    }
</style>