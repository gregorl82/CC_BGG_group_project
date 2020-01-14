<template lang="html">
  <div id="sub-topic">
    <article class="accordion" :class="accordionClasses">
      <div class="accordion-header" @click="toggleAccordion">
        {{subtopic.heading}}
      </div>
      <div class="accordion-body">
        <div class="body-content">
          <interactive-display />
          <p v-html="subtopic.text">{{subtopic.text}}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import InteractiveDisplay from './InteractiveDisplaySavings.vue'
import {eventBus} from '../main.js'

export default {
  name: 'sub-topic',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen
    //   if (this.isOpen) {
    //     this.isOpen = true
    //   } else {
    //     this.isOpen = false
    //   }
    // }
    }
  },
  computed: {
    accordionClasses() {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen
      }
    }
  },
  props: ['subtopic'],
  components: {
    'interactive-display': InteractiveDisplay
  }
}
</script>

<style lang="css" scoped>
.accordion {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.accordion-header {
    cursor: pointer;
}

.accordion-body   {
    padding: 0;
    max-height: 200em;
    overflow: hidden;
    transition: 0.3s ease all;
}

.is-closed .accordion-body {
    max-height: 0;
}

.body-content {
    padding: 20px;
}
</style>
