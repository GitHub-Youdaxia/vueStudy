<template>
    <div>
        <fieldset class="fieldset">
            <legend> 路由跳转</legend>
            <div class="fieldContent">
                <!-- <router-link :to="/RouterStudy/Router1"></router-link> -->
                <!-- <router-link :to="/" :key="1">router-link地址传参</router-link> -->
                <!-- <el-input type="text" placeholder="路由传参的值" v-model="info"></el-input> -->
                <el-button @click="$router.push({path:'/RouterStudy/Route1',query:{data:[],msg:new Date().getTime()}})">显示下面子路由Route1并传参</el-button>
                <el-button  @click="$router.push({path:'/RouterStudy/Route2',query:{data:[],msg:new Date().getTime()}})">显示下面子路由Route2并传参</el-button>
            </div>

        </fieldset>
        <fieldset class="fieldset">
            <legend> 获取跳转到此路有的参数</legend>
            <div class="fieldContent">
                <router-view></router-view>
            </div>

        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "RouterStudy",
        components: {},
        data() {
            return {
                info: '',
            }
        },
        computed: {

        },
        methods: {

        },
        created: function () {},
        mounted: function () {},
    }
</script>
<style scoped>
</style>