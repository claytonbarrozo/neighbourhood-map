function loc(data) {
  this.title = ko.observable(data.title);
  this.lat = ko.observable(data.lat);
  this.long = ko.observable(data.long);
  this.placeId = ko.observable(data.placeId);
};


function viewModel () {
  var self = this;

  this.places = ko.observableArray([]);

  model.forEach(function (item) {
    self.places.push(new loc(item));
  });

  var marker;
  var markers = [];

  this.places().forEach(function(item) {
    marker = new google.maps.Marker({
     position: new google.maps.LatLng(item.lat(),item.long()),
     map: map,
     title: item.title(),
     animation: google.maps.Animation.DROP,
  });

  item.marker = marker;
  var api = "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBy1J1EATIPkv0fdfMCl9S8XhFRfa_5Vy4&location="+ item.marker.position + "&heading=210&pitch=10&fov=35"
  var format = api.replace(/"/g,"").replace(/'/g,"").replace(/\(|\)/g,"").replace(/\s/g, '');
  var contentString = "<h2>" + item.marker.title + "</h2><br><iframe src='"+ format +"'></iframe>";
  var infowindow = new google.maps.InfoWindow({
     content: contentString
   });
   item.marker.addListener('click', function () {
     infowindow.open(map, item.marker);
   });
   markers.push(item.marker);
  });

  self.zoom = function () {
    map.setCenter(new google.maps.LatLng(this.lat, this.long));
    map.setZoom(14);

    if (this.title === "New York City") {
      map.setZoom(9);
    }
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
