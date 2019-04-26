<template>
  <div id="main">
    <div class="sku-box store-content">
      <div class="sort-option">
        <ul class="line clear">
          <li><a href="javascript:;" class="active">综合排序</a></li>
          <li><a href="javascript:;" class="">销量排序</a></li>
          <li><a href="javascript:;" class="">价格低到高</a></li>
          <li><a href="javascript:;" class="">价格高到低</a></li>
        </ul>
      </div>
      <div class="gray-box">
        <div class="item-box">
          <card v-for="item in data" :data="item" :key="item.id"></card>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import "@/assets/css/goodsList.css"//引入css样式

  import data from "../assets/datas/newGoodsData.js" //引入数据

  import Card from "@/components/Card" //添加产品列表的组件

  export default{
      name:"GoodList",
    data(){
        return{
          data //把data数据引出来
        }
    },
    created(){


    },

    components:{
        Card
    }
  }
</script>



