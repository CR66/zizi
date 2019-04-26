import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    isDisplay:false, //控制购物车显示隐藏
    commodNum:[],
    showPrompt:false,//控制弹层显示隐藏
    isId:0,
    isChecked:false,//控制全选
    isInvoice:false, //控制发票选中
    shwoFN:true, //控制头部显示
    addRess:false //控制地址栏显示

  },
  getters:{

    sumShoppFn(state){
       return state.commodNum.reduce((num,item)=>{
          if(item.iscommodity){
              num += item.n;
          }
            return num;
        },0)

    },
    sum(state){//购买商品数量
      return state.commodNum.reduce( (sum,item)=>sum+=item.n,0);

    },
    sumMoney(state){//购买商品的价格合计
      return state.commodNum.reduce( (sum,item)=>sum+=item.n*item.price,0);
    },
    six(state){
      return state.commodNum.some(item=>item.iscommodity);
    },
    sumPriceFn(state){
      return state.commodNum.reduce((num,item)=>{
        if(item.iscommodity){
        num += item.n*item.price;
      }
      return num;
    },0)
    }
  }
  ,
  mutations:{
    addrassShow(state) { //显示地址弹框
      state.addRess = true;
    },
    outAddrass(state){
      state.addRess = false;
    }
    ,
    moveDisplay(state){//移入显示购物车
      state.isDisplay = true;
    },
    oPisInvoice(state){//控制发票选择
      state.isInvoice = !state.isInvoice;
    }
    ,
    outDisplay(state){//移出隐藏购物车
      state.isDisplay = false;
    },
    outPrompt(state){//让弹层消失
      state.showPrompt = false;
    },
    outChecked(state){ //是否全部选中
      if(state.commodNum.length) {
        state.isChecked = !state.isChecked;
      }
      // if(state.isChecked){
      //   state.commodNum.forEach(item=>item.iscommodity=true);
      // }else {
      //   state.commodNum.forEach(item=>item.iscommodity=false);
      // }
      state.commodNum = state.commodNum.map(item=>{
        item.iscommodity=state.isChecked;
         return item;
      });
    },
    moveCommoDity(state,payload){//控制商品是否选中
      var res = state.commodNum.find(item=>item.sku_id === payload.sku_id);
      if(res){
        state.commodNum = state.commodNum.map(item=>{
          if(item.sku_id===payload.sku_id){
              item.iscommodity = !item.iscommodity;
           }
        return item
        })
      }
      if(state.commodNum.every(item=>item.iscommodity)&&state.commodNum.length){
        state.isChecked=true;
      }else {
        state.isChecked=false;
      }
    },
    addNum(state,payload) {//增加n值
      var res = state.commodNum.find(item => item.sku_id === payload.sku_id);
      if (res) {//如果是购物车有的
        state.commodNum = state.commodNum.map(item => {
          if(item.sku_id === payload.sku_id
      )
        {//如果id相同
          if (item.n < item.limit_num) { //没有达到限量
            item.n += 1 //就让n+1
          } else {//否则
            state.showPrompt = true; //让弹层出现
          }
        }
        return item
      })

      }
    },
    reduceNum(state,payload){
      var res = state.commodNum.find(item => item.sku_id === payload.sku_id);
      if (res) {//如果是购物车有的
        state.commodNum = state.commodNum.map(item => {
          if(item.sku_id === payload.sku_id){//如果id相同
          if (item.n === 1) { //没有达到限量
            item.n = 1 //就让n+1
          }else {
            item.n -=1
          }
        }
        return item
      })

      }
    }
    ,
    removeGood(state,payload){//删除购物车商品
      state.commodNum = state.commodNum.filter(item=>item.sku_id !== payload)
    }
    ,
    joinShop(state,payload){//购物车添加数据
      // console.log(payload,state.commodNum)
      var res = state.commodNum.find(item=>item.sku_id === payload.sku_id); //判断是否是同一个商品 ,返回当前下标
      if(res){//如果是购物车有的
        state.commodNum = state.commodNum.map(item=>{
          if(item.sku_id===payload.sku_id){//如果id相同
            if(item.n < item.limit_num){ //没有达到限量
              item.n +=1 //就让n+1
            }else {//否则
              state.showPrompt = true; //让弹层出现
            }
          }
          return item
      })

      }else {//如果购物车没有
        payload.n =1; //设置数组一个n自定义属性为1
        payload.iscommodity=false;
        var idd=state.isId +=1;
        payload.id = idd;
        state.commodNum.push(payload) //把传过来的商品数值传进数组
      }
      state.isDisplay = true; //让购物车显示

    },
    DetailShop(state,payload){ //添加购物车
      // console.log(payload);
      var res = state.commodNum.find(item=>item.sku_id === payload.sku_id); //判断是否是同一个商品 ,返回当前下标
      if(res){//如果是购物车有的
          state.commodNum = state.commodNum.map(item=>{
            if(item.sku_id===payload.sku_id){//如果id相同
              if(item.n < item.limit_num){//没有达到限量
                item.n = payload.n
              }else {//否则
                state.showPrompt = true; //让弹层出现
              }
            }
            console.log(item);
            return item
          })
      }else {//如果购物车没有
        payload.iscommodity=false;
        var idd=state.isId +=1;
        payload.id = idd;
        state.commodNum.push(payload) //把传过来的商品数值传进数组
      }
      state.isDisplay = true; //让购物车显示

    },
    DeleteShop(state,payload){//删除该商品
      var index = state.commodNum.findIndex( item=>item.id === payload );
      state.commodNum.splice(index,1);
      if(!state.commodNum.length){
        state.isChecked=false
      }

    },
    clearComplete(state){//删除选中商品
      state.commodNum=state.commodNum.filter(item=>!item.iscommodity);
      state.isChecked=false
    }
  }


})



export default store;
