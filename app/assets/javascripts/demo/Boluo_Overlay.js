/**
 * Created by maffee on 16/10/26.
 */

var bp01 = new BMap.Point(114.203385,23.129844);
var bp02 = new BMap.Point(114.203681,23.129844);
var bp03 = new BMap.Point(114.204427,23.130218);
var bp04 = new BMap.Point(114.205603,23.131165);
var bp05 = new BMap.Point(114.206834,23.132113);
var bp06 = new BMap.Point(114.207831,23.132586);
var bp07 = new BMap.Point(114.208972,23.132619);
var bp08 = new BMap.Point(114.000000,23.000000);
var bp09 = new BMap.Point(114.210257,23.13419);
var bp10 = new BMap.Point(114.212116,23.13419);
var bp11 = new BMap.Point(114.213769,23.134206);
var bp12 = new BMap.Point(114.213778,23.131448);
var bp13 = new BMap.Point(114.212601,23.130609);
var bp14 = new BMap.Point(114.211254,23.130783);
var bp15 = new BMap.Point(114.210185,23.131872);
var bp16 = new BMap.Point(114.209942,23.131772);
var bp171 = new BMap.Point(114.208918,23.131016);
var bp172 = new BMap.Point(114.208765,23.131348);
var bp173 = new BMap.Point(114.208514,23.131207);
var bp174 = new BMap.Point(114.208388,23.130808);
var bp18 = new BMap.Point(114.207822,23.130476);
var bp19 = new BMap.Point(114.207867,23.129977);
var bp20 = new BMap.Point(114.209026,23.130559);
var bp21 = new BMap.Point(114.210508,23.13031);
var bp22 = new BMap.Point(114.209825,23.126878);
var bp23 = new BMap.Point(114.209466,23.125831);
var bp24 = new BMap.Point(114.209026,23.124535);
var bp25 = new BMap.Point(114.207077,23.12456);
var bp26 = new BMap.Point(114.204228,23.124577);
var bp27 = new BMap.Point(114.203394,23.124577);
var bp28 = new BMap.Point(114.203915,23.128075);
var bp29 = new BMap.Point(114.204112,23.127535);
var bp30 = new BMap.Point(114.204373,23.126297);
var bp31 = new BMap.Point(114.20449,23.12574);
var bp32 = new BMap.Point(114.205774,23.125948);
var bp33 = new BMap.Point(114.206178,23.124901);
var bp34 = new BMap.Point(114.20678,23.12505);
var bp35 = new BMap.Point(114.206187,23.127152);
var bp36 = new BMap.Point(114.207265,23.127593);
var bp37 = new BMap.Point(114.20767,23.128889);
var bp38 = new BMap.Point(114.206762,23.129088);
var bp39 = new BMap.Point(114.205639,23.127817);
var bp40 = new BMap.Point(114.205226,23.129155);
var bp41 = new BMap.Point(114.206259,23.129578);
var bp42 = new BMap.Point(114.206789,23.129645);

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