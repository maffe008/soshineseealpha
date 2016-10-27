/**
 * Created by maffee on 16/10/26.
 */
function focus_boluo_A(){

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

            map.centerAndZoom(BcenterP,17);
        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

    currentblock = 1;
}

function add_overlay_boluo_A(){

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

             var polygon = new BMap.Polygon([
             BwnP,BenP,BesP,BwsP
             ], {strokeColor:"lightblue", strokeStyle:"dashed" ,strokeWeight:2,
                 strokeOpacity:0.8, fillOpacity:0.4, fillColor:"red"});  //创建多边形

             map.clearOverlays();
             map.addOverlay(polygon);           //增加多边形覆盖物

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);


}


function focus_boluo_B(){

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

            var polygon = new BMap.Polygon([
                BwnP,BenP,BesP,BwsP
            ], {strokeColor:"lightblue", strokeStyle:"dashed" ,strokeWeight:2,
                strokeOpacity:0.8, fillOpacity:0.4, fillColor:"red"});  //创建多边形

            map.clearOverlays();
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

            var polygon = new BMap.Polygon([
                BwnP,BenP,BesP,BwsP
            ], {strokeColor:"lightblue", strokeStyle:"dashed" ,strokeWeight:2,
                strokeOpacity:0.8, fillOpacity:0.4, fillColor:"red"});  //创建多边形

            map.clearOverlays();
            map.addOverlay(polygon);           //增加多边形覆盖物

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

}