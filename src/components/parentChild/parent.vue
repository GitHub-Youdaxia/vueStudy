<template>
    <div class="bg1" style="padding: 10px;">
        <p>parent</p>
        <p>父组件的输入框的值:
            <span>{{input1}}</span>
        </p>
        <p>子组件传来的值是:
            <span>{{childValue}}</span>
        </p>
        <input type="text" name="" id="" v-model="input1" placeholder="v-model=input1 ">
        <!-- data-3d-date-picker="true" data-attr-ycselect="cityname,110010"所谓非 prop 特性，就是指它可以直接传入组件，而不需要定义相应的 prop。

尽管为组件定义明确的 prop 是推荐的传参方式，组件的作者却并不总能预见到组件被使用的场景。所以，组件可以接收任意传入的特性，这些特性都会被添加到组件的根元素上 -->
        <p>
            .sync,用于对prop 进行“双向绑定”,使用方式 在组件标签上 :txt1.sync="input1" ,1.在绑定的prop名字后加修饰符.sync,2.在子组件内用 this.$emit('update:txt1', newValue)
        </p>
        <child-a v-on:click="doTheThing2" v-on:click.native="doTheThing1" data-3d-date-picker="true" data-attr-ycselect="cityname,110010"
            :txt1.sync="input1" txt2="ddddd" @getChildValue="handleChildValue"></child-a>

    </div>

</template>

<script>
    import childA from "@/components/parentChild/child.vue";
    export default {
        name: 'parent',
        data() {
            return {
                input1: '',
                childValue: '',
            }
        },
        created: function () {
            window.componentsParentChildParent = this;
        },
        components: {
            'child-a': childA
        },
        methods: {
            handleChildValue: function (data) {
                console.log(data);
                this.childValue = data.msg;
            },
            doTheThing1: function (e) {
                console.log('点击了子组件,触发了click,doTheThing1');
            },
            doTheThing2: function (e) {
                console.log('点击了子组件,触发了click,doTheThing2');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p{margin: 6px;}
</style>