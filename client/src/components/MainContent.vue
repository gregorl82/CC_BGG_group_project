<template>
  <div id="main">
    <topic-title :endpoint="endpoint" />
    <sub-topic v-for="(subtopic, index) in subtopics" :key="index" :subtopic="subtopic" />
    <fact-box :factoids="factoids"/>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import TopicTitle from '@/components/TopicTitle.vue';
import SubTopic from '@/components/SubTopic.vue';
import FactBox from '@/components/FactBox.vue';

export default {
  name: 'main-content',
  data () {
    return {
      topic: '',
      subtopics: [],
      factoids: []
    };
  },
  props: ["endpoint"],

  mounted() {
    eventBus.$on('topic-clicked', (topic) => {
      this.topic = topic
      const topicLowerCase = topic.toLowerCase()
      fetch(`http://localhost:3000/api/${topicLowerCase}/`)
      .then(response => response.json())
      .then((data) => {
        this.topic = data[0].topic
        this.subtopics = data[0].subtopics
        this.factoids = data[0].factoids
      })
    });
  },

  components: {
    'topic-title': TopicTitle,
    'sub-topic': SubTopic,
    'fact-box': FactBox
  }
}
</script>

<style>
#main {
  margin-left: 200px;
  padding: 0px 0px 0px 0px;
}

</style>
