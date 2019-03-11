import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectFoodList: []
  },
  mutations: {
    modifyFoodList (state, foodObj) {
      let flag = true;
      console.log(state);
      console.log(foodObj);
      if (state.selectFoodList.length == 0) {
        state.selectFoodList.push(foodObj);
        return;
      }
      state.selectFoodList.forEach((item) => {
        if (item.name == foodObj.name) {
          item.count = foodObj.count;
          flag = false;
          return;
        }
      })
      if (flag) {
          state.selectFoodList.push(foodObj);
      }
    }
  },
  actions: {

  }
})
