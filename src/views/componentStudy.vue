<template>
    <div class="component page">
        <fieldset class="fieldset">
            <legend>父子组件互相传值</legend>
            <div class="fieldContent">
                <parent></parent>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>使用自定义事件的表单输入组件</legend>
            <div class="fieldContent">
                <p>v-model的语法糖:使用v-bind:value="something" v-on:input="something = $event.target.value" 实现双向绑定,等同于 v-model="something"</p>
                <input v-bind:value="something" v-on:input="something = $event.target.value">
                <p>
                    <span>{{something}}</span>
                </p>
            </div>
            <div class="fieldContent" style="margin-top: 10px;">
                <p>理解完v-model的语法糖,创建一个自定义事件的表单输入组件</p>
                <p>
                    <span>{{customInputHtml}}</span>
                </p>
                <customInput data-control="phone" v-model="customInput1"></customInput>
                <p>customInput1,phone:
                    <span>{{customInput1}}</span>
                </p>

                <customInput data-control="idCard" v-model="customInput2"></customInput>

                <p>customInput2,idCard:
                    <span>{{customInput2}}</span>
                </p>

                <customInput data-control="magnify" v-model="customInput3"></customInput>

                <p>customInput3,magnify:
                    <span>{{customInput3}}</span>
                </p>

                <customInput data-control="phone,magnify" v-model="customInput4"></customInput>

                <p>customInput4,phone,magnify:
                    <span>{{customInput4}}</span>
                </p>
                <customInput data-control="entertwice,phone,magnify" v-model="customInput5"></customInput>

                <p>customInput5,phone,magnify,entertwice:
                    <span>{{customInput5}}</span>
                </p>

            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>非父子组件的通信</legend>
            <div class="fieldContent">
                <p>
                    <span>总结:组件A实例化对象 在created后 监听 自定义事件 A.on('id-selected',function(){}),组件B的内用代码 A.$emit('id-selected', 1)</span>
                </p>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>使用插槽分发内容</legend>
            <div class="fieldContent">
                <slotParent>
                    <customInput data-control="phone" v-model="customInput1"></customInput>
                </slotParent>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>动态组件</legend>
            <div class="fieldContent">
                <div class="mb10">
                    <select name="singleSelected" v-model="currentView" id="">
                        <option disabled value="">请选择</option>
                        <option v-for="item in componentArr" :value="item.value">{{item.text}}</option>
                    </select>
                </div>
                <transition name="component-fade" mode="out-in">
                    <keep-alive>
                        <component v-bind:is="currentView">
                            <!-- 组件在 vm.currentview 变化时改变！ -->
                        </component>
                    </keep-alive>
                </transition>

                <textarea name="" id="" cols="30" rows="10">
                    通过使用保留的
                    <component> 元素，并对其 is 特性进行动态绑定，你可以在同一个挂载点动态切换多个组件： keep-alive 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive
                        指令参数：

                        <keep-alive>
                            <component :is="currentView">
                                <!-- 非活动组件将被缓存！ -->
                            </component>
                        </keep-alive>
                </textarea>
            </div>
        </fieldset>
    </div>
</template>

<script>
    import parent from "@/components/parentChild/parent.vue"
    import customInput from "@/components/customInput.vue"
    import slotParent from "@/components/slot/parent.vue"
    export default {
        name: 'componentStudy',
        data() {
            return {
                something: '',
                customInput1: '',
                customInput2: '',
                customInput3: '',
                customInput4: '',
                customInput5: '',
                customInputHtml: '<customInput data-type="phone" v-model="customInput1"></customInput>',
                currentView: 'parent',
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

        },
        components: {
            'parent': parent,
            'customInput': customInput,
            'slotParent': slotParent,
        }
    }
</script>

<style>
    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity .3s ease;
    }

    .component-fade-enter,
    .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */

        {
        opacity: 0;
    }
</style>