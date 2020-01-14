<template lang="html">
  <div id="interactive-display-budget">
    <div id="submission-form">
      <h2>Monthly Budget Calculator</h2>
      <form v-on:submit="handleSubmit">
        <label for="balance">Enter a monthly budget amount: £ </label>
        <input type="number" name="balance" step="0.01" min="0" v-model.number="monthlyBudget" required>

        <h4>Enter your monthly spending for each category:</h4>
        <h4>Household bills</h4>
        <p>
          <label for="mortgage-rent">Mortgage/Rent: £ </label>
          <input type="number" name="mortgage-rent" step="0.01" min="0" v-model.number="mortgageRent" required>
        </p>

        <p>
          <label for="council-tax">Council tax: £ </label>
          <input type="number" name="council-tax" step="0.01" min="0" v-model.number="councilTax" required>
        </p>

        <p>
          <label for="utility-bills">Utilities: £ </label>
          <input type="number" name="utility-bills" step="0.01" min="0" v-model.number="utilityBills" required>
        </p>

        <p>
          <label for="insurance">Home insurance: £ </label>
          <input type="number" name="insurance" step="0.01" min="0" v-model.number="homeInsurance" required>
        </p>

        <p>
          <label for="groceries">Groceries: £ </label>
          <input type="number" name="groceries" step="0.01" min="0" v-model.number="groceries" required>
        </p>

        <p>
          <label for="travel-costs">Transport/car costs: £ </label>
          <input type="number" name="travel-costs" step="0.01" min="0" v-model.number="travelCosts" required>
        </p>

        <button type="submit">Submit Info</button>
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
    return {
      monthlyBudget: 0,
      mortgageRent: 0,
      councilTax: 0,
      utilityBills: 0,
      homeInsurance: 0,
      groceries: 0,
      travelCosts: 0,
      householdBillTotal: 0,
      chartData: [
        ['Category', 'Spend'],
        ['Household bills', 0],
        ['Living costs', 0],
        ['Finance & insurance', 0],
        ['Family & friends', 0],
        ['Travel', 0],
        ['Leisure', 0]
      ],
      chartOptions: {
        title: 'Budget Summary',
        is3D: true,
        height: '400'
      }
    }
  },
  methods: {
    handleSubmit: function(event){
      event.preventDefault();
      const newChartData = [['Category', 'Spend']];
      this.householdBillTotal = this.mortgageRent + this.councilTax + this.utilityBills + this.homeInsurance + this.groceries + this.travelCosts;
      newChartData.push(['Household bills', this.householdBillTotal]);
      this.chartData = newChartData;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
