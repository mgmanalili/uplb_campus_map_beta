function buildOverpassApiUrl(map, overpassQuery) {
  var bounds = map.getBounds().getSouth() + ',' + map.getBounds().getWest() + ',' + map.getBounds().getNorth() + ',' + map.getBounds().getEast();
  var nodeQuery = 'node[' + overpassQuery + '](' + bounds + ');';
  var wayQuery = 'way[' + overpassQuery + '](' + bounds + ');';
  var relationQuery = 'relation[' + overpassQuery + '](' + bounds + ');';
  var query = '?data=[out:json][timeout:15];(' + nodeQuery + wayQuery + relationQuery + ');out body geom;';
  var baseUrl = 'http://overpass-api.de/api/interpreter';
  var resultUrl = baseUrl + query;
  return resultUrl;
}

$("#query-button").click(function ()   {
  var queryTextfieldValue = $("#query-textfield").val();
  var overpassApiUrl = buildOverpassApiUrl(map, queryTextfieldValue);
  
  $.get(overpassApiUrl, function (osmDataAsJson) {
    var resultAsGeojson = osmtogeojson(osmDataAsJson);
    var resultLayer = L.geoJson(resultAsGeojson, {
      style: function (feature) {
        return {color: "#ff0000"};
      },
      filter: function (feature, layer) {
        var isPolygon = (feature.geometry) && (feature.geometry.type !== undefined) && (feature.geometry.type === "Polygon");
        if (isPolygon) {
          feature.geometry.type = "Point";
          var polygonCenter = L.latLngBounds(feature.geometry.coordinates[0]).getCenter();
          feature.geometry.coordinates = [ polygonCenter.lat, polygonCenter.lng ];
        }
        return true;
      },
      onEachFeature: function (feature, layer) {
        var popupContent = "";
        popupContent = popupContent + "<dt>@id</dt><dd>" + feature.properties.type + "/" + feature.properties.id + "</dd>";
        var keys = Object.keys(feature.properties.tags);
        keys.forEach(function (key) {
          popupContent = popupContent + "<dt>" + key + "</dt><dd>" + feature.properties.tags[key] + "</dd>";
        });
        popupContent = popupContent + "</dl>"
        layer.bindPopup(popupContent);
      }
    }).addTo(map);
  });
});




