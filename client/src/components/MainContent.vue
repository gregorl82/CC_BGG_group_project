<template>
  <div id="main">
    <title :endpoint="endpoint" />
    <sub-topic v-for="(subtopic, index) in subTopics" :key="index" :subtopic="sub-topic" />
  </div>
</template>

<script>
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
