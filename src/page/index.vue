<template>
  <section class="body">
    <section class="bg">
      <section @click="ttt">
        <chart class="box1" :style="{width: getWidthPercent(21),height: getHeightPercent(26)}" :autoresize="true" :options="options1"></chart>
        <chart class="box2" :style="{width: getWidthPercent(21),height: getHeightPercent(26)}" :autoresize="true" :options="options1"></chart>
        <chart class="box3" :style="{width: getWidthPercent(21),height: getHeightPercent(26)}" :autoresize="true" :options="options1"></chart>
        <chart class="box4" :style="{width: getWidthPercent2(47),height: getHeightPercent2(85)}" :autoresize="true" :options="options1"></chart>
        <chart class="box5" :style="{width: getWidthPercent(21),height: getHeightPercent(26)}" :autoresize="true" :options="options1"></chart>
        <chart class="box6" :style="{width: getWidthPercent(21),height: getHeightPercent(26)}" :autoresize="true" :options="options1"></chart>
        <chart class="box7" :style="{width: getWidthPercent(21),height: getHeightPercent(26)}" :autoresize="true" :options="options1"></chart>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      w1: 16,
      w2: 32,
      h1: 9,
      h2: 9,
      options1: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        // legend: {
        //   data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        // },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      test: '.body {background: red;width:100vw;height:100vh;}'
    }
  },
  computed: {
    // rt2 () {
    //   return document.documentElement.clientWidth / document.documentElement.clientHeight
    // }
  },
  methods: {
    getWidthPercent (value) {
      return value * this.w1 / this.w2 + '%'
    },
    getWidthPercent2 (value) {
      return (value * this.w1 / this.w2) + '%'
    },
    getHeightPercent (value) {
      return value * this.h1 / this.h2 + '%'
    },
    getHeightPercent2 (value) {
      return (value * this.h1 / this.h2) + '%'
    },
    ttt () {
      console.log('w2', this.w2)
      if (this.w2 === 16) {
        this.w2 = 32
      } else {
        this.w2 = 16
      }
    }
  }
}
</script>

<style scoped>
.body {
  width: 100vw;
  height: 100vh;
  background: #002f4a;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  background: transparent;
  width: 3840px;
  height: 1080px;
  /*margin: 0 auto;*/
  position: relative;
}
.box1 {
  width: 400px;
  height: 280px;
  border: 1px solid #00858d;
  position: absolute;
  left: 50px;
  top: 100px;
}
.box2 {
  width: 400px;
  height: 280px;
  border: 1px solid #00858d;
  position: absolute;
  left: 50px;
  top: 420px;
}
.box3 {
  width: 400px;
  height: 280px;
  border: 1px solid #00858d;
  position: absolute;
  left: 50px;
  top: 740px;
}
.box4 {
  width: 900px;
  height: 920px;
  border: 1px solid #00858d;
  position: absolute;
  left: 500px;
  top: 100px;
}
.box5 {
  width: 400px;
  height: 280px;
  border: 1px solid #00858d;
  position: absolute;
  right: 50px;
  top: 100px;
}
.box6 {
  width: 400px;
  height: 280px;
  border: 1px solid #00858d;
  position: absolute;
  right: 50px;
  top: 420px;
}
.box7 {
  width: 400px;
  height: 280px;
  border: 1px solid #00858d;
  position: absolute;
  right: 50px;
  top: 740px;
}
</style>
