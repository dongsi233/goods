<template>
  <header>
    <div class="bg_img">
      <img :src="imgsrc" alt="">
    </div>
    <div class="header_content">
      <img :src="imgsrc" alt="">
      <div class="header_detail">
        <dl>
          <dt>
            粥品香坊（回龙观）
          </dt>
          <dd>
            蜂鸟专送/38分钟送达
          </dd>
          <dd>在线支付满20减5</dd>
        </dl>
        <span class="num">
          5个>
        </span>
      </div>
    </div>
    <div class="bulletin_wrap">
      <div class="bulletin_title">
        <span>公告</span>
      </div>
      <div class="bulletin_content">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </div>
      <i>></i>
    </div>
  </header>
</template>
<script>
import img from '@/assets/images/seller_avatar_256px.jpg'
export default {
  data () {
    return {
       imgsrc: img,
    }
  }
}
</script>
<style lang="scss" scoped>
  header {
    width: 100vw;
    box-sizing: border-box;
    height: 268px;
    position: relative;
    // background: url('~@/assets/images/seller_avatar_256px.jpg') no-repeat center center;
    color: #fff;
    .bg_img {
      opacity:0.5;
      position:absolute;
      top:0;
      left:0;
      bottom:0;
      right:0;
      margin:auto;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header_content {
      // width: 100%;
      height: 212px;
      padding: 48px 24px 36px 48px;
      display: flex;
      background: rgba($color: #000000, $alpha: .5);
      img {
        flex:0 1 64px;
        height: 128px;
      }
      .header_detail {
        flex: 1;
        text-align: left;
        margin-left:10px;
        
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        dt {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5em;
        }
        dd {
          font-size: 12px;
          line-height: 1.7em;
        }
        .num {
          align-self: flex-end;
          padding:5px 10px;
          border-radius: 5px;
          background:rgba($color: #000000, $alpha: 0.8);
        }
      }
    }
    .bulletin_wrap {
      display: flex;
      padding: 0 48px 0 24px;
      background: rgba($color: #000000, $alpha: 0.7);
      height: 56px;
      line-height: 56px;
      .bulletin_title {
        color:#000;
        padding: 0 10px;
        margin-right:20px;
        span {
          font-size: 12px;
          background:#fff;  
          padding: 5px;
          border-radius: 3px;
        }
      }
      .bulletin_content {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
      }
    }
  }
</style>

