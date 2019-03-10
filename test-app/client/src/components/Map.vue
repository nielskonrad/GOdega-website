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
      var destination = '';
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      var createMap = function (start) {
        var travel = {
          origin : (start.coords)? new google.maps.LatLng(start.lat, start.lng) : start.address,
          destination : destination,
          travelMode : google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(travel, function(result, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            
            var str = result.routes[0].legs[0].start_address;
            var res = str.replace(", Danmark", "");
            console.log(res);

            // directionsDisplay.setDirections(result);
          }
        });
      };

      // Check for geolocation support  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Success!
            createMap({
              coords : true,
              lat : position.coords.latitude,
              lng : position.coords.longitude
            });
          }, 
          function () {
            // Gelocation fallback: Defaults to Copenhagen, Denmark
            createMap({
              coords : false,
              address : "Copenhagen, Denmark"
            });
          }
        );
      } else {
        // No geolocation fallback: Defaults to Copenhagen, Denmark
        createMap({
          coords : false,
          address : "Copenhagen, Denmark"
        });
      }
      // self.infoWindow = new google.maps.InfoWindow;
      // const geocoder = new google.maps.Geocoder();
      // const map = new google.maps.Map(this.$el);
      // geocoder.geocode({ address: 'Austria' }, (results, status) => {
      //   if (status !== 'OK' || !results[0]) {
      //     throw new Error(status);
      //   }
      //   if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(function(position) {
      //       var pos = {
      //         lat: position.coords.latitude,
      //         lng: position.coords.longitude
      //       };

      //       self.infoWindow.setPosition(pos);
      //       // self.infoWindow.setContent('Location found.');
      //       // self.infoWindow.open(map);
      //       var marker = new google.maps.Marker({
      //         position: pos,
      //         map: map,
      //         // title: 'Hello World!',
      //         // icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png',
      //       });
      //       map.setCenter(pos);
      //     }, function() {
      //       handleLocationError(true, infoWindow, map.getCenter());
      //     });
      //   }
      //   // map.setCenter(results[0].geometry.location);
      //   map.fitBounds(results[0].geometry.viewport);
      // });
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