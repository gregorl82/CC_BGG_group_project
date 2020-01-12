<template>
  <div id="app">

  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import MainContent from '@/components/MainContent.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'app',
  data () {
    return {
      topics: []
    }
  }
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
