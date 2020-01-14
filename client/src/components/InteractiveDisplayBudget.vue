<template lang="html">
  <div id="interactive-display-budget">
    <div id="submission-form">
      <h2>Budget Calculator</h2>
      <form v-on:submit="handleSubmit">
        <label for="balance">Enter a monthly budget: £ </label>
        <input type="number" name="balance" step="0.01" v-model.number="balance" required>

        <button type="submit">Submit</button>
      </form>
    </div>
    <div id="credit-chart">
      <chart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"/>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'interactive-display-budget',
  components: {
    'chart': GChart
  },
  data(){
    return {,
      chartData: [],
      chartOptions: {}
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
