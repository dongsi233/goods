<template>
  <div class="home">
    <div class="menu_wrap">
      <ul>
        <li class='menu_item' :class="{'active':currentIndex === index}" v-for="(item, index) in goodsList" :key="index" @click='changeMenu(index)'>
          {{item.name}}
        </li>
        
      </ul>
    </div>
    <div class="food_wrap">
      <ul>
        <li class='food_list' v-for="(item, index) in goodsList" :key="index">
          <h4 class='food_title'>{{item.name}}</h4>
          <ul v-if="item.foods.length > 0">
            <li class='food_item' v-for="(subItem, i) in item.foods" :key="i">
              <div class="img">
                <img :src="subItem.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{subItem.name}}</h2>
                <p class="desc" v-if="subItem.description">{{subItem.description}}</p>
                <div class="extra">
                  <span class='count'>月售{{subItem.sellCount}}份</span>
                  <span>好评{{subItem.rating}}%</span>
                </div>
                <div class="price">
                  <span class="new_price">￥{{subItem.price}}元</span>
                  <span class="old_price" v-if="subItem.oldPrice">￥{{subItem.oldPrice}}元</span>
                  
                </div>
                <cartControl :food="subItem"></cartControl>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <shopCart></shopCart>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import shopCart from '@/components/shopCart/shopCart';
import cartControl from '@/components/cartControl/cartControl';

export default {
  name: 'home',
  components: {
    shopCart,
    cartControl
  },
  data () {
    return {
      goodsList: [],
      scrollY: 0,
      heightList: []
    }
  },
  created () {
    this.axios.fetchGet('/data/data.json').then(res => {
      this.goodsList = res.data.goods;
      this.$nextTick(() => {
        this.calculateHeight();
      })
    })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll('.menu_wrap',{
        click:true,
      })

      this.foodSroll = new BScroll('.food_wrap', {
        click:true,
        probeType: 3
      })

      this.foodSroll.on('scroll', (pos) => {
        console.log(pos.y);
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    changeMenu (index) {
      let foodList = document.querySelectorAll('.food_list');
      let el = foodList[index];
      this.foodSroll.scrollToElement(el, 300);
    },
    calculateHeight () {
      let foodList = document.querySelectorAll('.food_list');
      let totalHeight = 0;
      this.heightList.push(totalHeight);
      for(let i = 0; i < foodList.length; i++) {
        
        let item = foodList[i];
        totalHeight += item.clientHeight;
        this.heightList.push(totalHeight);
      }
      console.log(this.heightList);
    }
  },
  mounted () {
    this._initScroll();
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.heightList.length; i++) {
        let preHeight = this.heightList[i];
        let nextHeight = this.heightList[i + 1];
        if (!nextHeight || (this.scrollY >= preHeight && this.scrollY < nextHeight)) {
          return i;
        }
      }
      return 0;
    },
    
  }
}
</script>
<style lang="scss" scoped>
  .home {
    width: 100vw;
    display: flex;
    overflow: hidden;
    height: calc(100vh - 350px);
    .menu_wrap {
      flex: 0 1 160px;
      width: 160px;
      background: #f3f5f7;
      .menu_item {
        height: 108px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        word-break: break-all;
        justify-content: center;
        border-bottom: 1px solid #ddd;
        font-size: 28px;
        &.active {
          background: #fff;
        }
      }
    }

    .food_wrap {
      flex: 1;
      .food_title {
        line-height: 52px;
        height: 52px;
        padding-left: 20px;
        color: #333;
        background: #f3f5f7;
        text-align: left;
        font-size: 28px;
      }
      .food_item {
        display: flex;
        margin: 20px;
        padding-bottom: 20px;
        .img {
          flex: 0 0 100px;
          margin-right: 15px;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .content {
          flex: 1;
          text-align: left;
          font-size: 28px;
          position: relative;
          >div, h2, p {
            margin-bottom: 16px;
          }
          .name {
            font-size: 32px;
            margin-top: 10px;
            color: #333;
          }
          .desc, .extra, .old_price {
            color: #93999f;
          }
          .extra {
            .count {
              margin-right: 20px;
            }
          }
          .new_price {
            color: red;
          }
          
          
        }
      }
    }
  }
</style>
