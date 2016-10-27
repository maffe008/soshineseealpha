/**
 * Created by maffee on 16/10/26.
 */

function btn_nc(){
    //kml <label>
    var ggn = 23.130875645889883;
    var ggs = 23.121166927809885;
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
                opacity: 1,
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

function btn_val(){

}

function btn_nvdi(){
    //kml <label>
    var ggn = 23.130875645889883;
    var ggs = 23.121166927809885;
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
                opacity: 1,
                displayOnMinLevel: 10,
                displayOnMaxLevel: 20
            }

            // 初始化GroundOverlay
            var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

            // 设置GroundOverlay的图片地址
            groundOverlay.setImageURL('/assets/demo/soshineseeA/boluo_A_nvdi_s.png');
            // 添加GroundOverlay
            map.clearOverlays();
            map.addOverlay(groundOverlay);

        }
    };

    var convertor = new BMap.Convertor();
    convertor.translate(points, 1, 5, translateCallback);

    alert(currentblock);

}

function btn_spec(){

    //ABCD Point
    var BenP = new BMap.Point(116.360724,39.992268);
    var BwsP = new BMap.Point(116.346921,39.982161);

    groundOverlayOptions = {
        opacity: 0.6,
        displayOnMinLevel: 10,
        displayOnMaxLevel: 20
    }

    // 初始化GroundOverlay
    var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

    // 设置GroundOverlay的图片地址
    groundOverlay.setImageURL('/assets/demo/buaamap_s.jpg');
    // 添加GroundOverlay
    map.clearOverlays();
    map.addOverlay(groundOverlay);

}

function btn_ruler(){


}

function btn_draw(){


}

function btn_go(){

    var keyPoint = new BMap.Point(-156.81274488277742,65.834547237737823);
    map.centerAndZoom(keyPoint,15);
}

function clear_overlay(){
    map.clearOverlays();
}