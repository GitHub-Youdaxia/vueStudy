<template>
    <div class="page">
        <fieldset class="fieldset">
            <legend> 输入框修饰符</legend>
            <div class="fieldContent">

                <div>
                    输入框的值:{{input1}}
                </div>
                <div>
                    v-model.lazy="input1"
                    <input type="text" name="" v-model.lazy="input1" id="">

                </div>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend> 动态加载复选框, 复选框的全选与反选</legend>
            <div class="fieldContent">
                <div style="height: 20px;">
                    选中的值:
                    <span v-for="item in checkedList">{{item.value}}</span>
                </div>
                <div>
                    <template v-for="item in checkList">
                        <input type="checkbox" name="test" :value="item.value" :key="item.value" :checked="item.checked" @click="checkBoxClick(item)">{{item.text}}
                    </template>
                </div>
                <div>
                    <button type="button" @click="checkAllOrNone">全选/全不选</button>
                    <button type="button" @click="checkReverse">反选</button>
                </div>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend> 单选框的简单使用</legend>
            <div class="fieldContent">
                <div style="height: 20px;">
                    选中的值:
                    <span>{{radioChecked==undefined?'':radioChecked.value}}</span>
                </div>
                <div>
                    <template v-for="item in radioList">
                        <input @click="radioClick(radioList,item)" type="radio" name="type" :value="item.value" :checked="item.checked" :id="'radioTest'+item.value"
                            :key="item.value">
                        <label :for="'radioTest'+item.value">{{item.text}}</label>
                    </template>
                    <button @click="radioNone">不选单选框</button>
                </div>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend> 选择框</legend>
            <div class="fieldContent">
                <h4>单选框</h4>
                <div style="height: 20px;">
                    选中的值:
                    <span>{{singleSelected}}</span>
                </div>
                <div>
                    <select name="singleSelected" v-model="singleSelected" id="">
                        <option disabled value="">请选择</option>
                        <option v-for="item in options" :value="item.value">{{item.text}}</option>
                    </select>
                </div>
            </div>
            <div class="fieldContent">
                <h4>多选框</h4>
                <div style="height: 20px;">
                    选中的值:
                    <span>{{manySelected}}</span>
                </div>
                <div>
                    <select name="manySelected" multiple v-model="manySelected" id="">
                        <option disabled value="">请选择</option>
                        <option v-for="item in options" :value="item.value">{{item.text}}</option>
                    </select>
                </div>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend> 自定义单选框:my-checkbox</legend>
            <div class="fieldContent">
                <h4>单选框</h4>
                <!-- v-model="foo" value="some value" -->
                <!-- <my-checkbox ></my-checkbox> -->
            </div>

        </fieldset>
        <fieldset class="fieldset">
            <legend> 货币输入的自定义控件:currency-input</legend>
            <div class="fieldContent">
                <p>{{price}}</p>
                <currency-input v-model="price"></currency-input>
            </div>

        </fieldset>
    </div>
</template>

<script>
    import currencyInput from '@/components/Form/currencyInput'

    //复选框
    let arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push({
            text: 'check' + i,
            value: i,
            checked: false
        });
    }
    let arr2 = [];
    for (var i = 0; i < 5; i++) {
        arr2.push({
            text: 'check' + i,
            value: i,
            checked: false
        });
    }
    // console.log(arr);
    export default {
        name: 'Form',
        components:{
            'currency-input':currencyInput
        },
        data() {
            return {
                price:null,//currency-input 用到
                //输入框
                input1: '',
                //动态加载复选框, 复选框的全选与反选
                checkList: [],
                //单选框的简单使用
                radioList: [],
                //下拉选
                singleSelected: '',
                manySelected: [],
                options: [{
                    text: 'One',
                    value: 'A'
                },
                {
                    text: 'Two',
                    value: 'B'
                },
                {
                    text: 'Three',
                    value: 'C'
                }
                ],
            }
        },
        computed: {
            allChecked: function () {
                var flag = true;
                for (let i = 0; i < this.checkList.length; i++) {
                    if (this.checkList[i]['checked'] == false) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
            checkedList: function () {
                return this.checkList.filter(item => item.checked == true);
            },
            radioChecked: function () {
                return this.radioList.filter(item => item.checked == true)[0];
            }
        },
        created: function () {
            var that = this;
            arr.forEach(item => that.checkList.push(item));
            arr2.forEach(item => that.radioList.push(item));

        },
        methods: {
            checkBoxClick: function (item, e) {
                item.checked = !item.checked;
            },
            checkAllOrNone: function () {
                if (this.allChecked) {
                    this.checkList.forEach(item => item.checked = false);
                } else {
                    this.checkList.forEach(item => item.checked = true);
                }
            },
            checkReverse: function () {
                this.checkList.forEach(item => item.checked = !item.checked)
            },
            radioClick: function (radioList, item, e) {
                radioList.map(function (a) {
                    if (item.value != a.value) {
                        a.checked = false
                    }
                });
                item.checked = !item.checked;
            },
            radioNone: function () {
                this.radioList.map(item => item.checked = false);
            }
        }
    }

</script>