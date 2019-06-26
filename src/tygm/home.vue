<template>
    <div>
        我的主页内容
        <div class="el-input">
            <input class="el-input__inner" type="text"  placeholder="请输入内容,需要输入两次一样的值" name="" v-entertwice>
        </div>
        <div>
            <!-- <T000001></T000001> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "tygmHome",
        data() {
            return {
                msg: '',
            }
        },
        computed: {

        },
        methods: {

        },
        created: function () {},
        mounted: function () {},
        components: {},
    }
</script>
<style scoped>
</style>