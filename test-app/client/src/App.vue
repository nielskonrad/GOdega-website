<template lang="pug">
  div#app
    PostComponent
    MapBoxMap
</template>

<script>

import PostComponent from './components/PostComponent.vue'
import MapBoxMap from './components/MapBoxMap.vue'

export default {
  name: 'app',
  components: {
    PostComponent,
    MapBoxMap
  }
}
</script>

<style lang="scss">

@import "~@/assets/css/mapbox-gl.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
