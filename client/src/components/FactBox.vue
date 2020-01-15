<template lang="html">
  <div v-if="getRandomFact !== undefined" id="fact-box">
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
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  color: white;
  background-color: #4570AA;
}

#fact-heading {
  z-index: 1;
  top: 0;
  height: 40px;
  padding-left: 10px;
  font-size: 25px;
  background-color: #1A2F4C;
}

#fact-text {
  font-size: 18px;
  padding-bottom: 25px;
  margin: auto;
  width: 75%;
}

</style>
