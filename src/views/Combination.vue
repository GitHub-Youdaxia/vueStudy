<template>
    <div class=" page">
        <fieldset class="fieldset">
            <legend>demo</legend>
            <div class="fieldContent">
                <select name="singleSelected" v-model="singleSelected" id="">
                    <option disabled value="">请选择</option>
                    <option v-for="item in options" :value="item.value">{{item.text}}</option>
                </select>
                <Demo :level="singleSelected*1">标题</Demo>
                
            </div>
            <div class="fieldContent">
                <component :level="singleSelected*1" :is="component1">标题</component>
            </div>
        </fieldset>
    </div>
</template>
<script>
    import Demo from "@/components/Combination/Demo"
    const selectData1 = [{
            text: 'h1',
            value: '1'
        },
        {
            text: 'h2',
            value: '2'
        },
        {
            text: 'h3',
            value: '3'
        }
    ];
    export default {
        name: 'viewCombination',
        data() {
            return {
                component1:"Demo",
                singleSelected: '1',
                options: selectData1
            }
        },
        created:function(){
            console.log('created');
        },
        render:function(){
            console.log('render');
        },
        components: {
            Demo: Demo
        }

    }
</script>
<style>
</style>