<template lang="html">
  <div id="interactive-display-credit">
    <div id="submission-form">
      <h2>Credit Card Repayment Calculator</h2>
      <form v-on:submit="handleSubmit">
        <label for="balance">Enter credit card balance: £ </label>
        <input type="number" name="balance" step="0.01" v-model.number="balance" required>

        <label for="apr">Enter the card APR: </label>
        <input type="number" name="apr" step="0.1" v-model.number="apr" required>

        <label for="repayment">Enter the monthly repayment amount: £ </label>
        <input type="number" name="repayment" step="0.01" v-model.number="repayment" required>

        <button type="submit">Submit</button>
      </form>
    </div>
    <div id="credit-chart">
      <chart
      type="AreaChart"
      :data="chartData"
      :options="chartOptions"/>
    </div>
    <h2 v-if="resultMessage" v-html="resultMessage"></h2>
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
    condition: false
    return {
      balance: 0,
      apr: 0,
      repayment: 0,
      resultMessage: "",
      chartData: [
        ['Month', 'Balance'],
        [0,     0],
        [12,    0]
      ],
      chartOptions: {
        title: 'Credit Card repayments',
        hAxis: {title: 'Month', minValue: 0, maxValue: 12},
        vAxis: {title: 'Balance', minValue: 0, maxValue: 1000, format: '£#.##'},
        legend: 'none',
        height: '600'
      }
    }
  },
  methods: {
    handleSubmit: function(event){
      event.preventDefault();

      const newChartData = [['Month','Balance', {role: 'tooltip'}]]
      const newTicks = []
      const monthlyInterest = this.apr/12;

      let month = 0;
      let remainingBalance = this.balance;
      while (remainingBalance > 0) {
        const tooltip = `Month: ${month} Remaining balance: £${remainingBalance.toFixed(2)}`
        newChartData.push([month, remainingBalance, tooltip]);
        newTicks.push(month)
        month++;
        remainingBalance = (remainingBalance * ((monthlyInterest/100) + 1)) - this.repayment
      }
      newChartData.push([month, 0, `Month: ${month} Remaining balance: £0.00`]);
      newTicks.push(month);

      this.chartData = newChartData;
      this.chartOptions.hAxis.ticks = newTicks;

      const years = Math.floor(month / 12);
      const months = (month - (years * 12)) % 12;
      const message = `It will take ${years} year(s) and ${months} month(s) to pay off your balance`;
      this.resultMessage = message;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
