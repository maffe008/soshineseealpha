/**
 * Created by maffee on 16/11/8.
 */

//Maffee Define ZoneOverlay
function ZoneOverlay(WN,ES,imageurl){

    this._WN = WN;
    this._ES = ES;
    this._imageurl = imageurl;

}

ZoneOverlay.prototype = new BMap.Overlay();

ZoneOverlay.prototype.initialize = function(map){

    this._map = map;

    var div = document.createElement("div");
    div.style.position = "absolute";
    this._width = this._map.pointToOverlayPixel(this._ES).x - this._map.pointToOverlayPixel(this._WN).x;
    this._height = this._map.pointToOverlayPixel(this._ES).y - this._map.pointToOverlayPixel(this._WN).y;
    div.style.width = this._width + "px";
    div.style.height = this._height + "px";

    var image = document.createElement("img");
    image.src = this._imageurl;
    image.width = this._width;
    image.height = this._height;
    div.appendChild(image);

    div.style.backgroundColor = "white";
    map.getPanes().mapPane.appendChild(div);

    this._div = div;

    return div;

};

ZoneOverlay.prototype.draw = function(){

    var position = this._map.pointToOverlayPixel(this._WN);
    this._div.style.left = position.x + "px";
    this._div.style.top = position.y + "px";

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