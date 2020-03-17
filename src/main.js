// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ECharts from 'vue-echarts'
import chinaMap from '@/assets/china.json'

ECharts.registerMap('china', chinaMap)
Vue.component('chart', ECharts)
Vue.config.productionTip = false

Vue.directive('drag', {
  // 指令的定义
  bind: (el) => {
    // 获取当前元素
    let odiv = el
    odiv.onmousedown = (e) => {
      console.log('parentNode', odiv.parentNode.parentNode)
      // 算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft
      let disY = e.clientY - odiv.offsetTop

      document.onmousemove = (e) => {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let top = e.clientY - disY
        // 移动当前元素
        odiv.style.left = (left < 0 ? 0 : left) + 'px'
        odiv.style.top = (top < 0 ? 0 : top) + 'px'
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
