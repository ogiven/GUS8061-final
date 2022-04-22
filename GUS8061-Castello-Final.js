  mapboxgl.accessToken = 'pk.eyJ1Ijoib2Nhc3RlbGxvIiwiYSI6ImNrdmg2ZW1ybTF5a3EydnFpNGZ5bTVjcDQifQ.8A9RLtH42G7Ou_nQnuxatA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ocastello/cl23u6a1a000i14nawuni8n3u',
    zoom: 11,
    center: [-77.019, 38.910]
  });

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// add legend
    var layers = ['Vegetation Cover', 'Non-Gun Crime Incidents', 'Gun-Involved Crime Incidents', 'High Crime Low Vegetation Block Groups'];
    var colors = ['#2a924a', '#000000', '#dd0e0e', '#fda312'];

for (i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var color = colors[i];
      var item = document.createElement('div');
      var key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;
var value = document.createElement('span');
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    }


map.on('load', function() {
      map.getCanvas().style.cursor = 'default';
    });
