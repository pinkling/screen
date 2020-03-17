<template>
  <div class="hello" style="width:100vw;height:100vh;background: #020915D8;">
    <div id="te" ref="te"></div>
    <div style="background-color: #FFF;">{{options}}</div>
    <div id="drag" style="width: 100%;height: 600px;">
      <dynamic-component :options="options"></dynamic-component>
    </div>
  </div>
</template>

<script>
import textBox from './textBox.vue'
import autoCompontent from './autoComponent'
import dynamicComponent from './dynamicComponent'
// import Vue from 'vue'

// var MyComponent = Vue.extend({
//   props: ['msg'],
//   data () {
//     return {
//       aa: ''
//     }
//   },
//   created () {
//   },
//   methods: {
//     setData (target, data) {
//       this[target] = data
//     },
//     test () {
//       console.log('parent', this.$root)
//       console.log('div click')
//       this.aa = 'qqa'
//       this.$root.eventHub.$emit('ttt', 'AMD YES!')
//     }
//   },
//   template: '<div style="height: 20px;background: #FFF;" @click="test" v-if="msg">{{msg}}{{aa}}</div>'
// })
export default {
  name: 'HelloWorld',
  components: {
    textBox,
    autoCompontent,
    dynamicComponent
    // MyComponent
  },
  // watch: {
  //   'this.com.aa' () {
  //     console.log('??', this.com.aa)
  //   }
  // },
  created () {
    this.$nextTick(() => {
      // this.com = new MyComponent({propsData: {msg: this.msg}}).$mount('#te')
      // this.com.setData('aa', '1234')
      // this.com.test()
      // console.log('parent', this.$root)
      this.$root.eventHub.$on('ttt', (data) => {
        console.log('触发了')
      })
    })
  },
  // mounted () {
  //   // new MyComponent({propsData: {msg: this.msg}}).$mount('#te')
  //   this.com = new MyComponent({propsData: {msg: this.msg}}).$mount('#te')
  //   // document.getElementById('app').appendChild(tmp.$el)
  //   this.com.setData('aa', '1234')
  //   this.com.test()
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      com: null,
      options: [
        {
          type: 'smallTitle',
          data: {
            a: 1,
            b: 2
          },
          children: []
        },
        {
          type: 'textBox',
          data: {
            text: 'text-box'
          },
          children: []
        },
        {
          type: 'textBoxRow',
          data: {
            text: 'text-box-row'
          },
          children: []
        },
        {
          type: 'dragBox',
          data: {},
          children: []
        }
      ]
    }
  },
  methods: {
    okk (data) {
      console.log('okk', data)
    }
  },
  directives: {
    drag: {
      // 指令的定义
      bind: function (el) {
        // 获取当前元素
        let odiv = el
        odiv.onmousedown = (e) => {
          // 算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft
          let disY = e.clientY - odiv.offsetTop

          document.onmousemove = (e) => {
            // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX
            let top = e.clientY - disY

            // 绑定元素位置到positionX和positionY上面
            this.positionX = top
            this.positionY = left

            // 移动当前元素
            odiv.style.left = left + 'px'
            odiv.style.top = top + 'px'
          }
          document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
