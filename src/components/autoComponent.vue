<template>
  <component :is="component" @test="test" :data="data" v-if="component" v-drag><slot></slot></component>
</template>

<script>
export default {
  name: 'auto-component',
  props: ['data', 'type'],
  data () {
    return {
      component: null
    }
  },
  computed: {
    loader () {
      if (!this.type) {
        return null
      } else {
        return () => import(`@/components/${this.type}`)
      }
    }
  },
  mounted () {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import('@/components/default')
      })
  },
  methods: {
    test (tt) {
      console.log('auto', tt)
      this.$emit('test', tt)
    }
  }
}
</script>

<style scoped>

</style>
