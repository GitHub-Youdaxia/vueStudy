<template>
  <div class="home page" >
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <fieldset class="fieldset">
      <legend>v-model 双向绑定</legend>
      <div class="fieldContent">
        <p>{{name}}</p>
        <input type="text" v-model="name">
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend>Object.freeze() 阻止修改现有的属性，也意味着响应系统无法再_追踪_变化</legend>
      <div class="fieldContent">
        <p>{{person.name}}</p>
        <input type="text" v-model="person.name">
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend>v-once 指令</legend>
      <div class="fieldContent">
        <span v-once>这个将不会改变: {{ once }}</span>
        <p>{{once}}</p>
        <input type="text" v-model="once">
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend>原始 HTML</legend>
      <div class="fieldContent">
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive:
          <span v-html="rawHtml"></span>
        </p>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend>修饰符</legend>
      <div class="fieldContent">
        <p>v-on:submit.prevent="onSubmit"</p>
        <form v-on:submit.prevent="onSubmit">...
          <button type="submit">提交1</button>
        </form>
        <p>v-on:submit="onSubmit//点击提交左下角有浏览器跳转的加载样字"</p>
        <form v-on:submit="onSubmit">...
          <button type="submit">提交2</button>
        </form>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend>计算属性缓存 vs 方法</legend>
      <div class="fieldContent">
        <p>计算属性</p>
        <p>
          Reversed message:{{computedReversedMessage}}
        </p>
        <p>方法</p>
        <p>Reversed message:{{reversedMessage()}}</p>
        <p>我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代</p>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend> 侦听属性</legend>
      <div class="fieldContent">
        <p>
          fullName:{{fullName}}
        </p>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend> 计算属性的getter和setter</legend>
      <div class="fieldContent">
        <p>
          computedfullName:{{computedfullName}}
        </p>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend> 绑定Class </legend>
      <div class="fieldContent">
        <div>
          <button type="button" @click="activeHandle">active</button>
          <button @click="errorHandle" type="button">error</button>
          <button type="button" @click="noactiveHandle">noactive</button>
          <button @click="noerrorHandle" type="button">noerror</button>
        </div>
        <p>
          用计算属性classObject绑定 元素的class只有依赖的值发生变化计算属性才会变化
          <div v-bind:class="classObject"></div>classObject: {{JSON.stringify(classObject)}}
        </p>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend> v-if </legend>
      <div class="fieldContent">
        <textarea>
          在
          <template> 元素上使用 v-if 条件渲染分组 因为 v-if 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个
            <template> 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含
              <template> 元素。
        </textarea>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend> 数组响应式 </legend>
      <div class="fieldContent">
        <p v-for="item in arr">
          {{item}}
        </p>
        <p>Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下： push() pop() shift() unshift() splice() sort() reverse()
        </p>
        <p>
          以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
          <p>
            // Vue.set Vue.set(vm.items, indexOfItem, newValue) // Array.prototype.splice vm.items.splice(indexOfItem, 1, newValue)
          </p>

        </p>
        <p>测试代码:window.viewsHome.$set(window.viewsHome.arr,0,'a1')</p>
        <p>测试代码:window.viewsHome.arr.splice(0,0,'a0')</p>
        <textarea style="display:block;">
          替换数组 变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：
          example1.items = example1.items.filter(function (item) { return item.message.match(/Foo/) })
        </textarea>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend> v-on:click.prevent.self 和 v-on:click.self.prevent</legend>
      <div class="fieldContent">
        <p>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。</p>
        <p>自己的理解:修饰符连着写 是且的关系,不是并列关系, </p>
        <p>click.prevent.self:先阻止默认行为,然后判断是否点击的自己</p>
        <p>click.self.prevent:如果判断点击的自己,执行click绑定的方法,阻止默认行为,如果点击不是自己,例如当事件冒泡到自己时,不执行click绑定的方法,且没有阻止默认行为,如果这个元素a元素的话,会跳转,是提交按钮的话会提交表单</p>
      </div>
    </fieldset>
  </div>
  </template>

  <script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    const person = {
      name: '没有响应式的小当'
    };
    Object.freeze(person);
    export default {
      name: 'home',
      data() {
        return {
          name: '小明',
          once: 'once',
          person: person,
          rawHtml: '<span style="color: red">This should be red.</span>',
          message: 'Hello',
          firstName: 'Foo',
          lastName: 'Bar',
          fullName: 'Foo Bar',
          //计算属性绑定class 依赖的内部变量
          isActive: true,
          error: null,
          arr: ['a', 'b', 'c'],
        }
      },
      computed: {
        //绑定class的计算属性 常用且强大的模式
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        },
        // 计算属性的 getter
        computedReversedMessage: function () {
          // `this` 指向 vm 实例
          return this.message.split('').reverse().join('')
        },
        computedfullName: {
          // getter
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          // setter
          set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        },
      },
      watch: {
        firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
      },
      created: function () {
      },
      methods: {
        click1:function(){
          alert('v-on:click.prevent.self')
        },
        click2:function(){
          alert('v-on:click.self.prevent')
        },
        click3:function(){
          alert('click3')
        },
        activeHandle: function () {
          this.active = true;
        },
        errorHandle: function () {
          this.error = true;
        },
        noactiveHandle: function () {
          this.active = false;
        },
        noerrorHandle: function () {
          this.error = false;
        },
        onSubmit: function () {
          console.log('onSubmit');
        },
        reversedMessage: function () {
          return this.message.split('').reverse().join('')
        },
      },
      components: {
        // HelloWorld

      }
    }
  </script>
  <style scoped>
    .block {
      padding: 10px;
      border: 1px solid #CCC;
    }
  </style>
