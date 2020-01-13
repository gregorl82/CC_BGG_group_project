<template lang="html">
  <div id="interactive-display-credit">
    <div id="submission-form">
      <form v-on:submit="handleSubmit" method="post">
        <label for="balance">Enter credit card balance: £ </label>
        <input type="number" name="balance" step="0.01" required>

        <label for="apr">Enter the card APR: </label>
        <input type="number" name="apr" step="0.1" required>

        <label for="repayment">Enter the monthly repayment amount: £ </label>
        <input type="number" name="repayment" step="0.01" required>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'interactive-display-credit',
  components: {
    'chart': GChart
  },
  data(){
    return {
      amount: null,
      frequencyValue: ""
    }
  },
  methods: {
    handleSubmit: function(event){
      event.preventDefault();
      return null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
