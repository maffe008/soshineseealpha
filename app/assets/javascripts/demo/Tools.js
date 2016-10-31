/**
 * Created by maffee on 16/10/26.
 */

function btn_nc(){

    isGroundOverlay = true;
    function boluo_A_nc(){
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
    if (currentblock == 1){
        boluo_A_nc();
    }
    else{
        alert("本地块无NC图像")
    }


}


function btn_val(){
    alert("本地块无VAL图像");

}

function btn_nvdi(){

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

    if (currentblock == 1){
        boluo_A_nvdi();
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

function btn_draw(){
    /*
    var styleOptions_under = {
        strokeColor:"red",    //边线颜色。
        fillColor:"white",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 1,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 1,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    };
    */
    var styleOptions = {
        strokeColor:"skyblue",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.4,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    };
    drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(5, 5), //偏离值
        },
        enableCalculate: true,
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
    });
    //实例化鼠标绘制工具
    /*
    if (isGroundOverlay){
        drawingManager = new BMapLib.DrawingManager(map, {
            isOpen: false, //是否开启绘制模式
            enableDrawingTool: true, //是否显示工具栏
            drawingToolOptions: {
                anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                offset: new BMap.Size(5, 5), //偏离值
            },
            enableCalculate: true,
            circleOptions: styleOptions_under, //圆的样式
            polylineOptions: styleOptions_under, //线的样式
            polygonOptions: styleOptions_under, //多边形的样式
            rectangleOptions: styleOptions_under //矩形的样式
        });
    }
    else{
        drawingManager = new BMapLib.DrawingManager(map, {
            isOpen: false, //是否开启绘制模式
            enableDrawingTool: true, //是否显示工具栏
            drawingToolOptions: {
                anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                offset: new BMap.Size(5, 5), //偏离值
            },
            enableCalculate: true,
            circleOptions: styleOptions, //圆的样式
            polylineOptions: styleOptions, //线的样式
            polygonOptions: styleOptions, //多边形的样式
            rectangleOptions: styleOptions //矩形的样式
        });
    }
    */
    drawingManager.addEventListener("overlaycomplete", function(e) {
        var mode = e.drawingMode;
        var result = e.calculate;
        if(mode == "polyline"){
            if(result<1000){
                alert(result + "米");
            }
            else{
                alert(result/1000 + "千米")
            }
        }
        else{
            if(result<1000000){
                alert(result + "平方米");
            }
            else{
                alert(result/1000000 + "平方千米")
            }
        }

    });
}

function btn_go(){

    var keyPoint = new BMap.Point(-156.81274488277742,65.834547237737823);
    map.centerAndZoom(keyPoint,15);
}

function btn_clear(){

    map.clearOverlays();
    isGroundOverlay = false;
}

