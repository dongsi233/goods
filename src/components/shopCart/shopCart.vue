<template>
  <div>
    <div class="shopcart">
      <transition name="fade">
        <div class="shopcart_list" v-show="isShow">
          <div class="list_header">
            <span>购物车</span>
            <span>清空</span>
          </div>
          <ul class="list_content">
            <li v-for="(item, index) in selectFoodList" :key="index">
              <span>{{item.name}}</span>
              
              <cartControl :food="item"></cartControl>
              <span class='price'>￥{{item.value * item.count}}元</span>
            </li>
          </ul>
        </div>
      </transition>
      <div class="shopcart_left" @click="toggleList">
        <div class="cart_icon_wrap">
          <div class="cart_icon">
            <i class="icon-close"></i>
            <div class="num" v-show="totalNum > 0">{{totalNum}}</div>
          </div>
        </div>
        <div class="price" :class="{'active':totalPrice > 0}">￥{{totalPrice}}元</div>
        <div class="desc">另需5元配送费</div>
      </div>
      <div class="shopcart_right">去结算</div>
    </div>
    <transition name="fade">
      <div class="list_mask" v-show="isShow"></div>
    </transition>
  </div>
</template>
<script>
import cartControl from '@/components/cartControl/cartControl'

export default {
  name: 'shopCart',
  components: {
    cartControl
  },
  data () {
    return {
      isShow: false,
      selectFoodList: this.$store.state.selectFoodList
    }
  },
  methods: {
    toggleList () {
      this.isShow = !this.isShow;
      console.log(this.selectFoodList);
    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0;
      for (let i = 0; i < this.selectFoodList.length; i++) {
        let item = this.selectFoodList[i];
        totalPrice += item.value * item.count;
      }
      return totalPrice;
    },
    totalNum () {
      let totalNum = 0;
      this.selectFoodList.map(item => {
        totalNum += item.count
      });
      return totalNum;
    }
  }
}
</script>
<style lang="scss" scoped>
  $height: 100px;
  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    height: $height;
    background: #000;
    z-index: 100;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    .shopcart_left {
      display: flex;
      align-items: center;
      color:rgba(255, 255, 255, 0.4);
      .cart_icon_wrap {
        width: 100px;
        height: 100px;
        display: inline-block;
        border-radius: 50%;
        background: #000;
        padding: 10px;
        position: relative;
        top: -10px;
        margin: 0 15px;
        .cart_icon {
          width: 100%;
          height: 100%;
          background: #00a0dc;
          border-radius: 50%;
          .num {
            position: absolute;
            top: 0px;
            padding: 5px 10px;
            border-radius: 10px;
            background: red;
            color: #fff;
            right: 0;
          }
          i {
            font-size: 48px;
            color: #fff;
            line-height: 100px;
          }
        }
      }
      .price {
        margin-right: 10px;
        
        &.active {
          color: #fff;
          font-size: 32px;
        }
      }
      .desc {
        border-left: 1px solid currentColor;
        padding: 0 10px;
      }
    }
    .shopcart_right {
      width: 210px;
      background: green;
      color: #fff;
      height: 100%;
      line-height: $height;
    }
    .shopcart_list {
      position: absolute;
      bottom: $height;
      width: 100%;
      .list_header {
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        background: #f3f5f7;
        align-items: center;
      }
      .list_content {
        li {
          height: $height;
          background: #fff;
          padding: 0 20px;
          line-height: $height;
          text-align: left;
          position: relative;
          .price {
            color: red;
            position: absolute;
            right: 200px;
          }
          & >>> .cartcontrol-wrapper {
           
          }
        }
      }
    }
  }
  .list_mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    background: #000;
    z-index: 99;
  }

  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
    
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  
</style>

