var MAP_ZOOM = 15;

Meteor.startup(function() {
  GoogleMaps.load();
});


Template.map.helpers({  
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
},
mapOptions: function() {
    var latLng = Geolocation.latLng();
    // Initialize the map once we have the latLng.
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: MAP_ZOOM,
        // mapOptions

        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };
}
}
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
    var latLng = Geolocation.latLng();

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latLng.lat, latLng.lng),
      map: map.instance,
      icon: "/pictures/marker.png"
  });

    var restArr = Posts.find().fetch()
    console.log(restArr.lat)
    console.log(restArr.lng)

    var infowin0 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Freebirds</b></p>'
        + '<a href="https://www.yelp.com/biz/freebirds-world-burrito-isla-vista">'
        + 'https://www.yelp.com/biz/freebirds-world-burrito-isla-vista</a></div>'
    })

    var infowin1 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Lilys Tacos</b></p>'
        + '<a href="https://www.yelp.com/biz/lillys-tacos-goleta">'
        + 'https://www.yelp.com/biz/lillys-tacos-goleta</a></div>'
    })

    var infowin2 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Taco Bell</b></p>'
        + '<a href="https://www.yelp.com/biz/taco-bell-goleta?osq=taco+bell">'
        + 'https://www.yelp.com/biz/taco-bell-goleta?osq=taco+bell</a></div>'
    })

    var infowin3 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Hana Kitchen</b></p>'
        + '<a href="https://www.yelp.com/biz/hana-kitchen-isla-vista">'
        + 'https://www.yelp.com/biz/hana-kitchen-isla-vista</a></div>'
    })

    var infowin4 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>IV Deli Mart</b></p>'
        + '<a href="https://www.yelp.com/biz/iv-deli-mart-goleta">'
        + 'https://www.yelp.com/biz/iv-deli-mart-goleta</a></div>'
    })

    var infowin5 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Blenders</b></p>'
        + '<a href="https://www.yelp.com/biz/blenders-in-the-grass-santa-barbara-2">'
        + 'https://www.yelp.com/biz/blenders-in-the-grass-santa-barbara-2</a></div>'
    })

    var infowin6 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Blaze Pizza</b></p>'
        + '<a href="https://www.yelp.com/biz/blaze-fast-fired-pizza-isla-vista?osq=Blaze+Fast-Fire%27d+Pizza">'
        + 'https://www.yelp.com/biz/blaze-fast-fired-pizza-isla-vista?osq=Blaze+Fast-Fire%27d+Pizza</a></div>'
    })

    var infowin7 = new google.maps.InfoWindow({
        content: '<div id="infowin"><p><b>Dominos Pizza</b></p>'
        + '<a href="https://www.yelp.com/biz/dominos-pizza-goleta-3?osq=Domino%27s+Pizza">'
        + 'https://www.yelp.com/biz/dominos-pizza-goleta-3?osq=Domino%27s+Pizza</a></div>'
    })

    var marker0 = new google.maps.Marker({
      position: new google.maps.LatLng(34.413279, -119.855687),
      map: map.instance,
      title: "Freebirds"
    });

    var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(34.428941, -119.869116),
      map: map.instance,
      title: "Lilys Tacos"
  });

    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(34.436368, -119.830411),
      map: map.instance,
      title: "Taco Bell"
  });

    var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(34.413289, -119.856482),
      map: map.instance,
      title: "Hana Kitchen"
  });

    var marker4 = new google.maps.Marker({
      position: new google.maps.LatLng(34.412938, -119.856405),
      map: map.instance,
      title: "IV Deli Mart"
  });

    var marker5 = new google.maps.Marker({
      position: new google.maps.LatLng(34.413278, -119.856777),
      map: map.instance,
      title: "Blenders"
  });

    var marker6 = new google.maps.Marker({
      position: new google.maps.LatLng(34.413319, -119.855928),
      map: map.instance,
      title: "Blaze Pizza"
  });

    var marker7 = new google.maps.Marker({
      position: new google.maps.LatLng(34.412065, -119.857550),
      map: map.instance,
      title: "Domino's Pizza"
  });

    marker0.addListener('click', function() {
        infowin0.open(map.instance, marker0);
    });

    marker1.addListener('click', function() {
        infowin1.open(map.instance, marker1);
    });

    marker2.addListener('click', function() {
        infowin2.open(map.instance, marker2);
    });

    marker3.addListener('click', function() {
        infowin3.open(map.instance, marker3);
    });

    marker4.addListener('click', function() {
        infowin4.open(map.instance, marker4);
    });

    marker5.addListener('click', function() {
        infowin5.open(map.instance, marker5);
    });

    marker5.addListener('click', function() {
        infowin5.open(map.instance, marker5);
    });

    marker6.addListener('click', function() {
        infowin6.open(map.instance, marker6);
    });

    marker7.addListener('click', function() {
        infowin7.open(map.instance, marker7);
    });
});
});