<template>
  <div id="main">
    <title :topic="topic" />
    <SubTopic :subTopic="sub-topic" />
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
    'topic': Topic,
    'sub-topic': subTopic
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
