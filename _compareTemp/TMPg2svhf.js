// JavaScript Document
var map; 
var location;
    require([
      "esri/map", 
      "esri/dijit/LocateButton",
      "dojo/domReady!"
    ], function(
      Map, LocateButton
    )  {

      map = new Map("map", {
        center: [-73.5673, 45.5017],
        zoom: 13,
        basemap: "streets"
      });
            
      geoLocate = new LocateButton({
        map: map
      }, "LocateButton");
      geoLocate.startup();

    });
if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(zoomToLocation, locationError);
   navigator.geolocation.watchPosition(showLocation, locationError);
 }
 function zoomToLocation(location) {
   var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
   map.centerAndZoom(pt, 16);
 }
 

 function showLocation(location) {
   if (location.coords.accuracy <= 500) {
     // the reading is accurate, do something
   } else {
     // reading is not accurate enough, do something else
   }


 function locationError(error) {
   switch (error.code) {
     case error.PERMISSION_DENIED:
       alert("Location not provided");
       break;
     case error.POSITION_UNAVAILABLE:
       alert("Current location not available");
       break;
     case error.TIMEOUT:
       alert("Timeout");
       break;
     default:
       alert("unknown error");
       break;
   }
 }}