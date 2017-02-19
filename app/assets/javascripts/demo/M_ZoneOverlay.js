// File Path : /app/assets/javascripts/demo/M_ZoneOverlay.js
// Developed by Ma Xiaohang(maffee)
// Demo Version My Zone Overlay
// Created by maffee on 16/11/8.

//Maffee Define ZoneOverlay


ZoneOverlay.prototype.attr = function(){

    alert(this._WN +","+this._ES)

};

/* how to use
has_zone = false;
function addzone(){
    has_zone = true;
    var WN_1 = new BMap.Point(114.203375,23.133935);
    var ES_1 = new BMap.Point(114.213799,23.124302);
    var imageurl_1 = "/assets/demo/soshineseeA/boluo_A_nc_s.jpg";
    var myzoneoverlay = new ZoneOverlay(WN_1,ES_1,imageurl_1);
    map.addOverlay(myzoneoverlay);
}
map.addEventListener("zoomstart",function(){
    if (has_zone){
    map.removeOverlay(myzoneoverlay);
}
    else{

    }
});

map.addEventListener("zoomend",function(){
    addzone();
})
 */