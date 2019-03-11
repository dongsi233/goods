<template>
  <div class="cartcontrol-wrapper">
    <div class="cartcontrol">
      <div class="decrease">
        <span class="icon-shopping_cart" @click="decrease"></span>
      </div>
      <div class="count">{{count}}</div>
      <div class="add icon-thumb_down" @click="add"></div>
    </div>
  </div>   
</template>
<script>

export default {
  name: 'cartControl',
  data () {
    return {
      count: 0
    }
  },
  props: {
    food: {
      type: Object,
    }
  },
  computed: {
   
  },
  methods: {
    add () {
      this.count++;
      this.modifyFoodList();
    },
    decrease () {
      this.count > 0 && this.count--;
      this.modifyFoodList();
    },
    modifyFoodList () {
      this.$store.commit('modifyFoodList', {name: this.food.name, value: this.food.price, count:this.count});
    }
  },
  mounted () {
    if (this.food.count) {
      this.count = this.food.count;
    }
  }
}
</script>
<style lang="scss" scoped>
.cartcontrol-wrapper {
  margin-bottom: 0;
  position: absolute;
  display: flex;
  align-self: center;
  right: 10px;
  bottom: 0;
  font-size: 48px;
  .cartcontrol {
    display: flex;
    align-items: center;
    color: #00a0dc;
    .count {
      font-size: 36px;
      margin: 0 8px;
      color: #333;
    }
  }
  
}
</style>
