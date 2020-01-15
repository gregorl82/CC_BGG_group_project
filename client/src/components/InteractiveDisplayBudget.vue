<template lang="html">
  <div id="interactive-display-budget">
    <div id="submission-form">
      <h2>Monthly Budget Calculator</h2>
      <p>Use this handy calculator to work out how much money you have left after each month.</p>
      <form v-on:submit="handleSubmit">
        <h2>Income</h2>
        <h3>
          <label for="balance">Monthly income: £ </label>
          <input type="number" name="balance" step="0.01" min="0" v-model.number="monthlyBudget" required>
        </h3>

        <h2>Expenses</h2>
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

        <h4>Living costs</h4>
        <p>
          <label for="groceries">Groceries: £ </label>
          <input type="number" name="groceries" step="0.01" min="0" v-model.number="groceries" required>
        </p>

        <p>
          <label for="takeaways">Takeaways: £ </label>
          <input type="number" name="takeaways" step="0.01" min="0" v-model.number="takeaways" required>
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

        <h4>Travel</h4>
        <p>
          <label for="car-costs">Car costs: £ </label>
          <input type="number" name="car-costs" step="0.01" min="0" v-model.number="carCosts" required>
        </p>

        <p>
          <label for="public-transport">Public transport: £ </label>
          <input type="number" name="public-transport" step="0.01" min="0" v-model.number="publicTransport" required>
        </p>

        <h4>Leisure</h4>
        <p>
          <label for="cinema-trips">Cinema trips: £ </label>
          <input type="number" name="cinema-trips" step="0.01" min="0" v-model.number="cinemaTrips" required>
        </p>

        <p>
          <label for="books-music-games">Books, music and games: £ </label>
          <input type="number" name="books-music-games" step="0.01" min="0" v-model.number="booksMusicGames" required>
        </p>

        <p>
          <label for="eating-out">Eating out: £ </label>
          <input type="number" name="eating-out" step="0.01" min="0" v-model.number="eatingOut" required>
        </p>

        <p>
          <label for="pub-social">Pub/socialising: £ </label>
          <input type="number" name="pub-social" step="0.01" min="0" v-model.number="pub" required>
        </p>

        <p>
          <label for="magazines">Newspapers/magazines: £ </label>
          <input type="number" name="magazines" step="0.01" min="0" v-model.number="magazines" required>
        </p>

        <p>
          <label for="holidays">Holidays: £ </label>
          <input type="number" name="holidays" step="0.01" min="0" v-model.number="holidays" required>
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
    <div id="budget-advice" v-if="adviceText">
      <h3 v-html="adviceText"></h3>
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
      takeaways: 0,
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
      carCosts: 0,
      publicTransport: 0,
      cinemaTrips: 0,
      booksMusicGames: 0,
      eatingOut: 0,
      pub: 0,
      magazines: 0,
      holidays: 0,
      adviceText: "",
      chartData: [
        ['Category', 'Spend'],
        ['Category', 1]
      ],
      props: ['subtopic'],
      chartOptions: {
        title: 'Budget Summary',
        is3D: true,
        height: '400',
        legend: 'none'
      }
    }
  },
  methods: {
    handleSubmit: function(event){
      event.preventDefault();
      const newChartData = [['Category', 'Spending', {role: 'tooltip'}]];

      let householdBillTotal = this.mortgageRent + this.councilTax + this.utilityBills + this.homeInsurance;
      let tooltip = `Category: Household bills, Total spending: £${householdBillTotal.toFixed(2)}`
      newChartData.push(['Household bills', householdBillTotal, tooltip]);

      let livingCostTotal = this.groceries + this.takeaways + this.clothing + this.dental + this.hairdressing;
      tooltip = `Category: Living costs, Total spending: £${livingCostTotal.toFixed(2)}`
      newChartData.push(['Living costs', livingCostTotal, tooltip]);

      let financeInsuranceTotal = this.lifeInsurance + this.creditCard + this.studentLoan + this.regularSavings;
      tooltip = `Category: Finance & insurance, Total spending: £${financeInsuranceTotal.toFixed(2)}`
      newChartData.push(['Finance & insurance', financeInsuranceTotal, tooltip]);

      let familyTotal = this.childcare + this.schoolCosts + this.pets;
      tooltip = `Category: Family & friends, Total spending: £${familyTotal.toFixed(2)}`
      newChartData.push(['Family & friends', familyTotal, tooltip]);

      let travelCostTotal = this.carCosts + this.publicTransport;
      tooltip = `Category: Travel, Total spending: £${travelCostTotal.toFixed(2)}`
      newChartData.push(['Travel', travelCostTotal, tooltip]);

      let leisureCostTotal = this.cinemaTrips + this.booksMusicGames + this.eatingOut + this.pub + this.magazines + this.holidays;
      tooltip = `Category: Leisure, Total spending: £${leisureCostTotal.toFixed(2)}`
      newChartData.push(['Leisure', leisureCostTotal, tooltip]);

      this.chartData = newChartData;
      this.chartOptions.legend = 'right';

      const totalSpending = householdBillTotal + livingCostTotal + financeInsuranceTotal + familyTotal + travelCostTotal + leisureCostTotal;
      const upperLimit = 0.05 * this.monthlyBudget;
      const lowerLimit = -1 * upperLimit
      const budgetDifference = this.monthlyBudget - totalSpending;

      if (budgetDifference < lowerLimit) {
        this.adviceText = "You are currently spending more than you earn. Take a closer look through your spending for areas where you can cut back."
      } else if (budgetDifference > upperLimit) {
        this.adviceText = "You have a good chunk of money left over at the end of each month; think about putting this money into a savings account if you are not already doing so."
      } else {
        this.adviceText = "You are living within your means, but even small cutbacks in your spending will help you with unexpected costs."
      }


    }
  }
}
</script>

<style lang="css" scoped>

</style>
