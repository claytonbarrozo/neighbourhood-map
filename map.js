var map;
var marker;

var model = [
  {
    title: "New York City",
    lat: 40.785091,
    long: -73.968285,
    placeId: "ChIJOwg_06VPwokRYv534QaPC8g"
  },
  {
    title: "Brooklyn",
    lat: 40.650002,
    long: -73.949997,
    placeId: "ChIJCSF8lBZEwokRhngABHRcdoI"
  },
  {
    title: "Manhattan",
    lat: 40.758896,
    long: -73.985130,
    placeId: "ChIJYeZuBI9YwokRjMDs_IEyCwo"
  },
  {
    title: "Tribeca",
    lat: 40.730610,
    long: -73.935242,
    placeId: "ChIJFaeLkx9awokRmCS-Bi9hU0U"
  },
  {
    title: "Bronx",
    lat: 40.837048,
    long: -73.865433,
    placeId: "ChIJsXxpOlWLwokRd1zxj6dDblU"
  }
];

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
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

  var filters = [];

  var service = new google.maps.places.PlacesService(map);
  for (var t = 0; t< model.length; t++) {
    service.getDetails({
      placeId: model[t].placeId
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
      }
    });
  }

  var markers = [];
  var infowindow = new google.maps.InfoWindow();


  var input = document.getElementById('places-search');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function() {
   searchBox.setBounds(map.getBounds());
 });

 searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

  if (places.length == 0) {
    return;
  }

   var bounds = new google.maps.LatLngBounds();
   places.forEach(function(place) {
     if (!place.geometry) {
       console.log("Returned place contains no geometry");
       return;
     }
     var icon = {
       url: place.icon,
       size: new google.maps.Size(71, 71),
       origin: new google.maps.Point(0, 0),
       anchor: new google.maps.Point(17, 34),
       scaledSize: new google.maps.Size(25, 25)
     };

     markers.push(new google.maps.Marker({
       map: map,
       icon: icon,
       title: place.name,
       position: place.geometry.location
     }));

     if (place.geometry.viewport) {
       bounds.union(place.geometry.viewport);
     } else {
       bounds.extend(place.geometry.location);
     }
   });
   map.fitBounds(bounds);
 });

};
$(document).ready(function () {
  ko.applyBindings(new viewModel());
});
