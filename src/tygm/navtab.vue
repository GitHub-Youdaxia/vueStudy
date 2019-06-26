<template>
    <div>
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name" :closable="item.closable">
                <component :is="item.content"></component>
            </el-tab-pane>
        </el-tabs>
        <!-- <my-home></my-home> -->
    </div>
</template>

<script>
    import home from "@/tygm/home"

    export default {
        name: "tygmNavtab",
        components:{
            "home":home,
        },
        data() {
            return {
                msg: '',
                editableTabsValue: '1',
                editableTabs: [{
                    title: '我的主页',
                    name: '1',
                    content:'home',
                    closable:false
                }],
                tabIndex:1,
                navtabList:[],
            }
        },
        watch:{
            editableTabs:function(){
                
            }
        },
        computed: {

        },
        methods: {
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'T000001'
                    });
                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove') {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            }
        },
        created: function () {
            window.tygmNavtab=this;
        },
        mounted: function () {},
    }
</script>
<style scoped>
    /*tygm tree-menu*/

    .tree-menu .el-menu--horizontal>.el-menu-item {
        height: 30px !important;
        line-height: 30px !important;
    }

    .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 30px !important;
        line-height: 30px !important;
    }


    /*tygm tree-menu*/
</style>