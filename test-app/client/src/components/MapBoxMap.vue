<template>
  <div class="map-wrapper">
    <mapbox access-token="accessToken"
    :map-options="{
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-96, 37.8],
      zoom: 3
    }"
    :geolocate-control="{
      show: true,
      position: 'top-left'
    }"
    :scale-control="{
      show: true,
      position: 'top-left'
    }"
    :fullscreen-control="{
      show: true,
      position: 'top-left'
    }">
    </mapbox>
  </div>
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
      accessToken: 'pk.eyJ1IjoibmllbHNrb25yYWQiLCJhIjoiY2o1Y2s1ODRlMDlsejMzb2RhN3UyOHJmMSJ9.M3F8blMm0BJCIilcoSMa9g'
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
  background: red;
  width: 100%;
  height: 300px;
}

#map {
  width: 100%;
  height: 500px;
}

</style>
