<template>
  <div id="main" class="hander-car">
    <div class="store-content">
      <div class="cart-box">
        <div class="title">
          <h2>购物清单</h2>
        </div>
        <div class="cart-inner">
          <div class="empty-label hide">
            <h3>您的购物车中还没有商品</h3>
            <a class="link" href="javascript:;">现在选购</a>
          </div>
          <div>
            <div class="cart-table-title">
              <span class="name">商品信息</span>
              <span class="operation">操作</span>
              <span class="subtotal">小计</span>
              <span class="num">数量</span>
              <span class="price">单价</span>
            </div>
            <div class="cart-table">
              <div class="cart-group">
                <!--购物列表-->
                <div v-for="(itmm,index) in goodShop" :key="itmm.id" class="cart-top-items">
                  <div class="cart-items">
                    <div class="items-choose">
                      <span class="blue-checkbox-new "
                            :class="itmm.iscommodity ?'checkbox-on':''"
                            @click="$store.commit('moveCommoDity',itmm)"><a></a></span>
                    </div>
                    <div class="items-thumb">
                      <img :src="itmm.ali_image">
                      <a href="javascript:;" target="_blank"></a>
                    </div>
                    <div class="name hide-row" >
                      <div class="name-table">
                        <a href="javascript:;" target="_blank">{{itmm.sub_title}}</a>
                        <ul class="attribute">
                          <li>{{itmm.spec_json.show_name}}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="operation">
                      <a class="items-delete-btn" @click="$store.commit('DeleteShop',itmm.id)"></a>
                    </div>
                    <div class="subtotal">{{itmm.price*itmm.n}}</div>
                    <div class="item-cols-num">
                      <div class="select js-select-quantity">

                        <span class="down" :class="itmm.n===1?'down-disabled':''" @click="$store.commit('reduceNum',itmm)">-</span>

                        <span class="num">{{itmm.n}}
														<input type="text" style="display: inline-block;">
													</span>
                        <span class="up" @click="$store.commit('addNum',itmm)">+</span>
                      </div>
                    </div>
                    <div class="price">¥ {{itmm.price}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-bottom-bg fix-bottom">
          <div class="cart-bar-operation">
            <div>
              <div class="choose-all js-choose-all">
                <span class="blue-checkbox-new"
                      :class="$store.state.isChecked&&$store.state.commodNum.length?'checkbox-on':''"
                      @click="$store.commit('outChecked')"
                ><a></a></span>
                全选
              </div>
              <div class="delete-choose-goods" @click="$store.commit('clearComplete')">删除选中的商品</div>
            </div>
          </div>
          <div class="shipping">
            <div class="shipping-box">
              <div class="shipping-total shipping-num">
                <h4 class="">
                  已选择 <i>{{$store.getters.sumShoppFn}}</i> 件商品
                </h4>
                <h5>
                  共计 <i >{{$store.getters.sum}}</i> 件商品
                </h5>
              </div>
              <div class="shipping-total shipping-price">
                <h4 class="">
                  应付总额：<span>￥</span><i >{{$store.getters.sumPriceFn.toFixed(2)}}</i>
                </h4>
                <h5 class="shipping-tips">
                  应付总额不含运费
                </h5>

              </div>
            </div>
            <span class="jianguo-blue-main-btn big-main-btn js-checkout"
                  :class="$store.getters.six||$store.state.isChecked?'':'disabled-btn'">
              <router-link to='/submit'>现在结算</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import '@/assets/css/cart.css'
  export default{
    name:"ShopCart",
    data(){
      return{
        nee:0
      }

    },
    computed:{
      goodShop(){//获取商品数据
        return this.$store.state.commodNum
      }
    },
    methods:{

    }

  }


</script>

<style>

</style>


