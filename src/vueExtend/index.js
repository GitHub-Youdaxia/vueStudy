import Vue from 'vue'
import Message2 from './Message2.vue'
import Message1 from './Message1.vue'

const messageBox2 = Vue.extend(Message2);
const messageBox1 = Vue.extend(Message1);

Message2.install = function (options, type) {
  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
    if (type != undefined && options != null) {
      options.type = type;
    }
  }

  let instance = new messageBox2({
    data: options
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
}
Message1.install = function (options, type) {
  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
    if (type != undefined && options != null) {
      options.type = type;
    }
  }

  let instance = new messageBox1({
    data: options
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
}
console.log('Message 自定义全局消息框组件');
export default {Message2:Message2,Message1:Message1}