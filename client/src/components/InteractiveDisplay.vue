<template lang="html">
  <div id="interactive-display">
    <div id="submission-form">
      <form v-on:submit="handleSubmit" method="post">
        <label for="">Enter a savings amount: £ </label>
        <input type="number" step="0.01" placeholder="0.00" v-model.number="amount" required>
        <label for=""> every </label>
        <select v-model="frequencyValue">
          <option v-for="period in this.frequencyArray" :value="period.value">{{period.text}}</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
    <div id="chart">
      <chart
        type="ScatterChart"
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
      frequencyArray: [{text: "day", value: 1}, {text: "week", value: 7}, {text: "month", value: 30}, {text: "year", value: 365}],
      amount: null,
      frequencyValue: "",
      chartData: [],
      chartOptions: {}
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
