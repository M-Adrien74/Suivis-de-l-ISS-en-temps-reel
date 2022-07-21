let map = L.map('map').setView([50, -50], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 125,
    attribution: '© OpenStreetMap'
}).addTo(map);
function positionIss() {
  $.ajax({
    url: "http://api.open-notify.org/iss-now.json",
    method: "GET",
  }).done(function (result) {
    let issPositionLat = result.iss_position.latitude;
    let issPositionLong = result.iss_position.longitude;
    $("#positionIss").html(
      "Latitude : " + issPositionLat + " Longitude : " + issPositionLong
    );
    var circle = L.circle([issPositionLat, issPositionLong], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5000
    }).addTo(map);


    
   
  });

 
}
setInterval(() => {
  positionIss();
}, 5000);
