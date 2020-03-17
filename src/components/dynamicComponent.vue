<template>
  <section v-if="options.length > 0">
    <section v-for="(item, index) in options" :key="index">
      <auto-compontent @test="test" :type="item.type" :data="item.data">
        <template v-if="item.children.length > 0">
          <dynamic-component v-for="(item2, index2) in item.children" :key="index2" :options="item.children"></dynamic-component>
        </template>
      </auto-compontent>
    </section>
  </section>
</template>

<script>
import autoCompontent from './autoComponent'

export default {
  name: 'dynamicComponent',
  components: {
    autoCompontent
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    test (data) {
      console.log('test', data)
    }
  }
}
</script>

<style scoped>

</style>
