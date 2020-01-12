<template>
  <div id="app">
    <main-content :endpoint="endpoint"/>
    <side-bar :topics="topics"/>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
