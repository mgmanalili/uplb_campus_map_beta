var map = L.map('map').setView([14.161970, 121.241344], 15);
              
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
           attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
           maxZoom: 26,
           //['streets', 'satellite', dark, light],
           id: 'mapbox.streets',
           accessToken: 'pk.eyJ1IjoibWlrZWxzcGF0aWFsOTY2NDMiLCJhIjoiY2pmY2tqZWVvMGV1dzJxcGtjNm5nZzV2ZiJ9.1C78c-18Slhiq4d3Nc-c_A'
           }).addTo(map);

var bldg_style = {
"color": "maroon",
"weight": 2,
"opacity": 0.65
};
  
var road_style = {
"color": "green",
"weight": 2,
"opacity": 1
};


var ComunidadeIcon = L.icon({
  iconUrl: 'static/img/icon/marker-icon-red.png',
  //grey, black, orange
  iconSize: [17, 26],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

var amenity = L.icon({
  iconUrl: 'static/img/icon/marker-icon-grey.png',
  //grey, black, orange
  iconSize: [17, 26],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

var point = L.geoJson(lmark, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: ComunidadeIcon});
  }, onEachFeature: onEachFeature
});

// Amenities //

var am_atm = L.geoJson(atm, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_bank = L.geoJson(bank, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_cafe = L.geoJson(cafe, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_fastfood = L.geoJson(fastfood, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_internet = L.geoJson(internet, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})
 
var am_library = L.geoJson(library, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_resto = L.geoJson(resto, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_toilets = L.geoJson(toilets, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})

var am_waste_basket = L.geoJson(waste_basket, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: amenity});
  },
     onEachFeature: function (feature, layer) {
         var popupContent = '<table>';
        for (var p in feature.properties) {
            popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
     }
})
//end Amenities add //

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.Name);
}

var poly = L.geoJson(struc, {
     style: function (feature) {
         return bldg_style;
     },
     onEachFeature: function (feature, layer) {
         layer.bindPopup(feature.properties.name);
     }
 })

var road = L.geoJson(route, {
     style: function (feature) {
         return road_style;
     },
     onEachFeature: function (feature, layer) {
         layer.bindPopup(feature.properties.Name);
     }
 });

var overlayMaps = {
    "UPLB Buildings": poly,
    "UPLB Landmarks": point,
    "Jeepney Route": road,
    "ATM": am_atm,
    "Bank": am_bank,
    "Coffee Shops": am_cafe,
    "Fastfood": am_fastfood,
    "Internet": am_internet,
    "Library": am_library,
    "Restaurant": am_resto,
    "Toilets": am_toilets,
    "Waste Bins": am_waste_basket,
};

L.control.layers(null, overlayMaps,{position: 'topleft'}).addTo(map);

var searchControl = new L.Control.Search({
      layer: poly,
      zoom: 19,
      initial: false,
      propertyName: 'name',
      circleLocation: true}).addTo(map);

L.control.locate().addTo(map);


/* 3D not working
var osmb = new OSMBuildings(map).load();
osmb.style({ wallColor: 'rgba(192,192,192,0)', roofColor: 'rgba(192,192,192,0)', shadows: 'rgb(0,0,0)' });
*/

