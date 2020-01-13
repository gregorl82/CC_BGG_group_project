<template>
  <div id="topic-title">
    <h1>{{ endpoint }}</h1>
  </div>
</template>

<script>

export default {
  name: 'topic-title',
  props: ['endpoint']
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
