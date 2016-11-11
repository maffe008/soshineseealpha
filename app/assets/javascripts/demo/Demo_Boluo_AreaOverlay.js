/**
 * Created by maffee on 16/11/8.
 */
/*
* OutlineOverlay
* ZoneOverlay
* AreaOverlay       <-----
*
* <heading> onclick     =   focus_Demo_Block_A()                <- General Block: A\B\C\etc...
*           background  =   add_AreaOverlay_Demo_Block_A_01
*                           ......
*                           add_AreaOverlay_Demo_Block_A_10
*           has_nc      =   Bool
*           has_val     =   Bool
*           has_ndvi    =   Bool
*           has_altrared=   Bool
*           has_spec    =   Bool
*
*           btn_Style
*
* <element> onclick     =   focus_Demo_Block_A_01()             <-  Divided Block: A01\A02...\B01\...\etc...
*
* */

function focus_Demo_Block_Boluo_A(){

    currentblock = "Boluo_A";
    //清除之前的覆盖物
    map.clearOverlays();
    //
    var Demo_Block_Boluo_A_centerP = new BMap.Point(114.207521,23.129985);
    map.centerAndZoom(Demo_Block_Boluo_A_centerP, 18);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =false;
    currentblock_has_ndvi =true;
    currentblock_has_val =false;
    currentblock_has_spec =false;

    document.getElementById("btn_nc").style.backgroundColor = "coral";
    document.getElementById("btn_nc").style.color = "white";
    document.getElementById("btn_infrared").style.backgroundColor = "lightgrey";
    document.getElementById("btn_infrared").style.color = "grey";
    document.getElementById("btn_ndvi").style.backgroundColor = "coral";
    document.getElementById("btn_ndvi").style.color = "white";
    document.getElementById("btn_val").style.backgroundColor = "lightgrey";
    document.getElementById("btn_val").style.color = "grey";
    document.getElementById("btn_spec").style.backgroundColor = "lightgrey";
    document.getElementById("btn_spec").style.color = "grey";



}

function add_AreaOverlay_Demo_Block_A_01(){

}

function focus_Demo_Block_Boluo_B(){

    currentblock = "Boluo_B";
    //清除之前的覆盖物
    map.clearOverlays();
    //
    var Demo_Block_Boluo_B_centerP = new BMap.Point(114.205496,23.125436);
    map.centerAndZoom(Demo_Block_Boluo_B_centerP, 18);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =false;
    currentblock_has_ndvi =true;
    currentblock_has_val =false;
    currentblock_has_spec =false;

    document.getElementById("btn_nc").style.backgroundColor = "coral";
    document.getElementById("btn_nc").style.color = "white";
    document.getElementById("btn_infrared").style.backgroundColor = "lightgrey";
    document.getElementById("btn_infrared").style.color = "grey";
    document.getElementById("btn_ndvi").style.backgroundColor = "coral";
    document.getElementById("btn_ndvi").style.color = "white";
    document.getElementById("btn_val").style.backgroundColor = "lightgrey";
    document.getElementById("btn_val").style.color = "grey";
    document.getElementById("btn_spec").style.backgroundColor = "lightgrey";
    document.getElementById("btn_spec").style.color = "grey";

    //add_AreaOverlay_Demo_Block_Boluo_B();
}

function add_AreaOverlay_Demo_Block_Boluo_B(){

    add_AreaOverlay_Demo_Block_Boluo_B_01();
    add_AreaOverlay_Demo_Block_Boluo_B_02();
    add_AreaOverlay_Demo_Block_Boluo_B_03();

}

function focus_Demo_Block_Boluo_B_01(){
    //Boluo_BlockB01Center
    var B_BB01C = new BMap.Point(114.205348,23.12603);
    map.centerAndZoom(B_BB01C, 19);  // 中心点坐标 地图级别
}
function add_AreaOverlay_Demo_Block_Boluo_B_01(){

    //Boluo_BlockPoint01 ...
    var B_BP01 = new BMap.Point(114.204328, 23.126051);
    var B_BP02 = new BMap.Point(114.205797, 23.126811);
    var B_BP03 = new BMap.Point(114.206156, 23.126828);
    var B_BP04 = new BMap.Point(114.206336, 23.126067);
    var B_BP07 = new BMap.Point(114.205694, 23.125714);
    var B_BP08 = new BMap.Point(114.20528, 23.125714);
    var B_BP09 = new BMap.Point(114.205213, 23.125532);
    var B_BP12 = new BMap.Point(114.204449, 23.125473);
    //Boluo_BlockB01
    var B_BB01 = [B_BP01,B_BP02,B_BP03,B_BP04,B_BP07,B_BP08,B_BP09,B_BP12];

    var AreaOverlay_Demo_Block_Boluo_B_01 = new BMap.Polygon(B_BB01, polygonOptions);
    map.addOverlay(AreaOverlay_Demo_Block_Boluo_B_01);
    AreaOverlay_Demo_Block_Boluo_B_01.addEventListener("click",focus_Demo_Block_Boluo_B_01())
}
function focus_Demo_Block_Boluo_B_02(){
    //Boluo_BlockB01Center
    var B_BB02C = new BMap.Point(114.204818,23.125141);
    map.centerAndZoom(B_BB02C, 19);  // 中心点坐标 地图级别
}
function add_AreaOverlay_Demo_Block_Boluo_B_02(){

    //Boluo_BlockPoint01 ...
    var B_BP04 = new BMap.Point(114.206336, 23.126067);
    var B_BP05 = new BMap.Point(114.206641, 23.124908);
    var B_BP06 = new BMap.Point(114.206165, 23.124721);
    var B_BP07 = new BMap.Point(114.205694, 23.125714);
    //Boluo_BlockB02
    var B_BB02 = [B_BP04,B_BP05,B_BP06,B_BP07];

    var AreaOverlay_Demo_Block_Boluo_B_02 = new BMap.Polygon(B_BB02, polygonOptions);
    map.addOverlay(AreaOverlay_Demo_Block_Boluo_B_02);
    AreaOverlay_Demo_Block_Boluo_B_02.addEventListener("click",focus_Demo_Block_Boluo_B_02())
}
function focus_Demo_Block_Boluo_B_03(){
    //Boluo_BlockB01Center
    var B_BB03C = new BMap.Point(114.206174,23.125316);
    map.centerAndZoom(B_BB03C, 19);  // 中心点坐标 地图级别
}
function add_AreaOverlay_Demo_Block_Boluo_B_03(){

    //Boluo_BlockPoint01 ...
    var B_BP09 = new BMap.Point(114.205213, 23.125532);
    var B_BP10 = new BMap.Point(114.205159, 23.124975);
    var B_BP11 = new BMap.Point(114.204355, 23.124688);
    var B_BP12 = new BMap.Point(114.204449, 23.125473);
    //Boluo_BlockB01
    var B_BB03 = [B_BP09,B_BP10,B_BP11,B_BP12];

    var AreaOverlay_Demo_Block_Boluo_B_03 = new BMap.Polygon(B_BB03, polygonOptions);
    map.addOverlay(AreaOverlay_Demo_Block_Boluo_B_03);
    AreaOverlay_Demo_Block_Boluo_B_03.addEventListener("click",focus_Demo_Block_Boluo_B_03())
}


function focus_Demo_Block_Boluo_C(){

    currentblock = "Boluo_C";
    //清除之前的覆盖物
    map.clearOverlays();
    //
    var Demo_Block_Boluo_C_centerP = new BMap.Point(114.209732,23.128626);
    map.centerAndZoom(Demo_Block_Boluo_C_centerP, 19);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =false;
    currentblock_has_ndvi =true;
    currentblock_has_val =false;
    currentblock_has_spec =false;

    document.getElementById("btn_nc").style.backgroundColor = "coral";
    document.getElementById("btn_nc").style.color = "white";
    document.getElementById("btn_infrared").style.backgroundColor = "lightgrey";
    document.getElementById("btn_infrared").style.color = "grey";
    document.getElementById("btn_ndvi").style.backgroundColor = "coral";
    document.getElementById("btn_ndvi").style.color = "white";
    document.getElementById("btn_val").style.backgroundColor = "lightgrey";
    document.getElementById("btn_val").style.color = "grey";
    document.getElementById("btn_spec").style.backgroundColor = "lightgrey";
    document.getElementById("btn_spec").style.color = "grey";
}

function focus_Demo_Block_Zhuo_A(){
    //清除之前的覆盖物
    map.clearOverlays();
    //
    var Demo_Block_Boluo_D_centerP = new BMap.Point(115.992803,39.490072);
    map.centerAndZoom(Demo_Block_Boluo_D_centerP, 19);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =false;
    currentblock_has_ndvi =true;
    currentblock_has_val =false;
    currentblock_has_spec =false;

    document.getElementById("btn_nc").style.backgroundColor = "coral";
    document.getElementById("btn_nc").style.color = "white";
    document.getElementById("btn_infrared").style.backgroundColor = "coral";
    document.getElementById("btn_infrared").style.color = "white";
    document.getElementById("btn_ndvi").style.backgroundColor = "coral";
    document.getElementById("btn_ndvi").style.color = "white";
    document.getElementById("btn_val").style.backgroundColor = "lightgrey";
    document.getElementById("btn_val").style.color = "grey";
    document.getElementById("btn_spec").style.backgroundColor = "lightgrey";
    document.getElementById("btn_spec").style.color = "grey";
}

function focus_Demo_Block_Zhuo_B(){
    //清除之前的覆盖物
    map.clearOverlays();
    //
    var Demo_Block_Boluo_E_centerP = new BMap.Point(115.992803,39.490072);
    map.centerAndZoom(Demo_Block_Boluo_E_centerP, 19);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =false;
    currentblock_has_ndvi =true;
    currentblock_has_val =false;
    currentblock_has_spec =false;

    document.getElementById("btn_nc").style.backgroundColor = "coral";
    document.getElementById("btn_nc").style.color = "white";
    document.getElementById("btn_infrared").style.backgroundColor = "coral";
    document.getElementById("btn_infrared").style.color = "white";
    document.getElementById("btn_ndvi").style.backgroundColor = "coral";
    document.getElementById("btn_ndvi").style.color = "white";
    document.getElementById("btn_val").style.backgroundColor = "lightgrey";
    document.getElementById("btn_val").style.color = "grey";
    document.getElementById("btn_spec").style.backgroundColor = "lightgrey";
    document.getElementById("btn_spec").style.color = "grey";
}