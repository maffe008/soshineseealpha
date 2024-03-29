// File Path : /app/assets/javascripts/demo/Alpha_Boluo_GroundOverlay.js
// Developed by Ma Xiaohang(maffee)
// Alpha Version Groundinfo display Function
// Created by maffee on 16/11/10.

function btn_nc(){

    isGroundOverlay = true;

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




    function boluo_B_nc(){
        //kml <label>

        var ggn = 23.15029308;
        var ggs = 23.0948146;
        var gge = 114.2508615;
        var ggw = 114.17088341;

        //ABCD Point
        var enP = new BMap.Point(gge,ggn);
        var wsP = new BMap.Point(ggw,ggs);

        var points = [enP,wsP];

        translateCallback = function (data){
            if(data.status === 0) {
                var BenP = data.points[0];
                var BwsP = data.points[1];

                groundOverlayOptions = {
                    opacity: 0.9,
                    displayOnMinLevel: 10,
                    displayOnMaxLevel: 20
                }

                // 初始化GroundOverlay
                var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

                // 设置GroundOverlay的图片地址
                groundOverlay.setImageURL('/assets/demo/soshineseeHuge/DOM-50cmGSD_ok_s.jpg');
                // 添加GroundOverlay
                map.clearOverlays();

                map.addOverlay(groundOverlay);

            }
        };

        var convertor = new BMap.Convertor();
        convertor.translate(points, 1, 5, translateCallback);
    }

    if (currentblock == 1){
        boluo_A_nc();
    }
    else if(currentblock == 2){
        boluo_B_nc();
    }
    else{
        alert("本地块无NC图像");
    }


}


function btn_val(){

    isGroundOverlay = true;

    function boluo_B_val(){
        //kml <label>
        var ggn = 23.15029308;
        var ggs = 23.0948146;
        var gge = 114.2508615;
        var ggw = 114.17088341;

        //ABCD Point
        var enP = new BMap.Point(gge,ggn);
        var wsP = new BMap.Point(ggw,ggs);

        var points = [enP,wsP];

        translateCallback = function (data){
            if(data.status === 0) {
                var BenP = data.points[0];
                var BwsP = data.points[1];

                groundOverlayOptions = {
                    opacity: 0.9,
                    displayOnMinLevel: 10,
                    displayOnMaxLevel: 20
                };

                // 初始化GroundOverlay
                var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

                // 设置GroundOverlay的图片地址
                groundOverlay.setImageURL('/assets/demo/soshineseeHuge/DEM-50cmGSD_ok_s.jpg');
                // 添加GroundOverlay
                map.clearOverlays();
                map.addOverlay(groundOverlay);

            }
        };

        var convertor = new BMap.Convertor();
        convertor.translate(points, 1, 5, translateCallback);
    }

    if (currentblock == 1){
        //boluo_A_val();
    }
    else if(currentblock == 2){
        boluo_B_val();
    }
    else{
        alert("本地块无VAL图像");
    }


}

function btn_ndvi(){

    isGroundOverlay = true;

    function boluo_A_nvdi(){
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
                    opacity: 0.7,
                    displayOnMinLevel: 10,
                    displayOnMaxLevel: 20
                };

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
    }

    function boluo_B_nvdi(){
        //kml <label>
        var ggn = 23.15029308;
        var ggs = 23.0948146;
        var gge = 114.2508615;
        var ggw = 114.17088341;

        //ABCD Point
        var enP = new BMap.Point(gge,ggn);
        var wsP = new BMap.Point(ggw,ggs);

        var points = [enP,wsP];

        translateCallback = function (data){
            if(data.status === 0) {
                var BenP = data.points[0];
                var BwsP = data.points[1];

                groundOverlayOptions = {
                    opacity: 0.9,
                    displayOnMinLevel: 10,
                    displayOnMaxLevel: 20
                };

                // 初始化GroundOverlay
                var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

                // 设置GroundOverlay的图片地址
                groundOverlay.setImageURL('/assets/demo/soshineseeHuge/boluo_NVDI_20.jpg');
                // 添加GroundOverlay
                map.clearOverlays();
                map.addOverlay(groundOverlay);

            }
        };

        var convertor = new BMap.Convertor();
        convertor.translate(points, 1, 5, translateCallback);
    }

    if (currentblock == 1){
        boluo_A_nvdi();
    }
    else if(currentblock == 2){
        boluo_B_nvdi();
    }
    else{
        alert("本地块无NVDI图像");
    }
    //alert(currentblock);

}

function btn_spec(){

    isGroundOverlay = true;
    function test_A_spec(){
        //ABCD Point
        var BenP = new BMap.Point(116.360886,39.992374);
        var BwsP = new BMap.Point(116.346926,39.982068);

        groundOverlayOptions = {
            opacity: 0.6,
            displayOnMinLevel: 10,
            displayOnMaxLevel: 20
        };

        // 初始化GroundOverlay
        var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(BwsP, BenP), groundOverlayOptions);

        // 设置GroundOverlay的图片地址
        groundOverlay.setImageURL('/assets/demo/buaamap_s1.jpg');
        //
        // 添加GroundOverlay
        map.clearOverlays();
        map.addOverlay(groundOverlay);
    }
    if (currentblock == 101){
        test_A_spec();
    }
    else{
        alert("本地块无特殊定义图像")
    }

}
