<template>
  <div class="nav-cart-wrapper">
    <div class="nav-cart-list">
      <div class="empty" v-show="$store.state.commodNum.length===0">
        <h3>购物车为空</h3>
        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
      </div>
      <div class="full"  v-show="$store.state.commodNum.length!==0">
        <div class="nav-cart-items">
          <ul>
            <li class="clear" v-for="good in goodShop">
              <div class="cart-item js-cart-item cart-item-sell">
                <div class="cart-item-inner">
                  <div class="item-thumb">
                    <!--<img :src="s">-->
                    <img :src="good.ali_image">
                  </div>
                  <div class="item-desc">
                    <div class="cart-cell">
                      <h4>
                        <a href="#/item/100027401">{{good.title}}</a>
                      </h4>
                      <p class="attrs">
                        <span>{{good.spec_json.show_name}}</span>
                      </p>
                      <h6>
                        <span class="price-icon">¥</span><span class="price-num">{{good.price}}</span><span class="item-num">x {{good.n}}</span>
                      </h6>
                    </div>
                  </div>
                  <div class="del-btn" @click="delFn(good.sku_id)">删除</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-cart-total">
          <p>共 <strong class="ng-binding">{{$store.getters.sum}}</strong> 件商品</p>
          <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{ $store.getters.sumMoney.toFixed(2) }}</span></h5>
          <h6>
            <!--<a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>-->
            <router-link class="nav-cart-btn" to='/shopcaet'>去购物车</router-link>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>



  export default{
      name:"Cart",
    computed:{
      goodShop(){//获取商品数据
        return this.$store.state.commodNum
      }
    },
    methods:{
      delFn(id){
        //修改store（vuex）中的购物车数据
        this.$store.commit('removeGood',id);


//==========================================把数据存到浏览器localStorage中================================
        //删除
        this.$storage.removeStorage("goodList")
//        localStorage.removeItem( "goodList" );//先删除数据
        //在设置数据
//        localStorage.setItem( "goodList",JSON.stringify(this.$store.state.commodNum) )//将对象转化成字符串存储起来

        this.$storage.setItemStorage("goodList",this.$store.state.commodNum);


      }
    }
  }
</script>


