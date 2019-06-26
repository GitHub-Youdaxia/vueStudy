<template>
    <div class="page about">
        <p v-for="item in list">
            {{item}}
        </p>
        <fieldset class="fieldset">
            <legend>自定义钩子样例</legend>
            <div class="fieldContent">
                <div v-directivesTest1:foo.a.b="message"></div>
            </div>
        </fieldset>
        <input type="text" @keyup.a="method1">
    </div>
</template>

<script>
    const arr = ['v-for', 'v-show', 'v-if', 'v-on', 'v-bind'];
    export default {
        name: "Directives",
        data() {
            return {
                list: arr,
                message:'',
            }
        },
        created: function () {

        },
        methods:{
            method1(){
                console.log('a');
            }
        },
        directives: {
            directivesTest1: {
                bind: function (el, binding, vnode) {
                    var s = JSON.stringify
                    el.innerHTML =
                        'name: ' + s(binding.name) + '<br>' +
                        'value: ' + s(binding.value) + '<br>' +
                        'expression: ' + s(binding.expression) + '<br>' +
                        'argument: ' + s(binding.arg) + '<br>' +
                        'modifiers: ' + s(binding.modifiers) + '<br>' +
                        'vnode keys: ' + Object.keys(vnode).join(', ')
                        el.addEventListener('click', function () {
                            console.log('点击了  使用 局部 自定义指令 directivesTest1 的元素');
                        })
                },
                inserted:function(){
                    console.log('inserted');
                },
                update:function(){
                    console.log('update');
                },
                componentUpdated:function(){
                    console.log('componentUpdated');
                },
                unbind:function(){
                    console.log('unbind');
                },
            },
        }
    }
</script>