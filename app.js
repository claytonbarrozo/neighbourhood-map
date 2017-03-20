var model = [
  {
    title: "New York City",
    lati: 40.785091,
    long: -73.968285
  },
  {
    title: "Brooklyn",
    lati: 40.650002,
    long: -73.949997,
    info: "This is Brooklyn"
  },
  {
    title: "Manhattan",
    lati: 40.758896,
    long: -73.985130,
    info: "This is Manhattan"
  },
  {
    title: "Tribeca",
    lati: 40.730610,
    long: -73.935242,
    info: "This is Tribeca"
  }
];

// function loc(data) {
//   this.title = ko.observable(data.title);
//   this.lat = ko.observable(data.lat);
//   this.long = ko.observable(data.long);
//
//   var latLong = this.lat + "," + this.long;
// };
var markers = [];
function showMarkers () {
  for (var i = 0; model.length; i++) {

    var marker = new google.maps.Marker({
      position: {lat: model[i].lati, lng: model[i].long},
      map: map,
      title: model[i].title
    });

    markers.push(marker);

    for (var x = 0; x < markers.length; x++ ) {

      var api = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location="+ markers[x].lati + "," + markers[x].long + "&key=AIzaSyAoPcHJKmHh5DZ88pBOYUXL9D1WsGhEctg";
      var contentString = "<h2>" + markers[x].title + "</h2><script src='"+ api +"'></script>";


      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

        function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      };

      google.maps.event.addListener(markers[x], 'click', (function (item) {
        infowindow.open(map, item);
        toggleBounce(item);
      })(markers[x]));
    };

  };
};

function viewModel () {
  var self = this;

  self.hide = function () {

  };

  self.show = function () {
    showMarkers();
  };

  self.alert = function () {
    map.setCenter(new google.maps.LatLng( this.lati, this.long ) );
    map.setZoom(14);

    if (this.title === "New York City") {
      map.setZoom(9);
    }
  };
};
