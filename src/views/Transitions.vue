<template>
    <div class="page fade-enter-active fade-leave-active">
        <fieldset class="fieldset">
            <legend>demo</legend>
            <div class="fieldContent">

            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>透明度动画</legend>
            <div class="fieldContent">
                <button v-on:click="show = !show">
                    Toggle show
                </button>
                <transition mode="out-in" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:enter-cancelled="enterCancelled"
                    v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:after-leave="afterLeave" v-on:leave-cancelled="leaveCancelled"
                    name="fade" :duration="{ enter: 5000, leave: 8000 }">
                    <p id="hello" v-if="show">hello</p>
                </transition>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend> v-if 移除元素和创建元素动画过渡效果不同</legend>
            <div class="fieldContent">
                <button @click="show2 = !show2">
                    Toggle render show2
                </button>
                <transition name="slide-fade">
                    <p v-if="show2">hello</p>
                </transition>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>CSS 动画</legend>
            <div class="fieldContent">
                <button @click="show3 = !show3">Toggle render show3</button>
                <transition name="bounce">
                    <p v-if="show3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam
                        fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
                </transition>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>自定义过渡的类名</legend>
            <div class="fieldContent">
                <button @click="show4 = !show4">
                    Toggle render show4
                </button>
                <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
                    <p v-if="show4">hello</p>
                </transition>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>列表过渡</legend>
            <div class="fieldContent">
                <fieldset class="fieldset">
                    <legend>列表的进入/离开过渡</legend>
                    <div class="fieldContent">
                        <button v-on:click="add">Add</button>
                        <button v-on:click="remove">Remove</button>
                        <transition-group name="list" tag="p">
                            <span v-for="item in items" v-bind:key="item" class="list-item">
                                {{ item }}
                            </span>
                        </transition-group>
                    </div>
                </fieldset>
                <fieldset class="fieldset">
                    <legend>列表的排序过渡 需要引入别的插件资源</legend>
                    <div class="fieldContent">
                        <!-- <button v-on:click="shuffle">Shuffle</button>
                            <transition-group name="flip-list" tag="ul">
                              <li v-for="item in items2" v-bind:key="item">
                                {{ item }}
                              </li>
                            </transition-group> -->
                    </div>
                </fieldset>
                <fieldset class="fieldset">
                    <legend>可复用的过渡</legend>
                    <div class="fieldContent">
                        <div class="mb10">
                            <select name="singleSelected" v-model="currentView" id="">
                                <option disabled value="">请选择</option>
                                <option v-for="item in componentArr" :value="item.value">{{item.text}}</option>
                            </select>
                        </div>


                        <mySpecialTransition>
                            <component v-bind:is="currentView">
                                <!-- 组件在 vm.currentview 变化时改变！ -->
                            </component>
                        </mySpecialTransition>
                    </div>
                </fieldset>
            </div>
        </fieldset>
    </div>
</template>

<script>
    import mySpecialTransition from "@/components/mySpecialTransition.vue";
    import parent from "@/components/parentChild/parent.vue"
    import customInput from "@/components/customInput.vue"
    import slotParent from "@/components/slot/parent.vue"
    export default {
        name: "Transitions",
        components: {
            'mySpecialTransition': mySpecialTransition,
            'parent': parent,
            'customInput': customInput,
            'slotParent': slotParent,            
        },
        data() {
            return {
                show: true,
                show2: true,
                show3: true,
                show4: true,
                items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                items2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                nextNum: 10,
                currentView:'parent',
                componentArr: [{
                        text: 'parent',
                        value: 'parent'
                    },
                    {
                        text: 'customInput',
                        value: 'customInput'
                    },
                    {
                        text: 'slotParent',
                        value: 'slotParent'
                    }
                ],
            }
        },
        created: function () {
        },
        methods: {
            randomIndex: function () {
                return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            },
            // --------
            // 进入中
            // --------

            beforeEnter: function (el) {
                // ...
                console.log('beforeEnter');
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            enter: function (el, done) {
                // ...
                done()
            },
            afterEnter: function (el) {
                // ...
            },
            enterCancelled: function (el) {
                // ...
            },

            // --------
            // 离开时
            // --------

            beforeLeave: function (el) {
                // ...
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            leave: function (el, done) {
                console.log('leave');
                // ...
                done()
            },
            afterLeave: function (el) {
                // ...
            },
            // leaveCancelled 只用于 v-show 中
            leaveCancelled: function (el) {
                // ...
            }
        },
    }
</script>
<style>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 1s;
    }

    .list-enter,
    .list-leave-to
    /* .list-leave-active for below version 2.1.8 */

        {
        opacity: 0;
        transform: translateY(30px);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }


    /* 可以设置不同的进入和离开动画 */

    /* 设置持续时间和动画函数 */

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */

        {
        transform: translateX(10px);
        opacity: 0;
    }

    /* 动画 */

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in 1.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>