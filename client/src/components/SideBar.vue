<template lang="html">
  <div id="topic-list">
    <ul>
      <li v-for="topic in topics" @click="handleSubmit(topic)">{{topic.topicHeading}}</li>
    </ul>
  </div>
</template>

<script>
import eventBus from '@/main.js'

export default {
  name: 'sidebar',
  props: ['topics'],
  methods: {
    handleSubmit(topic) {
      eventBus.$emit('topic-clicked', topic)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
