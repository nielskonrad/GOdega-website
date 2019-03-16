<template lang="pug">
  div.map-wrapper
    Mapbox(access-token="accessToken"
      :map-options="mapOptions"
      :geolocate-control="controlOptions"
      :scale-control="scaleOptions"
      :fullscreen-control="fullScreenOptions")
</template>

<script>

import Mapbox from 'mapbox-gl-vue';

export default {
  name: 'MapBoxMap',
  components: {
    Mapbox
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoibmllbHNrb25yYWQiLCJhIjoiY2o1Y2s1ODRlMDlsejMzb2RhN3UyOHJmMSJ9.M3F8blMm0BJCIilcoSMa9g',
      mapOptions: {
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3
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

<style>

.map-wrapper {
  /* background: red; */
  width: 100%;
  height: 300px;
}

#map {
  width: 100%;
  height: 500px;
}

</style>
