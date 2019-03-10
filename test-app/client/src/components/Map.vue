<template>
  <div class="App"/>
</template>

<script>

import gmapsInit from '../utils/gmaps';

export default {
  name: 'App',
  data() {
    return {
      map: null,
      infoWindow: null
    }
  },
  async mounted() {
    var self = this
    try {
      const google = await gmapsInit();
      self.infoWindow = new google.maps.InfoWindow;
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);
      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var myLocationIcon = {
              path: 'M11 11l1.256 5 3.744-10-10 3.75 5 1.25zm1-11c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z',
              scale: 1,
              fillColor: '#3a84df'
            };

            self.infoWindow.setPosition(pos);
            // self.infoWindow.setContent('Location found.');
            // self.infoWindow.open(map);
            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              animation: google.maps.Animation.DROP,
              icon: myLocationIcon
              // title: 'Hello World!',
              // icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png',
            });
            map.setCenter(pos);
          }, function() {
            // handleLocationError(true, self.infoWindow, map.getCenter());
          });
        }
        // map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      // console.error(error);
    }
    //   // Try HTML5 geolocation.
    //   const google = await gmapsInit();
    //   self.map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 6
    //   });
    //   self.infoWindow = new google.maps.InfoWindow;
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       var pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };

    //       self.infoWindow.setPosition(pos);
    //       self.infoWindow.setContent('Location found.');
    //       self.infoWindow.open(self.map);
    //       self.map.setCenter(pos);
    //     }, function() {
    //       self.handleLocationError(true, self.infoWindow, self.map.getCenter());
    //     });
    //   } else {
    //     // Browser doesn't support Geolocation
    //     self.handleLocationError(false, self.infoWindow, self.map.getCenter());
    //   }
    // } catch (error) {
    //   // console.error(error);
    // }
  },
  methods: {
    // handleLocationError: function(browserHasGeolocation, infoWindow, pos) {
    //   var self = this
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent(browserHasGeolocation ?
    //                         'Error: The Geolocation service failed.' :
    //                         'Error: Your browser doesn\'t support geolocation.');
    //   infoWindow.open(self.map);
    // }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 100vh;
}
</style>