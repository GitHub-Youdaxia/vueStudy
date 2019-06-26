<template>
    <input ref="input" v-bind:value="value" @input="updateValue($event.target.value)">
    <!-- v-on:input="updateValue($event.target.value)" -->
</template>
<script>
    let EventUtil = null;
    let inputControl = null;
    export default {
        name: 'customInput',
        props: ['value'],
        data() {
            return {
                todos: "",
            }
        },
        created: function () {
            EventUtil = this.CommonFun.EventUtil;
            inputControl = this.CommonFun.inputControl;
        },
        mounted: function () {
            let input = this.$refs.input;
            if (this.$refs.input.getAttribute('data-control') != undefined) {
                let controlList = this.$refs.input.getAttribute('data-control').split(',');
                controlList.map(item => this[item](this.$refs.input))
            }

        },
        methods: {
            phone: function (ele) {
                //最大长度
                ele.setAttribute('maxLength', '11');
                //只能输入数字
                // inputControl.onlyNumber(ele);
            },
            idCard: function (ele) {
                //最大长度
                ele.setAttribute('maxLength', '18');

                //只能输入数字
                inputControl.onlyNumber(ele);
            },
            magnify: function (ele) {
                EventUtil.addHandler(ele, 'focus', function (event) {
                    ele.style.transform = "scale(1.5)";
                })
                EventUtil.addHandler(ele, 'blur', function (event) {
                    ele.style.transform = "";
                })
            },
            entertwice: function (ele) {
                let that = this;
                let firstvalue = "";
                let lastValue = null; //记录上次双敲复核完成后的值
                EventUtil.addHandler(ele, 'blur', function (event) {
                    if (this.value != '' || firstvalue != '') {
                        console.log('entertwice 离焦 输入的值不为空');
                        that.$message1({
                            content: 'entertwice 离焦 输入的值不为空',
                            time: 5000,
                            type: 'info',
                            hasClose: true,
                        });
                        //离焦时,如果上次双敲复核完成后的值不等于这次的值,才能双敲复核,否则默认不再进行双敲复核
                        if (lastValue != this.value) {
                            lastValue = null; //每当开启双敲复核,就把上次双敲复核的值重置为null
                            if (firstvalue == this.value && firstvalue != '') {
                                //找下个焦点
                                firstvalue = "";
                                lastValue = this.value;
                                // $target.trigger('twiceDone');//触发双敲复核的完成事件

                            } else {
                                if (firstvalue == '') {
                                    firstvalue = this.value;
                                    that.$message1({
                                        content: '请再输入一次',
                                        time: 5000,
                                        type: 'info',
                                        hasClose: true,
                                    });
                                    // BJUI.alertmsg("info", "请再输入一次", {
                                    //     displayPosition: 'middlecenter',
                                    //     okCall: function () {

                                    //         $target.val("");
                                    //         $target.focus();
                                    //     }
                                    // });
                                } else {
                                    that.$message1({
                                        content: '两次输入不一致,请重新输入!',
                                        time: 5000,
                                        type: 'warn',
                                        hasClose: true,
                                    });
                                    // BJUI.alertmsg("info", "两次输入不一致,请重新输入!", {
                                    //     displayPosition: 'middlecenter',
                                    //     okCall: function () {
                                    //         $target.val("");
                                    //         $target.focus();
                                    //     }
                                    // });
                                    firstvalue = this.value;
                                }

                            }
                        }
                    }
                })
                // $target.on("resetentertwice", function () {
                //     firstvalue="";
                //     lastValue=null;
                // })

                //var firstvalue = "";
                // var lastValue = null;
                // $target.on("if.blur", function () {
                //     if($target.val()!=''||firstvalue!=''){
                //         if (lastValue != $target.val()) {
                //             lastValue = null;
                //             if (firstvalue == $(this).val() && firstvalue != '') {
                //                 //找下个焦点
                //                 firstvalue = "";
                //                 lastValue = $target.val();
                //                 $target.trigger('twiceDone');
                //                 var tabindex = $target.attr('tabindex');
                //                 var index = tabindex.replace('IF', '');
                //                 index = index * 1 + 1;
                //                 $('[tabindex=IF' + index + ']:visible').focus();

                //             } else {
                //                 if (firstvalue == '') {
                //                     firstvalue = $target.val();
                //                     BJUI.alertmsg("info", "请再输入一次", {
                //                         displayPosition: 'middlecenter',
                //                         okCall: function () {

                //                             $target.val("");
                //                             $target.focus();
                //                         }
                //                     });
                //                 } else {
                //                     BJUI.alertmsg("info", "两次输入不一致,请重新输入!", {
                //                         displayPosition: 'middlecenter',
                //                         okCall: function () {
                //                             $target.val("");
                //                             $target.focus();
                //                         }
                //                     });
                //                     firstvalue = $target.val();
                //                 }

                //             }
                //         }
                //     }else{
                //         // $target.focus();
                //         // $target.trigger("showmsg", ["error", "请输入值"]);
                //     }

                // });


            },
            updateValue: function (value) {
                this.$emit('input', value)
            }
        }
    }
</script>
<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    inputp[type="number"] {
        -moz-appearance: textfield;
    }
</style>