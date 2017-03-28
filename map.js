var map;

var model = [
  {
    title: "Broadway, New York",
    lat: 40.785091,
    long: -73.968285,
    placeId: "ChIJ-wHkrBlawokRjCiym7MbolM",
    rating: ""
  },

  {
    title: "Liberty Street, New York",
    lat: 40.650002,
    long: -73.949997,
    placeId: "ChIJURWoF5pYwokRIfXv4To528c",
    rating: ""
  },

  {
    title: "Times Square, Manhattan",
    lat: 40.758896,
    long: -73.985130,
    placeId: "ChIJmQJIxlVYwokRLgeuocVOGVU",
    rating: ""
  },

  {
    title: "Chambers Street, Tribeca",
    lat: 40.730610,
    long: -73.935242,
    placeId: "ChIJb6hWfh5awokRephP352eM2k",
    rating: ""
  },

  {
    title: "Southern Blvd, Bronx",
    lat: 40.837048,
    long: -73.865433,
    placeId: "ChIJDb5GdYX0wokRmd3O4Tzw7Fo",
    rating: ""
  }
];

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 40.785091, lng:  -73.968285},
    zoom: 9,
    styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8ec3b9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1a3646"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#64779e"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#334e87"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6f9ba5"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3C7680"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#304a7d"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2c6675"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#255763"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#b0d5ce"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3a4762"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0e1626"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#4e6d70"
            }
          ]
        }
      ]
  });

  var markers = [];
  var infowindow = new google.maps.InfoWindow();
  var defaultBounds = new google.maps.LatLngBounds(
   new google.maps.LatLng(-33.8902, 151.1759),
   new google.maps.LatLng(-33.8474, 151.2631)
);

  var input = document.getElementById("places-search");

  var autocomplete = new google.maps.places.Autocomplete(input);

   autocomplete.bindTo("bounds", map);
   autocomplete.setOptions({strictBounds: defaultBounds});

   google.maps.event.addListener(autocomplete, "place_changed",function(){
       var place = autocomplete.getPlace();
       if (!place.geometry){
           return;
       }
       if (place.geometry.viewport) {
           map.fitBounds(place.geometry.viewport);
       } else {
           map.setCenter(place.geometry.location);
           map.setZoom(17);
       }
   });


 function loc(data) {
   this.title = ko.observable(data.title);
   this.lat = ko.observable(data.lat);
   this.long = ko.observable(data.long);
   this.placeId = ko.observable(data.placeId);
 }


 function viewModel () {
   var self = this;

   this.places = ko.observableArray([]);

   model.forEach(function (item) {
     self.places.push(new loc(item));
   });

   var marker;

   this.places().forEach(function(item) {

     marker = new google.maps.Marker({
      position: new google.maps.LatLng(item.lat(),item.long()),
      map: map,
      title: item.title(),
      animation: google.maps.Animation.DROP
    });

    item.marker = marker;
    var api = "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBy1J1EATIPkv0fdfMCl9S8XhFRfa_5Vy4&location="+ item.marker.position + "&heading=210&pitch=10&fov=35";
    var format = api.replace(/"/g,"").replace(/'/g,"").replace(/\(|\)/g,"").replace(/\s/g, "");

     var data = "oauth_token=RUBS4MM0XF2RNDV5XE3VVHJUC50AUW0JN5BJ1Z3IGVCPE5WT&v=20131016&ll="+ item.lat() +","+ item.long() +"&section=food&novelty=new";
     var one = data.replace(/"/g,"").replace(/'/g,"").replace(/\(|\)/g,"").replace(/\s/g, "");

     $.ajax({
       method: "GET",
       url: "https://api.foursquare.com/v2/venues/explore",
       dataType: "json",
       data: data,
       success: function(data) {
         var location = data.response.groups[0].items[0].venue.location;
         var details = data.response.groups[0].items[0].venue;

         var contentString = "<h2>" + item.marker.title + "</h2><br><iframe src='"+ format +"'></iframe><h4 class='mt-3'>Recommended Food Joints in "+ item.marker.title +"</h4><div class='card mt-3'><div class='card-block'><h4>" + details.name +"</h4><h5>" + location.address +"</h5><h5>" + details.contact.formattedPhone +"</h5></div></div>";
          infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          item.marker.addListener("click", function () {
            infowindow.open(map, item.marker);
            this.setAnimation(google.maps.Animation.BOUNCE);
          });

          google.maps.event.addDomListener(infowindow, "closeclick", function() {
           item.marker.setAnimation(null);
         });
         markers.push(item.marker);
       },
       error: function(data) {
         console.log("Could not load data from foursquare!");
       }
     });
   });


   self.zoom = function () {
     map.setCenter(new google.maps.LatLng(this.lat, this.long));
     map.setZoom(14);
   };

   self.reset = function () {
     map.setZoom(9);
   };

   self.hide = function () {
     for (var i = 0; i < markers.length; i++) {
       markers[i].setMap(null);
     };
   };

   self.show = function () {
     for (var i = 0; i < markers.length; i++) {
       markers[i].setMap(map);
     };
   };
 };
 ko.applyBindings(new viewModel());
};
