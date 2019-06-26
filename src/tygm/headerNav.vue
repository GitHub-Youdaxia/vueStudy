<template>
    <div class="header-nav-box" >
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                下拉菜单1
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="黄金糕1">黄金糕1</el-dropdown-item>
                <el-dropdown-item command="黄金糕2">黄金糕2</el-dropdown-item>
                <el-dropdown-item command="黄金糕3">黄金糕3</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                下拉菜单2
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="黄金糕2-1">黄金糕</el-dropdown-item>
                <el-dropdown-item command="黄金糕2-2">狮子头</el-dropdown-item>
                <el-dropdown-item command="黄金糕2-3">螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                下拉菜单3
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "headerNav",
        data() {
            return {
                msg: '',
            }
        },
        computed: {

        },
        methods: {
            handleCommand(command){
                this.$emit("dropdownItemClick",{command:command})
            },
        },
        created: function () {
            window.___headerNav=this;
            // ___headerNav.$on tode
            this.$on('dropdownItemClick',(data)=>{
                this.$message(data.command);
            })
        },
        mounted: function () {

        },
        components: {},
    }
</script>
<style scoped>
    .header-nav-box {
        display: flex;
        /* flex-direction: row-reverse; */
        justify-content:flex-end;
        align-items:center;
        height: 100%;
    }
    .header-nav-box .el-dropdown{
        margin-right: 10px;
    }
    .header-nav-box .el-dropdown:hover{
        cursor: pointer;
    }
    .el-dropdown{
        color: #FFF;
    }
</style>