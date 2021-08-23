// MAP
document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('umap', {
    crs: L.CRS.Simple,
    doubleClickZoom: false
  });

  // LEGEND
  var legend = L.control({ position: 'topright' });
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML +=
      '<img src="img/legend.jpg" alt="legend" width="125" height="197">';
    return div;
  };
  legend.addTo(map);

  map.createPane("markerPane");
  map.on('dblclick', function (ev) {
    let input = prompt("Title?");
    if (input != undefined) {
      L.marker(ev.latlng, { title: input, alt: input, riseOnHover: true, draggable: true }).addTo(map);
      document.getElementsByClassName("leaflet-marker-icon")[document.getElementsByClassName("leaflet-marker-icon").length - 1].style.filter = `hue-rotate(${Math.floor(Math.random() * 180)}deg)`;
    }
  });

  var bounds = [[0, 0], [1000, 1000]];
  var image = L.imageOverlay('img/map.png', bounds).addTo(map);
  map.fitBounds(bounds);
});
