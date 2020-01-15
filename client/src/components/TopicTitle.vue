<template>
  <div id="topic-title">
    <h1 id="topic-text">{{ endpoint }}</h1>
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
  height: 150px;
  position: inherit;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  color: white;
  background-color: #067EB2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

#topic-text {
  font-size: 50px;
}
</style>
