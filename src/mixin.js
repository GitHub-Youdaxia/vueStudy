const MyPlugin = {};
MyPlugin.install = function (Vue, options) {
let num=0;
    //全局混入 刷新页面的时候created执行了很多遍
    Vue.mixin({
        created: function () {
            // console.log(num++,this.$options.name);

            
            //目前觉得不能用这种方式实现
            // if (this.$options.name != "APP") {
            //     this.$store.dispatch('hideNav')
            // }else{
            //     this.$store.dispatch('showNav');
            // } 
            if(this.$options.name!=="router-link"&&this.$options.name!=undefined){
                // if(this.$options.name==="APP"){
                //     this.$store.dispatch('showNav');
                // }else{
                //     this.$store.dispatch('hideNav')
                // }
            }

        },
        watch: {
            $route(to, from) {
                //todo 没有解决 当刷新页面的时候 路由没变化 ,则路导航一定会出现
                //目前觉得不能用这种方式实现 执行了14次 我靠 ,//页面渲染了 router-link 十几个组件,也同样注入了这段代码,所以会执行了好多次
                if(this.$options.name!=="router-link"){
                    if (to.path == "/") {
                        console.log('返回主页了');
                        this.$store.dispatch('showNav');
                    }else{
                        console.log('离开主页了');
                        this.$store.dispatch('hideNav')
                    }
                }

            }
        },
    })


}
export default MyPlugin