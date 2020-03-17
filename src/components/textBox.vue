<template>
  <section @click="test">
    <text-box-row></text-box-row>
    <text-box-row></text-box-row>
    <text-box-row></text-box-row>
  </section>
</template>

<script>
import textBoxRow from './textBoxRow.vue'
export default {
  name: 'textBox',
  components: {
    textBoxRow
  },
  methods: {
    test () {
      console.log('tet')
      this.$emit('test', 'test')
    }
  }
}
</script>

<style scoped>

</style>
