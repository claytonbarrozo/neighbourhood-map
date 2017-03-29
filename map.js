var map;
/**
 * function that deals with google error.
 * Calls the addMessage() passing the message variable as a parameter.
 */
function googleError() {
  var message = "Failed to load Google Map, Try Again Later";

  addMessage(message);
};

/**
 * Passes in a text parameter that gets appended to the #map element
 */
function addMessage(text) {
  var paragraph = '<p class="">' +
    text +
    '</p>';

  $('#map').append(paragraph);
};

/**
 * Array of objects
 * @type {Array}
 */
var model = [
  {
    title: "Chambers Street, Tribeca",
    lat: 40.730610,
    long: -73.935242,
    placeId: "ChIJb6hWfh5awokRephP352eM2k",
    rating: "3.4"
  },

  {
    title: "Southern Blvd, Bronx",
    lat: 40.837048,
    long: -73.865433,
    placeId: "ChIJDb5GdYX0wokRmd3O4Tzw7Fo",
    rating: "3.9"
  },
  {
    title: "Liberty Street, New York",
    lat: 40.650002,
    long: -73.949997,
    placeId: "ChIJURWoF5pYwokRIfXv4To528c",
    rating: "4.2"
  },
  {
    title: "Broadway, New York",
    lat: 40.785091,
    long: -73.968285,
    placeId: "ChIJ-wHkrBlawokRjCiym7MbolM",
    rating: "4.5"
  },
  {
    title: "Times Square, Manhattan",
    lat: 40.758896,
    long: -73.985130,
    placeId: "ChIJmQJIxlVYwokRLgeuocVOGVU",
    rating: "4.6"
  }
];

/**
 * Init function that deals with loading the map, markers and infowindows.
 * Any non-google api calls are also in this function.
 */
function initMap() {
/**
 * Assigning new value the map variable. Defining new google map, with center, zoom
 * and styles set.
 */
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

/**
 * Define empty array
 */
  var markers = [];

  /**
   * Store new instance of google infoWindow in infowindow variable
   */
  var infowindow = new google.maps.InfoWindow();

  /**
   * New instance of LatLngBounds stored in defaultBounds variable. Ready to be passed
   * in when restricting search on autocomplete.
   */
  var defaultBounds = new google.maps.LatLngBounds(
   new google.maps.LatLng(-33.8902, 151.1759),
   new google.maps.LatLng(-33.8474, 151.2631)
);

/**
 * Location function that declares location propertys as observables.
 */
 function loc(data) {
   this.title = ko.observable(data.title);
   this.lat = ko.observable(data.lat);
   this.long = ko.observable(data.long);
   this.placeId = ko.observable(data.placeId);
   this.rating = ko.observable(data.rating);
 }


/**
 * Viewmodel function that deals with creating map markers and ajax requests.
 */
 function viewModel () {
  var self = this;

  /**
   * declare self.points and store model array in observableArray.
   */
  self.location = ko.observableArray(model);


  /**
   * Declare observable which stores an empy string.
   */
  self.query = ko.observable('');


  /**
   * computed observable function which returns an array filter which passes in
   * the locations and checks to see if location title is the same as the text input.
   */
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.location(), function(location){
      return location.title.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
    });
  });
   /**
    * this.places is equal to an empty observableArray.
    */
   this.places = ko.observableArray([]);

/**
 * foreach object in model, push new instance of 'loc', passing in item as a parameter.
 */

   model.forEach(function (item) {
     self.places.push(new loc(item));
   });

   /**
    * declare variable.
    */
   var marker;

   /**
    * foreach item in this.places() run this function and pass in item as a parameter.
    */
   this.places().forEach(function(item) {

     /**
      * new instance of marker object.
      * Sets the position, map, title and animation.
      * @type {google}
      */
     marker = new google.maps.Marker({
      position: new google.maps.LatLng(item.lat(),item.long()),
      map: map,
      title: item.title(),
      animation: google.maps.Animation.DROP
    });

    /**
     * item.marker equates to marker.
     */
    item.marker = marker;

    /**
     * store api in variable, format the api and store inside format variable.
     * @type {String}
     */
    var api = "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBy1J1EATIPkv0fdfMCl9S8XhFRfa_5Vy4&location="+ item.marker.position + "&heading=210&pitch=10&fov=35";
    var format = api.replace(/"/g,"").replace(/'/g,"").replace(/\(|\)/g,"").replace(/\s/g, "");

    /**
     * data variable that stores the data sting.
     * Pass in item.lat and long
     * @type {String}
     */
    var data = "oauth_token=RUBS4MM0XF2RNDV5XE3VVHJUC50AUW0JN5BJ1Z3IGVCPE5WT&v=20131016&ll="+ item.lat() +","+ item.long() +"&section=food&novelty=new";

    /**
     * Ajax request that request venue information from four square.
     *
     * All infowindow code is nested inside of the success function.
     * Pass in the item.marker.title, formatted api and teh venue details for
     * each location. Store that string in contentString variable.
     *
     * Set the infowindow content with contentString.
     *
     * push item.marker to the markers array.
     *
     * If ajax request throws an error then alert the following string.
     */
     $.ajax({
       url: "https://api.foursquare.com/v2/venues/explore",
       dataType: "json",
       data: data,
       async: true,
       success: function(data) {
         var location = data.response.groups[0].items[0].venue.location;
         var details = data.response.groups[0].items[0].venue;

         var contentString = "<h2>" + item.marker.title + "</h2><br>" +
          "<iframe src='"+ format +"'></iframe><h4 class='mt-3'>" +
          "Recommended Food Joints in "+ item.marker.title +"</h4><div class='card mt-3'>" +
          "<div class='card-block'><h4>" + details.name + "</h4><h5>" + location.formattedAddress + "</h5><h5>" + details.contact.formattedPhone +"</h5></div></div>";

          /**
          * zoom function that, when called, will change the center of the map to the
          * lat and long passed in and change the zoom level.
          */
          self.zoom = function () {
            map.setCenter(new google.maps.LatLng(this.lat, this.long));
            map.setZoom(15);
          };
          
        item.marker.addListener("click", function () {
          infowindow.setContent(contentString);
          infowindow.open(map, item.marker);
          this.setAnimation(google.maps.Animation.BOUNCE);
        });

      },
       error: function(data) {
         alert("Could not load data from foursquare!");
       }
     });

     setTimeout(function () {
     google.maps.event.addDomListener(infowindow, "closeclick", function() {
         item.marker.setAnimation(null);
    });
  }, 500);
    markers.push(item.marker);
   });

   /**
    * reset function that, when called, will reset the zoom level to show all the markers.
    */
   self.reset = function () {
     map.setZoom(9);
   };
   /**
    * hide function that, when called, will loop through the markers array and
    * will set the map property for each marker to null.
    */
   self.hide = function () {
     for (var i = 0; i < markers.length; i++) {
       markers[i].setVisible(false);
     };
   };

   /**
    * show function that, when called will loop through the markers array and will
    * set the map property for each marker to the map object.
    * @return {[type]} [description]
    */
   self.show = function () {
     for (var i = 0; i < markers.length; i++) {
       markers[i].setVisible(true);
     };
   };
 };

 /**
  * store new instance of viewmodel object inside function.
  */
 var viewModelOb = new viewModel();

 /**
  * apply bindings to view model object.
  */
 ko.applyBindings(viewModelOb);
};
