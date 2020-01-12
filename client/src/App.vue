<template>
  <div id="app">
    <title :topic="topic"/>
    <main-content />
    <side-bar :topics="topics"/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import MainContent from '@/components/MainContent.vue';
import SideBar from '@/components/SideBar.vue';
import { eventBus } from './main.js';

export default {
  name: 'app',
  data () {
    return {
      topics: []
    }
  },

  mounted() {

  },

  components: {
    'title': Title,
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
