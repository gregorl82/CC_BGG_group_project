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
  width: 100%;
  height: 100px;
  position: inherit;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  color: white;
  background-color: #1A2F4C;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
