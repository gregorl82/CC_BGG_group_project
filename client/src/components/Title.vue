<template>
  <div id="title">
    <h1>{{ this.topic }}</h1>
  </div>
</template>

<script>
import SubTopic from '@/components/SubTopic';

export default {
  name: 'title',
  data () {
    return {
      topic: ''
    }
  },

  mounted() {

  },

  components: {

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
