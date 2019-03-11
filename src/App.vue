<template>
  <div id="app">
    <v-head></v-head>
    <ul class="nav">
      <!-- <li v-for="item in routes" :key="item.path">
        <router-link :to="item.path">{{ item.cnName }}</router-link>
      </li> -->
      <router-link tag="li" :to="item.path" exact v-for="item in routes" :key="item.path">{{ item.cnName }}</router-link>
    </ul>
    <transition name="myTransitoin" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import header from './components/header/header.vue'

export default {
  data () {
    return {
     
      routes: []
    }
  },
  components: {
    'v-head': header
  },
  created () {
    console.log(this.$route);
    console.log(this.$router);
    this.routes = this.$router.options.routes;
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

.nav {
  display: flex;
  border-bottom: 1px solid #ddd;
  li {
    flex: 1;
    height: 80px;
    line-height: 80px;
    &:not(:last-child) {
      border-right: 1px solid #ddd;
    }
    &.routeActive {
      color: #f00;
    }
  }
}
.myTransitoin-enter-active, .myTransitoin-leave-active {
  transition: all .3s;
}
.myTransitoin-enter, .myTransitoin-leave-to
/* .myTransitoin-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translate(100vw);
}
</style>
