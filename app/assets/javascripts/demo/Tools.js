/**
 * Created by maffee on 16/10/26.
 */


function btn_nc(){



    function boluo_A_nc(){
        //kml <label>
        var offset = 0.00026;
        var ggn = 23.130875645889883-offset;
        var ggs = 23.121166927809885-offset;
        var gge = 114.20237471986587;
        var ggw = 114.19187761906588;

        //ABCD Point
        var enP = new BMap.Point(gge,ggn);
        var wsP = new BMap.Point(ggw,ggs);

        var points = [enP,wsP];

        translateCallback = function (data){
            if(data.status === 0) {
                var BenP = data.points[0];
                var BwsP = data.points[1];

                groundOverlayOptions = {
                    opacity: 0.8,
                    displayOnMinLevel: 10,
                    displayOnMaxLevel: 20
                }

                // 初始化GroundOverlay
                var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

                // 设置GroundOverlay的图片地址
                groundOverlay.setImageURL('/assets/demo/soshineseeA/boluo_A_nc_s.jpg');
                // 添加GroundOverlay
                map.clearOverlays();
                map.addOverlay(groundOverlay);

            }
        };

        var convertor = new BMap.Convertor();
        convertor.translate(points, 1, 5, translateCallback);
    }

    switch (currentblock){
        case 1:
            boluo_A_nc();break;
        case "Boluo_A":
            add_ZoneOverlay_Demo_Block_Boluo_A_nc();break;
        case "Boluo_B":
            add_ZoneOverlay_Demo_Block_Boluo_B_nc();break;
        case "Boluo_C":
            add_ZoneOverlay_Demo_Block_Boluo_C_nc();break;
        default:
            alert("本地块无可见光图像");
    }

}




function btn_infrared(){

    isGroundOverlay = true;

    if (currentblock == 1){
        alert("1");
    }
    else if(currentblock == 2){
        alert("2");
    }
    else{
        alert("本地块无NC图像");
    }
}



function btn_ndvi(){

    switch (currentblock) {
        case 1:
            boluo_A_nc();
            break;
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
            alert("本地块无可见光图像");
    }
}

function btn_val(){

    isGroundOverlay = true;

    if (currentblock == 1){
        alert("1");
    }
    else if(currentblock == 2){
        alert("2");
    }
    else{
        alert("本地块无VAL图像");
    }


}

function btn_spec(){

    isGroundOverlay = true;

    if (currentblock == 1){
        alert("1");
    }
    else if(currentblock == 2){
        alert("2");
    }
    else{
        alert("本地块无SPEC图像");
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



