<template lang="html">
  <div id="fact-box">
    <h3>Did you know?</h3>
    <p v-html="getRandomFact"></p>
  </div>
</template>

<script>
export default {
  name: 'fact-box',
  props: ['factoids'],
  computed: {
    getRandomFact() {
      const length = this.factoids.length
      const index = Math.floor(Math.random() * length)
      return this.factoids[index]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
