import CommonFun from './common/CommonFun' //引用文件

const MyPlugin = {};
const EventUtil = CommonFun.EventUtil;

MyPlugin.install = function (Vue, options) {
    let vuePro = Vue.prototype;
    // 2. 添加全局资源
    Vue.directive('entertwice', {
        bind(el, binding, vnode, oldVnode) {
            let firstvalue = "";
            let lastValue = null; //记录上次双敲复核完成后的值
            EventUtil.addHandler(el, 'blur', function (event) {
                if (this.value != '' || firstvalue != '') {
                    console.log('entertwice 离焦 输入的值不为空');
                    // ___APP.$message('entertwice 离焦 输入的值不为空');
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
                                // ___APP.$message('请再输入一次');
                                vuePro.$message('请再输入一次');

                            } else {
                                vuePro.$message('两次输入不一致,请重新输入');
                                firstvalue = this.value;
                            }

                        }
                    }
                }
            })
        }

    })

}
export default MyPlugin