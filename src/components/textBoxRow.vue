<template>
  <section class="contanier">
    <section class="small-class" @click="test">车辆</section>
    <section style="display: flex;">
      <section style="width: 33.33%;text-align: left;">
        <section class="small-class-label">单元网格(个)</section>
        <section class="f26">9393</section>
      </section>
      <section style="width: 33.33%;text-align: left;">
        <section class="small-class-label">单元网格(个)</section>
        <section class="f26">9393</section>
      </section>
      <section style="width: 33.33%;text-align: left;">
        <section class="small-class-label">单元网格(个)</section>
        <section class="f26">9393</section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'textBoxRow',
  methods: {
    test () {
      console.log('attr', this.$attrs)
      this.$root.eventHub.$emit('ttt', 'AMD YES!')
    }
  }
}
</script>

<style scoped>
  .contanier {
    background: #393739;
    font-size: 21px;
    color: #FFFFFF;
  }
  .small-class {
    font-family: MicrosoftYaHeiSemibold;
    font-size: 21px;
    letter-spacing: 0;
    text-align: left;
    height: 34px;
    display: flex;
    align-items: center;
  }
  .small-class-label {
    opacity: 0.7;
    font-family: MicrosoftYaHei;
    font-size: 21px;
    letter-spacing: 0;
    text-shadow: 0 1px 1px rgba(0,0,0,0.50);
  }
  .f26 {
    font-size: 26px;
  }
</style>
