<template lang="html">
  <div id="sub-topic">
    <article class="accordion" :class="accordionClasses">
      <div class="accordion-header" @click="toggleAccordion">
        <div class="header-text">{{ subtopic.heading }}</div>
      </div>
      <div class="accordion-body">
          <interactive-display v-if="subtopic.heading == 'Savings calculator'"></interactive-display>
          <interactive-display-credit v-if="subtopic.heading == 'Loan calculator'"></interactive-display-credit>
          <interactive-display-budget v-if="subtopic.heading == 'Budget calculator'"></interactive-display-budget>
        <div class="body-text">
          <p v-html="subtopic.text">{{subtopic.text}}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Sidebar from './SideBar.vue'
import InteractiveDisplayBudget from './InteractiveDisplayBudget.vue';
import InteractiveDisplayCredit from './InteractiveDisplayCredit.vue';
import InteractiveDisplay from './InteractiveDisplaySavings.vue';

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
      this.isOpen = !this.isOpen;
      eventBus.$on('topic-clicked', (isOpen) => this.isOpen = false);
      }
    },
  mounted() {

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
    'interactive-display': InteractiveDisplay,
    'interactive-display-credit': InteractiveDisplayCredit,
    'interactive-display-budget': InteractiveDisplayBudget
  }
}
</script>

<style lang="css" scoped>
.accordion {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    padding-top: 20px;
    transition: 0.4s ease all;
}
.accordion-header {
    width: 1100px;
    height: 40px;
    color: white;
    background-color: #1A2F4C;
    border-bottom: 3px solid #1A2F4C;
}
.header-text {
  padding: 8px;
  font-size: 20px;
}
.body-text {

}
.accordion-body   {
    max-height: 200em;
    overflow: hidden;
    border: .5px solid #1A2F4C;
    padding: 0px 10px 0px 10px;
}
.is-closed .accordion-body {
    max-height: 0;
}
.body-content {
    padding: 20px;
}
</style>
