<template>
  <div id="main">
    <title :endpoint="endpoint" />
    <sub-topic v-for="(subtopic, index) in subTopics" :key="index" :subtopic="sub-topic" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import TopicTitle from '@/components/TopicTitle.vue';
import SubTopic from '@/components/SubTopic.vue';

export default {
  name: 'main-content',
  data () {
    return {
      topic: '',
      subTopics: []
    };
  },
  props: ["endpoint"],

  mounted() {
    eventBus.$on('topic-clicked', (topic) => {
      const topicLowerCase = topic.toLowerCase()
      fetch(`http://localhost:3000/api/${topicLowerCase}/`)
      .then(response => response.json())
      .then(data => console.log(data))
    })
  },

  components: {
    'topic-title': TopicTitle,
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
