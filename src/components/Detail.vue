<template>
  <div id="main" >
    <div class="store-content item">
      <div class="item-box">
        <div class="gallery-wrapper">
          <div class="gallery">
            <div class="thumbnail">
              <ul>
                <li class="on" @click="dataList.ali_image=col" v-for="(col,index) in dataList.ali_images" :key="index" >
                  <img :src='col+"?x-oss-process=image/resize,w_54/quality,Q_90/format,webp"'>
                </li>
              </ul>
            </div>
            <div class="thumb">
              <ul>
                <li class="on">
                  <img :src='dataList.ali_image+"?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"'>
                </li>


              </ul>
            </div>
          </div>
        </div>
        <div class="banner" >
          <div class="sku-custom-title">
            <div class="params-price">
              <span><em>¥</em><i>{{dataList.price.toFixed(2)}}</i></span>
            </div>
            <div class="params-info">
              <h4>{{dataList.title}}</h4>
              <h6>{{dataList.sub_title}}</h6>
            </div>
          </div>
          <div class="sku-dynamic-params-panel">
            <div class="sku-dynamic-params clear">
              <span class="params-name">颜色</span>
              <ul class="params-colors">
                <li @click="num = index" :class="{cur:index === num}" v-for="(cee,index) in dataList.sku_list">
                  <a><i><img :src='"http://img01.smartisanos.cn/" +dataList.sku_list[index].image+ "/20X20.jpg"'></i></a>
                </li>
              </ul>
            </div>
            <div class="sku-dynamic-params clear">
              <div class="params-name">数量</div>
              <div class="params-detail clear">
                <div class="item-num js-select-quantity">
                  <span class="down" :class="now===1?'down-disabled':''" @click="nowReduce">-</span>
                  <span class="num">{{now}}</span>
                  <span class="up" :class="now===5?'up-disabled':''" @click="nowAdd">+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sku-status">
            <div class="cart-operation-wrapper clearfix">
              <span class="blue-title-btn js-add-cart" @click="DetailShopFn" ><a>加入购物车</a></span>
              <span class="gray-title-btn" ><a>现在购买</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '@/assets/css/item.css'

  import data from "../assets/datas/newItemsData.js"
  export default{
    name:"Detail",
    props:["id"],
    data(){
      return{
        data,
        num:0,
        now:1,
        dataList:[]
      }
    }
  ,
    computed:{
//      dataList(){
//        return  data.filter(item=>item.sku_id === Number(this.id))[0];
//      }

    },
    created(){
        this.dataList = this.data.filter(item=>item.sku_id === Number(this.id))[0];


    },
    methods:{
      all(){
        console.log("this.dataList测试数据：",this.dataList)
      },
      nowAdd(){
        if(this.now === this.dataList.limit_num){
          this.now = this.dataList.limit_num;
          return
        }
        this.now +=1
      },
      nowReduce(){
        if(this.now === 1){
          this.now = 1
          return
        }
        this.now -=1
      },
      DetailShopFn(){
        this.dataList.n = this.now;
        console.log(this.dataList.n);
        this.$store.commit('DetailShop',this.dataList);
      }

    }


  }
</script>


<style>

</style>



