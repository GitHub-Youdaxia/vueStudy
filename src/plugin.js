import GlobalComponent from '@/vueExtend/index'
//定义全局公共方法
import CommonFun from './common/CommonFun' //引用文件
console.log('plugin.js');

const MyPlugin={};
MyPlugin.install = function (Vue, options) {

    window.getJSONData=function(obj,num=10){
        var arr=[];
        for (let index = 1; index <= num ; index++) {
            var item={};
            for( let prop in obj){
                item[prop]=prop+""+index;
            }
            arr.push(item)
        }
        console.log(JSON.stringify(arr));
        return arr;
    }
    // getJSONData({name:"",age:""})
    
    window.getArrayData=function(str,num=10){
        var arr=[];
    
        for (let index = 1; index <= num ; index++) {
            
            arr.push(str+""+index);
        } 
        console.log(JSON.stringify(arr));
        return arr; 
    }
    // getArrayData('left')


    Vue.prototype.$message2 = GlobalComponent.Message2.install;
    Vue.prototype.$message1 = GlobalComponent.Message1.install;
    Vue.prototype.CommonFun = CommonFun //挂载到Vue实例上面



    //全局混入
    Vue.mixin({
        created: function () {
            //每个vue实例对象 都赋给 window下的全局变量,可以测试用;
            //如果每个组件的name都严格按照 src下的 文件目录+文件名来命名,则可把所有vue实例赋给全局变量,每个组件都能方便使用其他vue实例
            window['___' + this.$options.name] = this;
        }
    })


    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el) {
            // 聚焦元素
            el.focus()
        }
    })

    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }

    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }

    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }

    // 5. 注册好多vue全局组件
    // console.log(require.context('./tygm/business'),true,/\.vue/);
    // 大量引入组件
    // let f=r=>{
    //     console.log(r.keys());
    //     return r.keys().map(key=>r(key));
    // }
    // console.log('大量组件',f(require.context('./tygm/business'),true,/\.vue/));
    window.menuArr=[];
    const requireComponents=require.context('./tygm/business',true,/\.vue/);
    requireComponents.keys().forEach(fileName=>{
        //组件实例
        const reqCom=requireComponents(fileName)
        console.log(fileName);
        //截取路径作为组件名
        var arr=fileName.split('/');
        const reqComName=arr[arr.length-1].replace('.vue','')
        menuArr.push(reqComName)
        //组件挂载,注册全局组件
        Vue.component(reqComName,reqCom.default||reqCom)
    })

    //6.自定义混合策略

    Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
        if(child){
            return child + 1
        }else{
            return '0'
        }
      }
    //   7. 须使 Vue 忽略在 Vue 之外的自定义元素 (e.g. 使用了 Web Components APIs)。否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告。
      Vue.config.ignoredElements = [
        'my-custom-web-component',
        'another-web-component',
        // 用一个 `RegExp` 忽略所有“ion-”开头的元素
        // 仅在 2.5+ 支持
        /^ion-/
      ]
    //   8.
    //   <input type="text" @keyup.media-play-pause="method">
    //   给 v-on 自定义键位别名。
      Vue.config.keyCodes = {
        a: 65,
        f1: 112,
        // camelCase 不可用
        mediaPlayPause: 179,
        // 取而代之的是 kebab-case 且用双引号括起来
        "media-play-pause": 179,
        up: [38, 87],
        
      }

      //绑定一个快捷键 ctrl+z 返回 ___APP里的路由的上一层
      document.onkeydown=function(event){
        if(event.keyCode=='90'&&event.ctrlKey==true){
            ___APP.$router.go(-1)
         }
    }
}
export default MyPlugin