import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    // ssr
    async nuxtServerInit({
      commit
    }, {
      req,
      app
    }) {
      // 定位
      const {
        status,
        data: {
          province,
          city
        }
      } = await app.$axios.get('/geo/getPosition')
      commit(
        'geo/setPosition',
        status === 200 ? {
          city,
          province
        } : {
          city: '',
          province: ''
        }
      )
      // 左侧菜单栏
      const {
        status: status2,
        data: {
          menu
        }
      } = await app.$axios.get('geo/menu')
      commit('home/setMenu', status2 === 200 ? menu : [])
      //
    }
  }
})

export default store
