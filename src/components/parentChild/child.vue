<template>
    <div class="bg2" style="height: 100px;">
        <p>child</p> 
        <p>来自父组件动态的prop值 :txt1="input1":<span>{{txt1}}</span></p>
        <p>来自父组件静态prop的传值 txt2="ddddd" :<span>{{txt2}}</span></p>

        <div>
            <input type="text" name="" id="" v-model="input1"><button type="button" @click="btnClick">传值到父组件</button>
        </div>
        <div>
            <input type="text" v-model="input2" @input="input2Input">对一个  prop txt1 进行“双向绑定”
        </div>
    </div>
</template>

<script>
    export default {
        name: 'child',
        props:['txt1','txt2'],
        data() {
            return {
                text1:'',
                text2:'',
                input1:'',
                input2:'',
                // txt1:'',
            }
        },
        created:function(){
            this.text1=this.txt1;
            this.text2=this.txt2;
        },
        computed:{
            input2_:function(){
                return this.txt1;
            },
        },
        methods:{
            btnClick:function(){
                this.$emit('getChildValue',{msg:this.input1});
            },
            input2Input:function(){
                this.$emit('update:txt1',this.input2);
            },
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>