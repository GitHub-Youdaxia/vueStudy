<template>
    <transition name="very-special-transition" mode="out-in" v-on:before-enter="beforeEnter" v-on:after-enter="afterEnter">
        <slot></slot>
    </transition>
</template>


<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {

            }
        },
        methods: {
            beforeEnter: function (el) {
                console.log('beforeEnter el', el);
                // ...
            },
            afterEnter: function (el) {
                // ...
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /* 可以设置不同的进入和离开动画 */

    /* 设置持续时间和动画函数 */

    .very-special-transition-enter-active {
        transition: all .3s ease;
    }

    .very-special-transition-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .very-special-transition-enter,
    .very-special-transition-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */

        {
        transform: translateX(10px);
        opacity: 0;
    }
</style>