<template>
    <div class="scroll-demo">
        <div class="header">
            <!-- <span @click="$router.go(-1)">返回上一页</span> -->

            <h3>vue中通过better-scroll实现商城分类的左右联动</h3>

        </div>
        <div class="mall">
            <div class="wrapper" ref='wrapper'>
                <ul class="cate-left">
                    <li class="ellipsis" @click="changeCate(index)" :class="{active: index === activeIndex}" v-for="(list,index) in shopData.left"
                        :key='index'>{{list}}</li>
                </ul>
            </div>

            <div class="wrapper2" ref='wrapper2' @scroll.native='scroll'>
                <ul class="cate-right">
                    <li class="ellipsis" ref='contents' v-for="(list,index) in shopData.right" :key='index'>
                        <div class="title">{{list.leftTitle}}</div>
                        <div class="goods-box">
                            <div class="goods" v-for='item in 5' :key='item'>
                                <img :src='list.img'>
                                <div class="footer">商品标题-{{item}}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    const demoList = [];
    for (let index = 0; index < 10; index++) {
        demoList.push('测试' + index);
    }
    export default {
        data() {
            return {
                lists: demoList,
                activeIndex: 0,
                shopData: {}, // 商品数据
                scrollTops: [],
                scrollY: 0
            }
        },
        async created() {
            window.betterScroll = this;
            await this.getShopData()
            this.$nextTick(() => {
                this.scrollInit()
            })
            //修改 vuex的共享值 控制了 路由导航是否显示 已由全局注入代码实现 在mixin.js
            // this.$store.dispatch('hideNav')
        },
        watch: {
            scrollY(newVal) {
                // console.log(newVal)
                let scrolls = this.scrollTops
                if (newVal >= scrolls[scrolls.length - 1]) {
                    this.activeIndex = scrolls.length - 1
                    return
                }
                for (let i = 0; i < scrolls.length; i++) {
                    if (newVal >= scrolls[i] - 50 && newVal <= scrolls[i + 1] - 50) {
                        this.activeIndex = i
                        return
                    }
                }
            },
        },
        mounted() {
            let scrollH = 0
            // 保证视图渲染完成
            // 此处必须用this.$nextTick()，因为当时只用了setTimeout()，在电脑模拟器上可以使用，但是到了手机上之后就获取不到dom了

        },
        methods: {
            /**
             * 点击切换左侧导航的分类
             * 同时右侧滚动到相应位置
             */
            changeCate(index) {
                console.log(index)
                // this.curIndex = index
                this.scroll.scrollTo(0, -this.scrollTops[index], 400)
            },
            /**
             * 获取商品数据
             * @Author   tomorrow-here
             * @DateTime 2019-01-10
             */
            async getShopData() {
                await this.$axios.get('/betterScroll/shopData.json').then((res) => {
                    this.shopData = res.data;
                    // console.log(this.shopData);
                    let scrollH = 0
                    this.$nextTick(() => {
                        setTimeout(() => {
                            // 获取wrapper2中所有滚动的li元素
                            const lis = this.$refs.contents
                            for (var i = 0; i < lis.length; i++) {
                                this.scrollTops.push(scrollH)
                                scrollH += lis[i].scrollHeight
                            }
                        }, 10)
                    })

                },(res) => {
                    this.shopData = dataDemo.data;
                    // console.log(this.shopData);
                    let scrollH = 0
                    this.$nextTick(() => {
                        setTimeout(() => {
                            // 获取wrapper2中所有滚动的li元素
                            const lis = this.$refs.contents
                            for (var i = 0; i < lis.length; i++) {
                                this.scrollTops.push(scrollH)
                                scrollH += lis[i].scrollHeight
                            }
                        }, 10)
                    })

                })
            },
            /**
             * 初始化scroll
             * @Author   tomorrow-here
             * @DateTime 2019-01-10
             */
            scrollInit() {
                this.scroll_ = new BScroll(this.$refs.wrapper, {
                    click: true // 配置允许点击事件
                })
                this.scroll = new BScroll(this.$refs.wrapper2, {
                    click: true, // 配置允许点击事件
                    probeType: 3 // 开启滚动监听
                })
                this.scroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y))
                })
            }
        }
    }
    let dataDemo={data:{
  "left": ["left1", "left2", "left3", "left4", "left5", "left6", "left7", "left8", "left9","left1", "left2", "left3", "left4", "left5", "left6", "left7", "left8", "left9"],
  "right": [{
    "leftTitle": "leftTitle1",
    "img": "./betterScroll/images/img (1).jpg"
  }, {
    "leftTitle": "leftTitle2",
    "img": "./betterScroll/images/img (2).jpg"
  }, {
    "leftTitle": "leftTitle3",
    "img": "./betterScroll/images/img (3).jpg"
  }, {
    "leftTitle": "leftTitle4",
    "img": "./betterScroll/images/img (4).jpg"
  }, {
    "leftTitle": "leftTitle5",
    "img": "./betterScroll/images/img (5).jpg"
  }, {
    "leftTitle": "leftTitle6",
    "img": "./betterScroll/images/img (6).jpg"
  }, {
    "leftTitle": "leftTitle7",
    "img": "./betterScroll/images/img (7).jpg"
  }, {
    "leftTitle": "leftTitle8",
    "img": "./betterScroll/images/img (8).jpg"
  }, {
    "leftTitle": "leftTitle9",
    "img": "./betterScroll/images/img (9).jpg"
  },{
    "leftTitle": "leftTitle1",
    "img": "./betterScroll/images/img (1).jpg"
  }, {
    "leftTitle": "leftTitle2",
    "img": "./betterScroll/images/img (2).jpg"
  }, {
    "leftTitle": "leftTitle3",
    "img": "./betterScroll/images/img (3).jpg"
  }, {
    "leftTitle": "leftTitle4",
    "img": "./betterScroll/images/img (4).jpg"
  }, {
    "leftTitle": "leftTitle5",
    "img": "./betterScroll/images/img (5).jpg"
  }, {
    "leftTitle": "leftTitle6",
    "img": "./betterScroll/images/img (6).jpg"
  }, {
    "leftTitle": "leftTitle7",
    "img": "./betterScroll/images/img (7).jpg"
  }, {
    "leftTitle": "leftTitle8",
    "img": "./betterScroll/images/img (8).jpg"
  }, {
    "leftTitle": "leftTitle9",
    "img": "./betterScroll/images/img (9).jpg"
  }]
}
};
</script>
<style scoped>
    /* #f2f2f2: #f2f2f2; */

    .scroll-demo {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .header {
        height: 100px;
    }

    .mall {
        width: 100%;
        background: #f2f2f2;
        display: flex;
    }

    .wrapper {
        overflow: hidden;
        width: 80px;
        font-size: 14px;
        background: #fff;
        text-align: center;
        border-right: 1px solid#f2f2f2;

    }

    .wrapper li {
        line-height: 40px;
        border-bottom: 1px solid#f2f2f2;
        width: 100%;
        padding: 0 5px;
        box-sizing: border-box;
        background: #fff;

    }

    .wrapper li.active {
        background: #f2f2f2;
    }

    .wrapper li.active {
        background: #f2f2f2;
    }


    .wrapper2 {
        width: 100%;
        background: #f2f2f2;
        padding: 10px 10px 10px 0;
        box-sizing: border-box;
        overflow: hidden;



    }

    .wrapper2 li {
        position: relative;

    }

    .wrapper2 li .title {
        line-height: 40px;
        padding-left: 10px;
        font-size: 14px;
        font-weight: bold;

    }

    .wrapper2 li .title.fixed {
        position: fixed;
        top: 0;
        left: 0;
    }

    .wrapper2 .goods-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .wrapper2 .goods {
        width: 50%;
        padding: 10px;
        box-sizing: border-box;


    }

    .wrapper2 .goods img {
        width: 100%;
        height: 100px;
        border-radius: 5px;
    }

    .wrapper2 .goods .footer {
        line-height: 40px;
        font-size: 12px;
        text-align: center;
    }
</style>