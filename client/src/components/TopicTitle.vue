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
#topic-title {
  height: 200px;
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid slategray;
}
</style>
