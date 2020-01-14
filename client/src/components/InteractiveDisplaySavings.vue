<template lang="html">
  <div id="interactive-display">
    <div id="submission-form">
      <form v-on:submit="handleSubmit">
        <p>Enter an amount to save regularly and see how much your money can grow!</p>
        <label for="amount">£ </label>
        <input type="number" name="amount" step="0.01" min="0" placeholder="0.00" v-model.number="amount" required>
        <label for="period"> every month for </label>
        <input type="number" name="period" placeholder="1" min="1" v-model.number="numberOfMonths" required>
        <label> month(s) </label>
        <label for="interest-rate"> Annual interest rate: </label>
        <input type="number" name="interest-rate" placeholder="0.9" step="0.1" min="0" v-model.number="interestRate" required>
        <label>% </label>
        <button type="submit">Enter</button>
      </form>
    </div>
    <div id="chart">
      <chart
        type="AreaChart"
        :data="chartData"
        :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'interactive-display',
  components: {
    'chart': GChart
  },
  data(){
    return {
      amount: 0,
      numberOfMonths: 0,
      interestRate: 0,
      chartData: [
        ['Month', 'Amount'],
        [6 , 0]
      ],
      chartOptions: {
        title: 'Savings projection',
        legend: 'none',
        hAxis: {title: 'Month', minValue: 0, ticks: [0, 1, 2, 3, 4, 5, 6]},
        vAxis: {title: 'Amount saved', minValue: 0, maxValue: 100, format: '£#.##'},
        height: '400'
      }
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
