<template lang="html">
  <div id="fact-box">
    <h3 id="fact-heading">Did you know?</h3>
    <p v-html="getRandomFact" id="fact-text"></p>
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

#fact-box {
  width: 300px;
  color: white;
  background-color: #4570AA;
  margin: auto;
}

#fact-heading {
  z-index: 1;
  top: 0;
  padding-left: 10px;
  font-size: 25px;
  background-color: #1A2F4C;
}

#fact-text {
  font-size: 20px;
  padding-bottom: 25px;
  margin: auto;
  width: 75%;
}

</style>
