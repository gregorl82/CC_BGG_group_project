<template>
  <div id="main">
    <title :topic="topic" />
    <sub-topic />
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import SubTopic from '@/components/SubTopic.vue';

export default {
  name: 'main-content',
  data () {
    return {

    }
  },

  mounted() {

  },

  components: {
    'title': Title,
    'sub-topic': SubTopic
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
