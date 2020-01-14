<template lang="html">
  <div id="sub-topic">
    <h3 id="subtopic-heading">{{subtopic.heading}}</h3>
    <interactive-display id="int-display" />
    <p v-html="subtopic.text" id="subtopic-text"></p>
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
  #sub-topic {
    margin: 0px 20px 0px 20px;
    background-color: white;
  }

  #subtopic-heading {
    color: white;
    background-color: #1A2F4C;
    padding: 5px;
  }

  #int-display {
    
  }

  #subtopic-text {

  }
</style>
