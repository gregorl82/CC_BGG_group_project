<template lang="html">
  <div id="sub-topic">
    <h3>{{subtopic.heading}}</h3>
    <interactive-display v-if="interactive" />
    <p v-else>{{subtopic.text}}</p>
  </div>
</template>

<script>
import InteractiveDisplay from './InteractiveDisplay.vue'

export default {
  name: 'sub-topic',
  props: ['subtopic'],
  components: {
    'interactive-display': InteractiveDisplay
  }
}
</script>

<style lang="css" scoped>
</style>
