<template>
    <div>
        <div class="device" id="page-list">
            <header>
                <span class="header-title">商品列表</span>
            </header>
            <div class="page-content">
                <div class="tab-wrap">
                    <ul class="cate-tab">
                        <li class="cate" v-bind:class="{'tab-active': cate_index === index}" v-for="(item, index) in cate" @click="toggleCate(index)" :key="index">{{ item.des }}</li>
                    </ul>
                </div>
                <!-- <ul class="filter-bar">
                    <li :key="index" class="filter-opt" v-bind:class="{'filter-active': filter_index === index, 'filter-price': item.method === 'sortPrice', 'price-down': price_isAsc, 'price-up': !price_isAsc}"
                        v-for="(item, index) in sortMethods" @click="sortBy(item.method)">{{ item.name }}</li>
                </ul>
                <ul class="goods-list">
                    <li :key="index" class="goods-item" v-for="(item, index) in list">
                        <div class="goods-img">
                            <img v-bind:src="item.img" v-bind:alt="item.name">
                            <div class="flag" v-if="item.ishot">热</div>
                        </div>
                        <div class="goods-info">
                            <p class="goods-title">{{ item.name }}</p>
                            <div class="goods-price">
                                <span>¥
                                    <b>{{ item.price }}</b>
                                </span>
                            </div>
                            <span class="des">{{ item.sales }}人付款</span>
                            <span class="save" @click="addToCart(item)">+</span>
                        </div>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo",
        components: {},
        data() {
            return {
                cate_index: 0, // 当前分类项下标
                filter_index: 0, // 当前条件筛选项下标
                price_isAsc: false, // 价格是否升序
                cate: [{
                        id: 0,
                        des: '推荐'
                    },
                    {
                        id: 1,
                        des: '母婴'
                    },
                    {
                        id: 2,
                        des: '鞋包饰品'
                    },
                    {
                        id: 3,
                        des: '食品'
                    },
                    {
                        id: 4,
                        des: '数码家电'
                    },
                    {
                        id: 5,
                        des: '居家百货'
                    }
                ],
                sortMethods: [{
                        name: '综合排序',
                        method: 'setList'
                    },
                    {
                        name: '销量优先',
                        method: 'sortSales'
                    },
                    {
                        name: '价格',
                        method: 'sortPrice'
                    }
                ],
                goods: [{
                    id: 1001,
                    name: 'Beats EP头戴式耳机',
                    price: 558,
                    type: 4,
                    stock: 128,
                    sales: 1872,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1002,
                    name: '雀巢（Nestle）高钙成人奶粉',
                    price: 60,
                    type: 3,
                    stock: 5,
                    sales: 2374,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1003,
                    name: '煎炒烹炸一锅多用',
                    price: 216,
                    type: 5,
                    stock: 2,
                    sales: 351,
                    ishot: true,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1004,
                    name: 'ANNE KLEIN 潮流经典美式轻奢',
                    price: 585,
                    type: 2,
                    stock: 465,
                    sales: 8191,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1005,
                    name: '乐高EV3机器人积木玩具',
                    price: 3099,
                    type: 1,
                    stock: 154,
                    sales: 165,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1006,
                    name: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
                    price: 10967,
                    type: 2,
                    stock: 12,
                    sales: 6,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1007,
                    name: 'Kindle Paperwhite3 黑色经典版电纸书',
                    price: 805,
                    type: 4,
                    stock: 3,
                    sales: 395,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1008,
                    name: 'DELSEY 男士双肩背包',
                    price: 269,
                    type: 2,
                    stock: 18,
                    sales: 69,
                    ishot: true,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1009,
                    name: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
                    price: 89,
                    type: 1,
                    stock: 36,
                    sales: 1895,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1010,
                    name: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
                    price: 19.9,
                    type: 3,
                    stock: 353,
                    sales: 3041,
                    ishot: true,
                    img: '/cart/img/demo.jpg'
                }, {
                    id: 1011,
                    name: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
                    price: 3580,
                    type: 2,
                    stock: 5,
                    sales: 18,
                    img: '/cart/img/demo.jpg'
                }],
                list: []
            }
        },
        computed: {

        },
        methods: {


            /**
             * @method 设置商品列表
             */
            setList: function () {
                var self = this;
                this.list = this.goods.filter(function (item) {
                    return self.cate_index !== 0 ?
                        item.type === self.cate_index :
                        item
                });
            },

            /**
             * @method 切换分类
             * @param {Number} index 需要切换类目的数组下标
             */
            toggleCate: function (index) {
                this.cate_index = index;
                // 分类操作
                this.setList();
                // 价格排序状态保持不变
                var filterIndex = this.filter_index;
                (filterIndex === 2) && (this.price_isAsc = !this.price_isAsc);
                // 商品排序
                this.sortBy(this.sortMethods[filterIndex].method);
            },

            /**
             * 根据属性值进行升序或降序的比较器
             * 
             * @method 属性比较器
             * @param {String} prop 属性名
             * @param {String} type 排序方法 (desc: 降序, asc: 升序)
             */
            compare: function (prop, type) {
                type = type || 'desc';

                var flag1, flag2;
                if (type === 'desc') {
                    flag1 = -1;
                    flag2 = 1;
                } else if (type === 'asc') {
                    flag1 = 1;
                    flag2 = -1;
                }

                return function (obj1, obj2) {
                    var val1 = obj1[prop],
                        val2 = obj2[prop];

                    if (val2 < val1) {
                        return flag1;
                    } else if (val2 > val1) {
                        return flag2;
                    } else {
                        return 0;
                    }
                }
            },

            /**
             * @method 按销量排序
             */
            sortSales: function () {
                this.list.sort(this.compare('sales'));
            },

            /**
             * @method 按价格排序
             */
            sortPrice: function () {
                var type = this.price_isAsc ? 'desc' : 'asc';
                this.list.sort(this.compare('price', type));
                this.price_isAsc = !this.price_isAsc;
            },

            /**
             * @method 排序调度器
             * @param {String} method 方法名
             */
            sortBy: function (method) {
                this.filter_index = this.sortMethods.findIndex(function (item) {
                    return item.method === method;
                });
                method = method || 'setList';
                method !== 'sortPrice' && (this.price_isAsc = false);
                this[method]();
            },

            /**
             * @method 添加到购物车
             * @param {Object} goods 商品
             */
            addToCart: function (goods) {
                var alreadyIndex = Cart.cart.findIndex(function (item, index) {
                    return item.id === goods.id;
                });

                // 如果不存在则添加
                if (alreadyIndex === -1) {
                    var cartIndex = Cart.cart.length;
                    // 添加新的商品，并初始化其数量、价格、被选中状态
                    Cart.cart.push(goods);
                    Cart.$set(Cart.cart[cartIndex], 'quantity', 1);
                    Cart.$set(Cart.cart[cartIndex], 'subtotal', goods.price.toFixed(1));
                    Cart.$set(Cart.cart[cartIndex], 'checked', false);
                    // 新增商品，购物车不能为全选
                    Cart.checkAllFlag = false;
                    return;
                }

                // 如果商品已存在并且库存足够，数量加1
                var alreadyGoods = Cart.cart[alreadyIndex];
                var num = alreadyGoods.quantity,
                    stock = alreadyGoods.stock;

                if (num < stock) {
                    Cart.$set(alreadyGoods, 'quantity', ++alreadyGoods.quantity);
                    Cart.$set(alreadyGoods, 'subtotal', (alreadyGoods.price * alreadyGoods.quantity).toFixed(1));
                }
            }
        },
        created: function () {
            this.setList()

        },
        mounted: function () {

        },
    }
</script>
<style scoped>
    
.g-panel {
    margin: 0 auto;
    width: 790px;
}

.cate,
.filter-opt,
.save {
    cursor: pointer;
}

.device {
    position: relative;
    /* width: 375px; */
    min-height: 667px;
    background-color: #eee;
    overflow: hidden;
}

header {
    padding: 0 4%;
    position: relative;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: center;

}

.header-title {

    width: 50%;
    font-size: 16px;
}

.header-edit {
    float: right;
    padding: 0 10px;
    cursor: pointer;
}

.tab-wrap {
    height: 60px;
    background: red;
    overflow: hidden;
}

.cate-tab {
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #5D4285;
}

.cate {
    display: inline-block;
    width: 80px;
    height: 60px; 
    color: #fff;
    line-height: 60px;
    text-align: center;
}
.cate-tab::-webkit-scrollbar{
    display: none;
}
.tab-active {
    background-color: #9A51FF;
}

.filter-bar {
    display: flex;
    height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
    line-height: 40px;
}

.filter-opt {
    position: relative;
    width: 33.3%;
    color: #5F646E;
    text-align: center;
}

.filter-active {
    color: #7B57C5;
}

.filter-price:after {
    position: absolute;
    top: 13px;
    margin-left: 4px;
    content: '';
    display: inline-block;
    width: 8px;
    height: 14px;
    background: url('/cart/img/arrow-default.png') no-repeat;
    background-size: 8px 14px;
}

.filter-active.price-up:after {
    background: url('/cart/img/arrow-down.png') no-repeat;
    background-size: 8px 14px;
}

.filter-active.price-down:after {
    background: url('/cart/img/arrow-up.png') no-repeat;
    background-size: 8px 14px;
}

.goods-list {
    padding-top: 8px;
    height: 513px;
    overflow-y: scroll;
}

.cart-list {
    height: 560px;
}

.goods-item {
    display: flex;
    margin-bottom: 8px;
    padding: 10px 6px;
    min-height: 62px;
    background: #fff;
}

.goods-img {
    position: relative;
    margin-right: 4%;
    display: block;
    width: 16%;
}

.goods-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.goods-item .flag {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    background-color: #FC5951;
    border-radius: 50%;
}

.goods-info {
    position: relative;
    width: 80%;
}

.goods-title {
    width: 80%;
    height: 38px;
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.goods-price {
    margin-top: 6px;
    line-height: 1;
}

.goods-price span {
    font-size: 15px;
    color: #7a45e5;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
    font-size: 12px;
    color: #888;
}

.save {
    position: absolute;
    right: 10px;
    bottom: 2px;
    width: 32px;
    height: 22px;
    background-color: #7a45e5;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.empty-states {
    padding-top: 60px;
    font-size: 18px;
    color: #AEB0B7;
    text-align: center;
}

.cart-list .goods-info {
    width: 68%;
}

.item-selector {
    width: 12%;
}

.icon-selector {
    position: relative;
    margin: 16px auto 0 auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}

.selector-active {
    background-color: #7a45e5;
    border-color: #7a45e5;
}

.selector-active .icon {
    position: absolute;
    top: 2px;
    left: 2px;
}

.goods-num {
    position: absolute;
    right: 10px;
    top: 4px;
    width: 32px;
    color: #999;
    text-align: center;
}

.show-num {
    line-height: 28px;
}

.num-btn {
    width: 100%;
    height: 24px;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
}

.action-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    font-size: 15px;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.g-selector {
    float: left;
    width: 70px;
    margin-left: 4%;
    height: 52px;
    cursor: pointer;
}

.g-selector .item-selector {
    position: relative;
    display: inline-block;
}

.g-selector span {
    position: absolute;
    margin-left: 20px;
    color: #5F646E;
    top: 15px;
}

.total {
    float: right;
    color: #363636;
    font-size: 14px;
    line-height: 50px;
    margin-right: 20px;
}

.total span {
    color: #7A45E5;
}

.total b {
    font-size: 17px;
    margin-left: 4px;
}

.action-btn {
    float: right;
    width: 120px;
    height: 100%;
    color: #fff;
    text-align: center;
    font-weight: 300;
    line-height: 52px;
    cursor: pointer;
}

.buy-btn {
    background-color: #7A45E5;
}

.del-btn {
    display: none;
    background-color: #FF4069;
}

.del-box .total {
    display: none;
}

.del-box .buy-btn {
    display: none;
}

.del-box .del-btn {
    display: block;
}
</style>