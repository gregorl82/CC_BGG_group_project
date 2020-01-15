<template>
  <div id="app">
    <main-content :endpoint="endpoint"/>
    <side-bar :topics="topics"/>
    <div id="welcome-container" v-if="endpoint === 'Welcome'">
      <ul id="welcome-text">
        <p>Concerns and worries about personal finances are one of the few things that every one of us have in common. According to research done by the Money & Pensions Service, over 20 million of us in the UK can't effectively manage our money, 11.5 million have less than £100 in savings and 9 million are in debt.</p><br />
        <p>Globally, the UK is ranking below the OECD average for financial literacy and competency as the complexities of financial systems, coupled with a retail and consumer-driven culture, have all outpaced the ability of those consumers to develop their money management skills. </p><br />
        <p>We’ve developed this app in an attempt to help improve everyone’s overall financial literacy and competency; to equip them with the skills and resources to help them whatever their current financial situation. Whether you’ve received an unexpected lump sum, or are struggling to pay the bills month-to-month, you’ll find something to make managing your circumstances easier. </p><br />
        <p>While we have taken every precaution to ensure the information contained within this app is up to date and correct, this app is not intended to substitute professional financial advice. To find local expert guidance, please visit <a href="https://www.unbiased.co.uk/">Unbiased</a>, or for general advice you should consult <a href="https://www.citizensadvice.org.uk/">Citizens Advice</a>.</p>
      </ul>
    </div>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue';
import SideBar from '@/components/SideBar.vue';
import { eventBus } from '@/main.js';
export default {
  name: 'app',
  data () {
    return {
      topics: [],
      endpoint: 'Welcome'
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/topics')
    .then(response => response.json())
    .then(topics => this.topics = topics)

    eventBus.$on('topic-clicked', (topic) => {
      this.endpoint = topic;
    })
  },
  components: {
    'main-content': MainContent,
    'side-bar': SideBar
  }
}
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: ;
}

#welcome-container {
  max-width: 800px;
  height: auto;
  margin-top: 20px;
  margin-left: 400px;
  border: 1px solid black;
}

#welcome-text {
  padding-right: 25px;
}

p {
  font-size: 18px;
}
</style>
