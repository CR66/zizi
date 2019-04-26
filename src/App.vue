<template>
  <div id="app">
   <div v-show="$store.state.shwoFN">
     <tt-header></tt-header>
     <prompt v-show="$store.state.showPrompt"></prompt>
     <shipping-addr v-show="$store.state.addRess"></shipping-addr>
   </div>
    <router-view/>
  </div>
</template>

<script>
  import TtHeader from "./components/TtHeader";//锤子头部模板
  import Prompt from "./components/Prompt"; //弹框提示
  import ShippingAddr from "./components/ShippingAddr";
  import "./assets/css/reset.css"


export default {
  name: 'App',
  components:{
    TtHeader,
    Prompt,
    ShippingAddr
  }
}
</script>

