// File Path : /app/assets/javascripts/demo/Tools.js
// Developed by Ma Xiaohang(maffee)
// Demo Version Tools Function
// Created by maffee on 16/10/26.


function btn_nc(){
    switch (currentblock){
        case "Boluo_A":
            add_ZoneOverlay_Demo_Block_Boluo_A_nc();break;
        case "Boluo_B":
            add_ZoneOverlay_Demo_Block_Boluo_B_nc();break;
        case "Boluo_C":
            add_ZoneOverlay_Demo_Block_Boluo_C_nc();break;
        default:
    }
}

function btn_infrared(){
    switch (currentblock) {
        case "Boluo_A":
            add_ZoneOverlay_Demo_Block_Boluo_A_infrared();
            break;
        case "Boluo_B":
            add_ZoneOverlay_Demo_Block_Boluo_B_infrared();
            break;
        case "Boluo_C":
            add_ZoneOverlay_Demo_Block_Boluo_C_infrared();
            break;
        default:
    }
}

function btn_ndvi(){
    switch (currentblock) {
        case "Boluo_A":
            add_ZoneOverlay_Demo_Block_Boluo_A_ndvi();
            break;
        case "Boluo_B":
            add_ZoneOverlay_Demo_Block_Boluo_B_ndvi();
            break;
        case "Boluo_C":
            add_ZoneOverlay_Demo_Block_Boluo_C_ndvi();
            break;
        default:
    }
}

function btn_val(){
    switch (currentblock) {
        default:

    }
}

function btn_spec(){

    switch (currentblock) {
        default:

    }
}



function btn_draw(){

    flag_calculate = flag_calculate * -1;
    if (flag_calculate == 1){
        drawingManager.enableCalculate();
        document.getElementById("btn_draw").style.backgroundColor = "#333333";
        document.getElementById("btn_draw").style.color = "#f6f6f6";
    }
    else{
        drawingManager.disableCalculate();
        document.getElementById("btn_draw").style.backgroundColor = "#f6f6f6";
        document.getElementById("btn_draw").style.color = "black";
    }

}

function btn_go(){

    var keyPoint = new BMap.Point(-156.81274488277742,65.834547237737823);
    map.centerAndZoom(keyPoint,15);
}

function xyfunction(e) {alert(e.point.lng + "," + e.point.lat);}
function btn_xy(){
    flag_xy = flag_xy * -1;
    if (flag_xy == 1){
        map.addEventListener("click",xyfunction);
        document.getElementById("btn_xy").style.backgroundColor = "#333333";
        document.getElementById("btn_xy").style.color = "#f6f6f6";
    }
    else{
        map.removeEventListener("click",xyfunction);
        document.getElementById("btn_xy").style.backgroundColor = "#f6f6f6";
        document.getElementById("btn_xy").style.color = "black";
    }
}

function btn_clear(){

    map.clearOverlays();
    isGroundOverlay = false;
}

function pointinfo(e){
    var TILE_SIZE = 256;
    //map.addEventListener('click', function(e){

        var info = new BMap.InfoWindow('', {width: 260});
        var projection = this.getMapType().getProjection();

        var lngLat = e.point;
        var lngLatStr = "经纬度：" + lngLat.lng + ", " + lngLat.lat;

        var worldCoordinate = projection.lngLatToPoint(lngLat);
        var worldCoordStr = "<br />平面坐标：" + worldCoordinate.x + ", " + worldCoordinate.y;

        var pixelCoordinate = new BMap.Pixel(Math.floor(worldCoordinate.x * Math.pow(2, this.getZoom() - 18)),
            Math.floor(worldCoordinate.y * Math.pow(2, this.getZoom() - 18)));
        var pixelCoordStr = "<br />像素坐标：" + pixelCoordinate.x + ", " + pixelCoordinate.y;

        var tileCoordinate = new BMap.Pixel(Math.floor(pixelCoordinate.x / 256),
            Math.floor(pixelCoordinate.y / 256));
        var tileCoordStr = "<br />图块坐标：" + tileCoordinate.x + ", " + tileCoordinate.y;

        var viewportCoordinate = map.pointToPixel(lngLat);
        var viewportCoordStr = "<br />可视区域坐标：" + viewportCoordinate.x + ", " + viewportCoordinate.y;

        var overlayCoordinate = map.pointToOverlayPixel(lngLat);
        var overlayCoordStr = "<br />覆盖物坐标：" + overlayCoordinate.x + ", " + overlayCoordinate.y;

        info.setContent(lngLatStr + worldCoordStr + pixelCoordStr + tileCoordStr +
            viewportCoordStr + overlayCoordStr);

        map.openInfoWindow(info, lngLat);
    //});
}

function btn_pointinfo(){
    flag_xy = flag_xy * -1;
    if (flag_xy == 1){
        map.addEventListener("click",pointinfo);
        document.getElementById("btn_xy").style.backgroundColor = "#333333";
        document.getElementById("btn_xy").style.color = "#f6f6f6";
    }
    else{
        map.removeEventListener("click",pointinfo);
        document.getElementById("btn_xy").style.backgroundColor = "#f6f6f6";
        document.getElementById("btn_xy").style.color = "black";
    }
}



