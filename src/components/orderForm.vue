<template>
  <div id="main">
    <div class="content clear">
      <div class="account-wrapper">
        <div class="account-sidebar">
          <div class="avatar gray-box clear">
            <div class="js-account-sidebar-info">
              <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png">
            </div>
            <div class="box-inner">
              <ul class="account-nav">
                <li class="current"><a href="javascript:;">我的订单</a></li>
                <li class=""><a href="javascript:;">收货地址</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="account-content">
          <div class="account-order">
            <div class="gray-box">
              <div class="title columns-title pre-title">
                <h2>我的订单</h2>
                <div class="gray-btn-menu sort-status-menu">
                  <span class="label"><i class="arrow"></i> 全部状态 </span>
                  <ul class="menu-list">
                    <li class="selected"><a href="javascript:;">全部状态</a></li>
                    <li class=""><a href="javascript:;">未完成</a></li>
                    <li class=""><a href="javascript:;">已完成</a></li>
                    <li class=""><a href="javascript:;">已关闭</a></li>
                  </ul>
                </div>
                <div class="gray-btn-menu sort-time-menu -gray-btn-menu-on">
                  <span class="label"><i class="arrow"></i> 最近三个月 </span>
                  <ul class="menu-list">
                    <li class="selected"><a href="javascript:;">最近三个月</a></li>
                    <li class=""><a href="javascript:;">今年内</a></li>
                    <li class=""><a href="javascript:;">2016年</a></li>
                    <li class=""><a href="javascript:;">2015年</a></li>
                  </ul>
                </div>
              </div>
              <div class="js-list-inner">
                <div class="box-inner order-cart order-list-cart clear">
                  <div class="gray-sub-title cart-title">
                    <span class="date">2017-06-19</span>
                    <span class="order-id"> 订单号： <a href="javascript:;">170619703723305</a> </span>
                    <span class="order-detail"><a href="javascript:;">查看详情&gt;</a> </span> <span class="sub-total">应付总额</span>
                    <span class="num">数量</span>
                    <span class="price">单价</span>
                  </div>
                  <div class="cart">
                    <div class="cart-items clear">
                      <div class="prod-info clear">
                        <div class="items-thumb">
                          <a href="javascript:;" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"></a>
                        </div>
                        <div class="items-params clear">
                          <div class="name vh-center">
                            <a href="javascript:;" target="_blank" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                          </div>
                          <div class="detail"></div>
                        </div>
                        <div class="num">1</div>
                        <div class="price">¥ 49.00</div>
                      </div>
                    </div>
                    <div class="cart-items clear">
                      <div class="prod-info clear">
                        <div class="items-thumb">
                          <a href="javascript:;" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"></a>
                        </div>
                        <div class="items-params clear">
                          <div class="name vh-center">
                            <a href="javascript:;" target="_blank" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                          </div>
                          <div class="detail"></div>
                        </div>
                        <div class="num">1</div>
                        <div class="price">¥ 49.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="prod-operation">
                    <div class="total">¥ 297.00</div>
                    <div class="status"><a class="blue-small-btn js-payment-order">现在付款</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import "@/assets/css/order.css"//引入css样式
  import "@/assets/css/account.css"//引入css样式

  export default{
      name:"orderForm",
  }
</script>



