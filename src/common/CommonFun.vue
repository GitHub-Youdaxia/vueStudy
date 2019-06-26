<script>
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },

        getButton: function (event) {
            if (document.implementation.hasFeature("MouseEvents", "2.0")) {
                return event.button;
            } else {
                switch (event.button) {
                    case 0:
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                        return 0;
                    case 2:
                    case 6:
                        return 2;
                    case 4:
                        return 1;
                }
            }
        },

        getCharCode: function (event) {
            if (typeof event.charCode == "number") {
                return event.charCode;
            } else {
                return event.keyCode;
            }
        },

        getClipboardText: function (event) {
            var clipboardData = (event.clipboardData || window.clipboardData);
            return clipboardData.getData("text");
        },

        getEvent: function (event) {
            return event ? event : window.event;
        },

        getRelatedTarget: function (event) {
            if (event.relatedTarget) {
                return event.relatedTarget;
            } else if (event.toElement) {
                return event.toElement;
            } else if (event.fromElement) {
                return event.fromElement;
            } else {
                return null;
            }

        },

        getTarget: function (event) {
            return event.target || event.srcElement;
        },

        getWheelDelta: function (event) {
            if (event.wheelDelta) {
                return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
            } else {
                return -event.detail * 40;
            }
        },

        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        removeHandler: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },

        setClipboardText: function (event, value) {
            if (event.clipboardData) {
                event.clipboardData.setData("text/plain", value);
            } else if (window.clipboardData) {
                window.clipboardData.setData("text", value);
            }
        },

        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };

    function getUniqueId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16).toUpperCase();
        });
    }

    var inputControl = {
        onlyNumber: function (ele) {
            // 控制输入框只能输入数字0123456789 和退格键，上下左右，不能输进特殊字符
            EventUtil.addHandler(ele, 'keydown', function (event) {
                let e = EventUtil.getEvent(event);
                if (e.keyCode < 48 && e.keyCode != 8&& e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode !=
                    39 && e.keyCode != 40) {
                    EventUtil.preventDefault(e);
                }
                if (e.keyCode > 57 && e.keyCode < 96) {
                    EventUtil.preventDefault(e);
                }
                if (e.keyCode > 105) {
                    EventUtil.preventDefault(e);
                }
                //禁止输入shift+1，shift+2 ...
                if (e.shiftKey && (e.keyCode >= 48 && e.keyCode <= 57)) {
                    EventUtil.preventDefault(e);
                }
            })
        },
    };
    export default {
        getUniqueId: getUniqueId, //获得唯一id
        EventUtil: EventUtil,
        inputControl: inputControl,
    }
</script>