/**
 * Created by maffee on 16/10/26.
 */

function btn_nc(){

}

function btn_val(){

}

function btn_nvdi(){

}

function btn_spec(){
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
}

function btn_ruler(){

    var SW = new BMap.Point(116.29579,39.837146);
    var NE = new BMap.Point(116.475451,39.9764);

    groundOverlayOptions = {
        opacity: 1,
        displayOnMinLevel: 10,
        displayOnMaxLevel: 16
    }

    // 初始化GroundOverlay
    var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(SW, NE), groundOverlayOptions);

    // 设置GroundOverlay的图片地址
    groundOverlay.setImageURL('http://developer.baidu.com/map/jsdemo/img/si-huan.png');
    map.addOverlay(groundOverlay);

}

function btn_draw(){


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

            groundOverlayOptions = {
                opacity: 1,
                displayOnMinLevel: 10,
                displayOnMaxLevel: 18
            }

            // 初始化GroundOverlay
            var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

            // 设置GroundOverlay的图片地址
            groundOverlay.setImageURL('demo/soshineseeA/boluo_A_nvdi.png');
            // 添加GroundOverlay
            map.addOverlay(groundOverlay);

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

}

function btn_go(){
    var keyPoint = new BMap.Point(156.902843,65.818563);
    map.centerAndZoom(keyPoint,15);
}

function clear_overlay(){
    map.clearOverlays();
}