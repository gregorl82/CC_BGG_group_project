<template lang="html">
  <div id="topic-list">
      <img src="bbc_logo.svg" width="200" id="logo">
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
  width: 220px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #067EB2;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 10px 8px 6px 0px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 25px;
  color: white;
}

#logo {
  padding: 10px 0px 50px 3px;

}

#side-topic {
  display: flex;
  width: 100%;
  padding: 0px 3px 0px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: ;
}

#side-topic:hover {
  background: #4290C9;
}

#side-topic:active {
  background: #4570AA;
}

</style>
