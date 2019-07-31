<template>
    <div>
        <span>
            $
            <input
              ref="input"
              v-bind:value="value"
              v-on:input="updateValue($event.target.value,$event.target)"
            >
          </span>
    </div>
</template>

<script>
    export default {
        name: "demo",
        props: ['value'],
        methods: {
            // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
            updateValue: function (value,ele) {
               var res=value.replace(/[^0-9]/,'');
               ele.value=res;
                // 通过 input 事件带出数值
                this.$emit('input', Number(res))
            }
        }  ,    
        created: function () {},
        mounted: function () {},
    }
</script>
<style scoped>
</style>