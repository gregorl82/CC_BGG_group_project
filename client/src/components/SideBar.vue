<template lang="html">
  <div id="topic-list">
      <img src="logo.png" id="logo">
      <ul v-for="topic in topics" @click="handleSubmit(topic)" id="side-topic">{{ topic.topicHeading }}</ul>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'sidebar',
  props: ['topics'],
  methods: {
    handleSubmit(topic) {
      eventBus.$emit('topic-clicked', topic.topicHeading)
    }
  }
}
</script>

<style lang="css" scoped>
#topic-list {
  height: 100%;
  width: 300px;
  position: fixed;

  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 10px 8px 6px 10px;
  text-decoration: none;
  font-size: 25px;
  color: black;
}

#logo {

}

#side-topic {
  display: flex;
  border: 3px solid slategray;
  background-color: #9EB3C2;
}

#side-topic:hover {
  background: lightslategray;
}

#side-topic:active {
  background: white;
}

</style>
