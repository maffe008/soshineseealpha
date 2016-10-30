/**
 * Created by maffee on 16/10/26.
 */





function focus_boluo_A(){

    map.clearOverlays();

    //kml <label>
    var ggn = 23.130875645889883;
    var ggs = 23.121166927809885;
    var gge = 114.20237471986587;
    var ggw = 114.19187761906588;

    var centerP = new BMap.Point((ggw+gge)/2,(ggn+ggs)/2);
    var points = [centerP];

    translateCallback = function (data){
        if(data.status === 0) {
            var BcenterP = data.points[0];

            map.centerAndZoom(BcenterP,18);
        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

    currentblock = 1;
}

function add_overlay_boluo_A_all(){

    //kml <label>
    var ggn = 23.130875645889883;
    var ggs = 23.121166927809885;
    var gge = 114.20237471986587;
    var ggw = 114.19187761906588;

    //ABCD Point
    var wnP = new BMap.Point(ggw,ggn);
    var enP = new BMap.Point(gge,ggn);
    var esP = new BMap.Point(gge,ggs);
    var wsP = new BMap.Point(ggw,ggs);

    var centerP = new BMap.Point((ggw+gge)/2,(ggn+ggs)/2);
    var points = [wnP,enP,esP,wsP,centerP];

    translateCallback = function (data){
        if(data.status === 0) {
            var BwnP = data.points[0];
            var BenP = data.points[1];
            var BesP = data.points[2];
            var BwsP = data.points[3];

            if (isGroundOverlay){
                polygon = new BMap.Polygon([BwnP,BenP,BesP,BwsP], polygonOptions_under);  //创建多边形
            }
            else {
                polygon = new BMap.Polygon([BwnP,BenP,BesP,BwsP], polygonOptions);
            }
             //map.clearOverlays();
             map.addOverlay(polygon);           //增加多边形覆盖物

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);


}

function add_overlay_boluo_A_01(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block01, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block01, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_02(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block02, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block02, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_03(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block03, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block03, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_04(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block04, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block04, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_05(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block05, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block05, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_06(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block06, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block06, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_07(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block07, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block07, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_08(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block08, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block08, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_09(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block09, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block09, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_10(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block10, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block10, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_11(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block11, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block11, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_12(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block12, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block12, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_13(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block13, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block13, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_14(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block14, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block14, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}
function add_overlay_boluo_A_15(){

    if (isGroundOverlay){
        polygon = new BMap.Polygon(block15, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(block15, polygonOptions);
    }
    map.addOverlay(polygon);           //增加多边形覆盖物

}

function focus_boluo_B(){

    map.clearOverlays();

    //kml <label>
    var ggn = 25.818563183402603;
    var ggs = 25.817644834602604;
    var gge = 115.90060622597684;
    var ggw = 115.90284373765684;


    var centerP = new BMap.Point((ggw+gge)/2,(ggn+ggs)/2);
    var points = [centerP];

    translateCallback = function (data){
        if(data.status === 0) {
            var BcenterP = data.points[0];

            map.centerAndZoom(BcenterP,17);
        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

    currentblock = 2;

    alert("该区域坐标有误")
}


function add_overlay_boluo_B_1(){

    //kml <label>
    var ggn = 23.130875645889883;
    var ggs = 23.121166927809885;
    var gge = 114.20237471986587;
    var ggw = 114.19187761906588;

    //ABCD Point
    var wnP = new BMap.Point(ggw,ggn);
    var enP = new BMap.Point(gge,ggn);
    var esP = new BMap.Point(gge,ggs);
    var wsP = new BMap.Point(ggw,ggs);

    var centerP = new BMap.Point((ggw+gge)/2,(ggn+ggs)/2);
    var points = [wnP,enP,esP,wsP,centerP];

    translateCallback = function (data){
        if(data.status === 0) {
            var BwnP = data.points[0];
            var BenP = data.points[1];
            var BesP = data.points[2];
            var BwsP = data.points[3];

            polygon = new BMap.Polygon([
                BwnP,BenP,BesP,BwsP
            ], {strokeColor:"lightblue", strokeStyle:"dashed" ,strokeWeight:2,
                strokeOpacity:0.8, fillOpacity:0.4, fillColor:"red"});  //创建多边形

            //map.clearOverlays();
            map.addOverlay(polygon);           //增加多边形覆盖物

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

}


function add_overlay_boluo_B_2(){

    //kml <label>
    var ggn = 23.130875645889883;
    var ggs = 23.121166927809885;
    var gge = 114.20237471986587;
    var ggw = 114.19187761906588;

    //ABCD Point
    var wnP = new BMap.Point(ggw,ggn);
    var enP = new BMap.Point(gge,ggn);
    var esP = new BMap.Point(gge,ggs);
    var wsP = new BMap.Point(ggw,ggs);

    var centerP = new BMap.Point((ggw+gge)/2,(ggn+ggs)/2);
    var points = [wnP,enP,esP,wsP,centerP];

    translateCallback = function (data){
        if(data.status === 0) {
            var BwnP = data.points[0];
            var BenP = data.points[1];
            var BesP = data.points[2];
            var BwsP = data.points[3];

            polygon = new BMap.Polygon([
                BwnP,BenP,BesP,BwsP
            ], {strokeColor:"lightblue", strokeStyle:"dashed" ,strokeWeight:2,
                strokeOpacity:0.8, fillOpacity:0.4, fillColor:"red"});  //创建多边形

            //map.clearOverlays();
            map.addOverlay(polygon);           //增加多边形覆盖物

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

}

function remove_boluo_overlay(){
    map.removeOverlay(polygon);
}