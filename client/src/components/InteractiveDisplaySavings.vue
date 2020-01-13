<template lang="html">
  <div id="interactive-display">
    <div id="submission-form">
      <form v-on:submit="handleSubmit" method="post">
        <label for="">£ </label>
        <input type="number" step="0.01" placeholder="0.00" v-model.number="amount" required>
        <label for=""> every </label>
        <select v-model="frequencyValue">
          <option v-for="period in this.frequencyArray" :value="period.value">{{period.text}}</option>
        </select>
        <label for=""> for </label>
        <input type="number" placeholder="1" required>
        <label> year(s) </label>
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
  // props: ['comparitives'],
  components: {
    'chart': GChart
  },
  data(){
    return {
      frequencyArray: [{text: "day", value: 1}, {text: "week", value: 7}, {text: "month", value: 30}],
      amount: null,
      frequencyValue: "",
      chartData: [
        ['Time (months)', 'Amount'],
        [0 , 0],
        [1 , 25],
        [2 , 50],
        [3 , 75],
        [4 , 100],
        [5 , 125],
        [6 , 150]
      ],
      chartOptions: {
        title: 'Savings projection',
        legend: 'none',
        hAxis: {title: 'Time(months)', minValue: 0, maxValue: 6},
        vAxis: {title: 'Amount (£)', minValue: 0, maxValue: 100, format: '£#.##'}
      }
    }
  },
  methods: {
    handleSubmit: function(event){
      event.preventDefault();
      return null
    }
  },
  computed: {
    calculatedSavings() {
      let savings = this.amount * this.frequencyValue
      return savings;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
