$(function () {
    try {
        //特殊框定义
        window.tygmAllInput = {};
        tygmAllInput.toppaynum_tygm = {};
        tygmAllInput.toppaynum_tygm.Ctrl = function ($target, options) {
            $target.intNumberInput();
            $target.attr('maxLength', 10);
            $target.on('blur', function () {
                tygmAllInput.toppaynum_tygm.Test($(this));
            })
        }
        tygmAllInput.toppaynum_tygm.Test = function ($target) {
            var reg = /^[0-9]{10}$/;
            if (reg.test($target.val())) {
                $target.data('validate',true);
            } else {
                $target.data('validate',false);
                $target.focus();
                $target.val("");
                $target.validTip({
                    msg: "请输入有效的止付号!"
                });
            }
        }
    } catch (error) {
        console.log('特殊框定义', error);
    }


})
$(function () {
    //输入控制
    /**
     * 控制输入框只能输入数字和字母，不能输进特殊字符
     * @param
     */
    $.fn.charNumInput = function () {
        $(this).on('input', function () {
            $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
        })
    }
    /**
     * 控制输入框只能输入数字
     * @param
     */
    $.fn.intNumberInput = function () {
        $(this).on('input', function () {
            var res = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(res);
        })
    }

})

$(function () {
    //封装插件调用

    $.fn.validTip = function (options) {
        try {
            var defaul = {
                msg: "测试提示内容",
                type: "error"
            };
            var options = $.extend({}, defaul, options);
            var msg = options.msg;
            layer.tips("<span style='color:red'>" + msg + "</span>", $(this)[0], {
                tips: [3, '#fff6f6']
            })
        } catch (error) {
            console.log(error);
        }
    }
})