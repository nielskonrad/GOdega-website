<template lang="pug">
  div.map-wrapper
    Mapbox(
      :access-token="accessToken"
      :map-options="mapOptions"
      :geolocate-control="controlOptions"
      :scale-control="scaleOptions"
      :fullscreen-control="fullScreenOptions")
</template>

<script>

import Mapbox from 'mapbox-gl-vue';
// require('./assets/css/mapbox-gl.css');

export default {
  name: 'MapBoxMap',
  components: {
    Mapbox
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoibmllbHNrb25yYWQiLCJhIjoiY2p0YmN2c3duMGpjYjQ0cDhhZmdnc20yNiJ9.6cUp1dNUHLHyqPxG3rvNcw',
      mapOptions: {
        // style: 'https://api.mapbox.com/styles/v1/nielskonrad/cjtbeauyu21pb1foampnt1mh8.html?fresh=true&title=true&access_token=pk.eyJ1IjoibmllbHNrb25yYWQiLCJhIjoiY2o1Y2s1ODRlMDlsejMzb2RhN3UyOHJmMSJ9.M3F8blMm0BJCIilcoSMa9g#9.0/37.780000/-122.424100/0',
        style: 'mapbox://styles/nielskonrad/cj5ck7bhy071w2softdki22fa',
        // style: 'mapbox://styles/mapbox/light-v9',
        center: [12.545349, 55.658182],
        zoom: 17
      },
      controlOptions: {
        show: true,
        position: 'top-left'
      },
      scaleOptions: {
        show: true,
        position: 'top-left'
      },
      fullScreenOptions: {
        show: true,
        position: 'top-left'
      }
    }
  },
  async mounted() {
    // var self = this
    // console.log(this.Mapbox)
  },
  methods: {
    // someFunc: function() {
    // }
  }
};
</script>

<style lang="scss">

.map-wrapper {
  /* background: red; */
  width: 100%;
  height: 300px;
  #map {
    width: 100%;
    height: 500px;
    .mapboxgl-canvas-container {
      width: 100%;
      canvas {
        width: 100%;
        left: 0;
      }
    }
  }
}


</style>
