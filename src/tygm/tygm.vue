<template>
    <div class="tygm">
        <div class="header">
            <div class="header-logo">
                <i class="el-icon-platform-eleme"></i>
            </div>
            <div class="header-search">
                <menu-search :searchData="searchData"></menu-search>
            </div>
            <div class="header-nav">
                <header-nav></header-nav>
            </div>
        </div>
        <div class="tree-menu">
            <div class="tree-menu-left bg7"></div>
            <div class="tree-menu-right bg8">
                <tree-menu></tree-menu>
            </div>
        </div>
        <div class="content">
            <div class="content-left">
                <div class="block1 bg2"></div>
                <div class="block2 bg3"></div>
                <div class="block3 bg4">
                    <p>自己写的tab切换</p>
                    <ul class="tabs" style="display: flex;">
                        <li @click="tabActive=index" v-for="(item,index) in tabs" :class="{'tabs-li-active':index===tabActive}" style="flex-grow:1;text-align: center;">{{item.title}}</li>
                    </ul>
                    <ul class="tabs-pane">
                        <li v-for="(item,index) in tabs" v-show="index===tabActive">{{item.content}}</li>
                    </ul>
                </div>
            </div>
            <div class="content-right">
                <div class="main bg5">
                    <navtab></navtab>
                </div>
                <div class="toolbar bg6">
                    这里是状态栏
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import search from '@/tygm/search'
    import treeMenu from '@/tygm/treeMenu'
    import headerNav from '@/tygm/headerNav'
    import navtab from '@/tygm/navtab'

    const tabs=[{title:'tab1',content:'11111111111'},{title:'tab2',content:'2222222222'}];
    export default {
        name: "tygm",
        data() {
            return {
                menuData: [],
                currentView: '',
                tabs:tabs,
                tabActive:0,
            }
        },
        async created() {
            await this.getMenuData()
            window.___tygm = this;
        },
        methods: {
            async getMenuData() {
                await this.$axios.get('/tygm/menuDemo.json').then((res) => {
                    console.log('请求菜单数据了res', res);
                    this.menuData = res.data;
                    this.currentView = 'menu-search';
                },(res) => {
                    // console.log('请求菜单数据了res', res);
                    this.menuData = menuDemo.data;
                    this.currentView = 'menu-search';
                })
            },
        },
        components: {
            "menu-search": search,
            "tree-menu": treeMenu,
            "header-nav": headerNav,
            "navtab": navtab,
        },
        computed: {
            searchData: function () {
                return this.menuData.filter(function (item) {
                    return item.tx_code.length === 6;
                })
            }
        }

    }
    let menuDemo={data:[{
    "tx_code": "000001",
    "tx_name": "交易1",
    "tx_path": "T000001",
    "parent_tx_code": "2103",
    "big_pic_path": " "
},
{
    "tx_code": "000002",
    "tx_name": "交易2",
    "tx_path": "T000002",
    "parent_tx_code": "2103",
    "big_pic_path": " "
},{
    "tx_code": "000003",
    "tx_name": "交易3",
    "tx_path": "T000003",
    "parent_tx_code": "2103",
    "big_pic_path": " "
},{
    "tx_code": "000004",
    "tx_name": "交易4",
    "tx_path": "T000004",
    "parent_tx_code": "2103",
    "big_pic_path": " "
}]};
</script>
<style scoped>
    .tygm {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .header {
        height: 60px;
        background-color: #12984F;
        display: flex;
    }

    .header-logo {
        flex-basis: 250px;
        flex-shrink: 0;
    }

    .header-search {
        flex-basis: 220px;
    }

    .header-nav {
        flex-grow: 1;
    }

    .header-logo {
        text-align: center;
        background-color: #CCC;
    }

    .header-logo i {
        color: #FFF;
        font-size: 60px;
    }

    .tree-menu {
        height: 30px;
        line-height: 30px;
        display: flex;
    }

    .tree-menu-left {
        flex-basis: 250px;
        flex-shrink: 0;
    }

    .tree-menu-right {
        flex-grow: 1;
    }

    .content {
        display: flex;
        flex-grow: 1;
    }

    .content-left {
        flex-basis: 250px;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
    }

    .block1 {
        height: 100px;
    }

    .block2 {
        height: 140px;
    }

    .block3 {
        flex-grow: 1;
    }

    .content-right {
        flex-grow: 1;
        background-color: #ccc;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex-grow: 1
    }

    .toolbar {
        height: 30px;
        line-height: 30px;
    }
    .tabs-li-active{
        background: #12984F;
        color: #FFF;
    }

    /* .el-row {
        margin-bottom: 20px;

    }

    .el-row :last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    } */
</style>