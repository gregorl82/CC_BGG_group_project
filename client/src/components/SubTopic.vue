<template lang="html">
  <div id="sub-topic">
    <h3>{{subtopic.heading}}</h3>
    <interactive-display />
    <p v-html="subtopic.text"></p>
  </div>
</template>

<script>
import InteractiveDisplay from './InteractiveDisplaySavings.vue'

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
