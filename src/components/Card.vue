<template>
  <div class="item" >
    <div>
      <div class="item-img"><img  style="opacity: 1;" :src='data.sku_info[now].ali_image+"?x-oss-process=image/resize,w_206/quality,Q_80/format,webp"'>
      </div>
      <h6>{{data.name}}</h6>
      <h3 >{{data.name_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="(cll,index) in data.sku_info">
            {{index}}
            <a href="javascript:;"
            @click="now = index"
            :class="{active:index === now}"
            >
              <img :src='"http://img01.smartisanos.cn/"+ cll.spec_json.image +"20X20.jpg"'>
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
				<span class="item-gray-btn">
					<!--<a href="javascript:;" target="_blank" @click="$router.push('/detail/'+data.sku_info[now].sku_id)">查看详情</a>-->
				<router-link :to='"/detail/"+data.sku_info[now].sku_id' >查看详情</router-link>
        </span>

          <span class="item-blue-btn" @click="addFn(data.sku_info[now])" >加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{data.sku_info[now].price.toFixed(2)}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:"Card",
    props:["data"], //接受data数据
    data(){
        return{
          now:0
        }
    },
    methods:{
      addFn(info ){
        this.$store.commit('joinShop',info);

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


