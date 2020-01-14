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
          <label for="travel-costs">Transport/car costs: £ </label>
          <input type="number" name="travel-costs" step="0.01" min="0" v-model.number="travelCosts" required>
        </p>

        <h4>Living costs</h4>
        <p>
          <label for="groceries">Groceries: £ </label>
          <input type="number" name="groceries" step="0.01" min="0" v-model.number="groceries" required>
        </p>

        <p>
          <label for="eating-out">Takeaways/eating out: £ </label>
          <input type="number" name="eating-out" step="0.01" min="0" v-model.number="eatingOut" required>
        </p>

        <p>
          <label for="clothing">Clothes and shoes: £ </label>
          <input type="number" name="clothing" step="0.01" min="0" v-model.number="clothing" required>
        </p>

        <p>
          <label for="dental">Dental costs: £ </label>
          <input type="number" name="dental" step="0.01" min="0" v-model.number="dental" required>
        </p>

        <p>
          <label for="hairdressing">Hairdressing: £ </label>
          <input type="number" name="hairdressing" step="0.01" min="0" v-model.number="hairdressing" required>
        </p>

        <h4>Finance and insurance</h4>
        <p>
          <label for="life-insurance">Life insurance: £ </label>
          <input type="number" name="life-insurance" step="0.01" min="0" v-model.number="lifeInsurance" required>
        </p>

        <p>
          <label for="credit-card">Credit card repayments: £ </label>
          <input type="number" name="credit-card" step="0.01" min="0" v-model.number="creditCard" required>
        </p>

        <p>
          <label for="student-loan">Student loan repayments: £ </label>
          <input type="number" name="student-loan" step="0.01" min="0" v-model.number="studentLoan" required>
        </p>

        <p>
          <label for="regular-savings">Regular savings: £ </label>
          <input type="number" name="regular-savings" step="0.01" min="0" v-model.number="regularSavings" required>
        </p>

        <h4>Family and friends</h4>
        <p>
          <label for="childcare">Childcare: £ </label>
          <input type="number" name="childcare" step="0.01" min="0" v-model.number="childcare" required>
        </p>

        <p>
          <label for="school-costs">School costs: £ </label>
          <input type="number" name="school-costs" step="0.01" min="0" v-model.number="schoolCosts" required>
        </p>

        <p>
          <label for="pets">Pets: £ </label>
          <input type="number" name="pets" step="0.01" min="0" v-model.number="pets" required>
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
      travelCosts: 0,
      groceries: 0,
      eatingOut: 0,
      clothing: 0,
      dental: 0,
      hairdressing: 0,
      lifeInsurance: 0,
      creditCard: 0,
      studentLoan: 0,
      regularSavings: 0,
      childcare: 0,
      schoolCosts: 0,
      pets: 0,
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
      const newChartData = [['Category', 'Spending']];

      let householdBillTotal = this.mortgageRent + this.councilTax + this.utilityBills + this.homeInsurance + this.travelCosts;
      newChartData.push(['Household bills', householdBillTotal]);

      let livingCostTotal = this.groceries + this.eatingOut + this.clothing + this.dental + this.hairdressing;
      newChartData.push(['Living costs', livingCostTotal]);

      let financeInsuranceTotal = this.lifeInsurance + this.creditCard + this.studentLoan + this.regularSavings;
      newChartData.push(['Finance & insurance', financeInsuranceTotal]);

      let familyTotal = this.childcare + this.schoolCosts + this.pets;
      newChartData.push(['Family & friends', familyTotal]);

      this.chartData = newChartData;

    }
  }
}
</script>

<style lang="css" scoped>
</style>
