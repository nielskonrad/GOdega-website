<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>{{ why }}</p>
    <div id="animation">
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
      <div>
          <p>Speed: x{{animationSpeed}}</p>
          <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
      </div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="pause">pause</button>
      <button v-on:click="play">play</button>
    </div>
  </div>
</template>

<script>

import Lottie from '../../plugins/lottie.vue'
import * as animationData from '../../static/animations/bursts-1.json'
// import * as animationData from '../../static/animations/godega-1.json'

export default {
  name: 'hello',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      defaultOptions: {animationData: animationData},
      animationSpeed: 1,
      greeting: 'Velkommen til GOdega',
      why: 'BODEGAKLUBBEN holder dig ajour med den billigste bajer og den hyggeligste hof. Hjælp os med at gå på opdagelse i perlerækken af bodegaer i dit lokalområde. Velkommen i klubben!'
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    play: function () {
      this.anim.play()
    },
    pause: function () {
      this.anim.pause()
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* #animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
