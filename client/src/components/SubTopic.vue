<template lang="html">
  <div id="sub-topic">
    <article class="accordion" :class="accordionClasses">
      <div class="accordion-header" @click="toggleAccordion">
        {{subtopic.heading}}
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
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
}
.accordion-header {
    max-width: 800px;
    cursor: pointer;
    color: white;
    background-color: #067EB2;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    border: 3px solid #1A2F4C;
}
.accordion-header-text {
    display:flex;
    justify-content: left;
    padding-top: 15px;
}
.accordion-body   {
    padding: 20px;
    max-height: 200em;
    overflow: hidden;
    transition: 0.3s ease all;
    border: .5px solid #1A2F4C;
}
.is-closed .accordion-body {
    max-height: 0;
}
.body-content {
    padding: 20px;
}
</style>
