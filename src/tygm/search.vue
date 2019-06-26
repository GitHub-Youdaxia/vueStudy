<template>
    <div class="search-box">
        <!-- <el-input size="medium" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchVal">
        </el-input> -->
        <el-autocomplete size="medium" class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容"
            @select="handleSelect"></el-autocomplete>
    </div>
</template>

<script>
    export default {
        name: "tygmsearch",
        props: ["searchData"],
        data() {
            return {
                // searchVal: '',
                // searchBusinessData: [],
                state1: '',
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var searchBusinessData = this.searchBusinessData;
                var results = queryString ? searchBusinessData.filter(this.createFilter(queryString)) :
                    searchBusinessData;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return ((restaurant.value).indexOf(queryString) != -1);
                };
            },
            loadAll() {
                // // console.log(this.searchData);
                // return;
                // this.searchData= this.searchData.map((item,index)=>{
                //     item.value=item.tx_code+'-'+item.tx_name;
                // });
                // return this.searchData;
            },
            handleSelect(item) {
                console.log(item);
                // return;
                // var arr=item.tx_path.split('/');
                if (window.menuArr.indexOf(item.tx_path) != -1) {
                    tygmNavtab.editableTabs.push({
                        title: item.tx_name,
                        name: item.tx_code,
                        content: item.tx_path,
                        closable: true
                    })
                }else{
                    this.$message('没有此交易文件!')
                }
                this.state1='';

            }
        },
        computed: {
            searchBusinessData: function () {
                // debugger;
                this.searchData.map((item, index) => {
                    item.value = item.tx_code + '-' + item.tx_name;
                });
                return this.searchData;
            }
        },
        mounted() {
            // this.searchBusinessData = this.loadAll();
        },
        created: function () {
            // console.log(this.searchData);
        },
        updated: function () {},
    }
</script>
<style scoped>
    .search-box {
        height: 60px;
        display: flex;
        padding-left: 6px;
    }

    .search-box .el-input {
        margin: auto;
    }

    .search-box .el-autocomplete {
        margin: auto;
        width: 94%;
    }
</style>