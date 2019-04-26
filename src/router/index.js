import Vue from 'vue'
import Router from 'vue-router'

import GoodList from '@/components/GoodList'
import Detail from '@/components/Detail'
import ShopCaet from '@/components/ShopCart'
import SubMit from '@/components/SubMit'
import Succeed from '@/components/Succeed'
import orderForm from '@/components/orderForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'GoodList',
      component: GoodList
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail,
      props:true
    },
    {
      path: '/shopcaet',
      name:'ShopCaet',
      component: ShopCaet
    },
    {
      path: '/submit',
      name:'SubMit',
      component: SubMit
    },
    {
      path: '/succeed',
      name:'Succeed',
      component: Succeed
    },
    {
      path: '/orderform',
      name:'orderForm',
      component: orderForm
    }



  ]
})
