/**
 * Created by maffee on 16/10/16.
 */


polygonOptions = {
    strokeColor : "skyblue",
    strokeStyle : "dashed",
    strokeWeight : 2,
    strokeOpacity : 0.8,
    fillOpacity : 0.4,
    fillColor : "red"
};

polygonOptions_under = {
    strokeColor : "red",
    strokeStyle : "dashed",
    strokeWeight : 2,
    strokeOpacity : 1,
    fillOpacity : 1,
    fillColor : "white"
};


function focus_test_A(){

    map.clearOverlays();
    var keyPoint = new BMap.Point(116.356951,39.986874);
    map.centerAndZoom(keyPoint,17);

    currentblock = 101;
}

function add_overlay_test_A_1(){

    var keyPoint = new BMap.Point(116.356951,39.986874);

    var polygonPoints =[
        keyPoint,
        new BMap.Point(116.359772,39.98695),
        new BMap.Point(116.359862,39.985187),
        new BMap.Point(116.357055,39.985073)
    ];
    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_A_2(){

    var keyPoint = new BMap.Point(116.356102,39.990951);

    var polygonPoints =[
        keyPoint,
        new BMap.Point(116.359588,39.991145),
        new BMap.Point(116.35974,39.988595),
        new BMap.Point(116.356093,39.988505)
    ];
    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_A_3(){

    var keyPoint = new BMap.Point(116.354674,39.986639);

    var polygonPoints = [
        keyPoint,
        new BMap.Point(116.3567,39.9867),
        new BMap.Point(116.3568,39.985444),
        new BMap.Point(116.35568,39.985464),
        new BMap.Point(116.355599,39.985768),
        new BMap.Point(116.354719,39.985775)
    ];
    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_A_4(){

    var keyPoint = new BMap.Point(116.351642,39.986853);

    var polygonPoints = [
        keyPoint,
        new BMap.Point(116.354616,39.98695),
        new BMap.Point(116.354759,39.985091),
        new BMap.Point(116.35175,39.984994)
    ];
    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_A_5(){

    var keyPoint = new BMap.Point(116.350802,39.991808);

    var polygonPoints =[
        keyPoint,
        new BMap.Point(116.354404,39.991821),
        new BMap.Point(116.354503,39.990412),
        new BMap.Point(116.350802,39.990267)
    ];
    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_A_6(){

    var keyPoint = new BMap.Point(116.348197,39.984);

    var polygonPoints = [
        keyPoint,
        new BMap.Point(116.351296,39.984193),
        new BMap.Point(116.352194,39.983674),
        new BMap.Point(116.352221,39.982251),
        new BMap.Point(116.350101,39.982195)
    ]
    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function focus_test_B(){

    map.clearOverlays();
    var keyPoint = new BMap.Point(116.356951,39.986874);
    map.centerAndZoom(keyPoint,17);

    currentblock = 102;
}

function add_overlay_test_B_2(){

    var keyPoint = new BMap.Point(116.358303,39.991833);

    var polygonPoints = [
        keyPoint,
        new BMap.Point(116.359552,39.991888),
        new BMap.Point(116.359583,39.991162),
        new BMap.Point(116.358294,39.991149)
    ];

    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_B_3(){

    var keyPoint = new BMap.Point(116.359327,39.983627);

    var polygonPoints = [
        keyPoint,
        new BMap.Point(116.360347,39.983599),
        new BMap.Point(116.360041,39.982487),
        new BMap.Point(116.359376,39.982466),
    ];

    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function add_overlay_test_B_4(){

    var keyPoint = new BMap.Point(116.357144,39.983548);

    var polygonPoints = [
        keyPoint,
        new BMap.Point(116.359322,39.9836),
        new BMap.Point(116.359322,39.982725),
        new BMap.Point(116.357238,39.982677)
    ];

    if (isGroundOverlay){
        polygon = new BMap.Polygon(polygonPoints, polygonOptions_under);  //创建多边形
    }
    else {
        polygon = new BMap.Polygon(polygonPoints, polygonOptions);
    }
    //map.clearOverlays();
    map.addOverlay(polygon);           //增加多边形覆盖物
    //map.centerAndZoom(keyPoint,18);
}

function remove_test_overlay(){
    map.removeOverlay(polygon);
}