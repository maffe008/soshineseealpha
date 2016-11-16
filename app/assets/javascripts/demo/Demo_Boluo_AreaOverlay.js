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

/* OutlineOverlay
 * Divided Block Outline
 * */
var AreapolygonOptions = {
    strokeColor : "white",
    strokeStyle : "solid",
    strokeWeight : 3,
    strokeOpacity : 1,
    fillColor : "none"
};

function focus_Demo_Block_Boluo_A(){

    currentblock = "Boluo_A";
    //清除之前的覆盖物
    map.clearOverlays();
    map.removeOverlay(zoneOverlay);
    var Demo_Block_Boluo_A_centerP = new BMap.Point(114.207521,23.129985);
    map.centerAndZoom(Demo_Block_Boluo_A_centerP, 19);  // 中心点坐标 地图级别
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
    add_ZoneOverlay_Demo_Block_Boluo_A_nc();
    add_AreaOverlay_Demo_Block_A();
}

function add_AreaOverlay_Demo_Block_A(){
    var B_AP01= new BMap.Point(114.203604,23.129237);
    var B_AP02= new BMap.Point(114.204646,23.129632);
    var B_AP03= new BMap.Point(114.204368,23.129989);
    var B_AP04= new BMap.Point(114.205545,23.130965);
    var B_AP05= new BMap.Point(114.206784,23.131946);
    var B_AP06= new BMap.Point(114.206757,23.132407);
    var B_AP07= new BMap.Point(114.207144,23.132673);
    var B_AP08= new BMap.Point(114.207831,23.132332);
    var B_AP09= new BMap.Point(114.208496,23.132465);
    var B_AP10= new BMap.Point(114.208891,23.132407);
    var B_AP11= new BMap.Point(114.2093,23.132012);
    var B_AP12= new BMap.Point(114.209884,23.131609);
    var B_AP13= new BMap.Point(114.210184,23.131717);
    var B_AP14= new BMap.Point(114.210966,23.130891);
    var B_AP15= new BMap.Point(114.211002,23.130596);
    var B_AP16= new BMap.Point(114.210436,23.130284);
    var B_AP17= new BMap.Point(114.20899,23.130459);
    var B_AP18= new BMap.Point(114.207813,23.129873);
    var B_AP19= new BMap.Point(114.207543,23.128689);
    var B_AP20= new BMap.Point(114.206713,23.12898);
    var B_AP21= new BMap.Point(114.205437,23.12846);
    var B_AP22= new BMap.Point(114.203968,23.127825);

    //Boluo_BlockB
    var B_AB = [B_AP01,B_AP02,B_AP03,B_AP04,B_AP05,B_AP06,B_AP07,B_AP08,B_AP09,B_AP10,B_AP11,
        B_AP12,B_AP13,B_AP14,B_AP15,B_AP16,B_AP17,B_AP18,B_AP19,B_AP20,B_AP21,B_AP22];
    var AreaOverlay_Demo_Block_Boluo_A = new BMap.Polygon(B_AB, AreapolygonOptions);
    map.addOverlay(AreaOverlay_Demo_Block_Boluo_A);
}
function focus_Demo_Block_Boluo_A_01(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB01C = new BMap.Point(114.204408,23.128789);
    map.centerAndZoom(B_AB01C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_02(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB02C = new BMap.Point(114.205338,23.129786);
    map.centerAndZoom(B_AB02C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_03(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB03C = new BMap.Point(114.206012,23.128955);
    map.centerAndZoom(B_AB03C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_04(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB04C = new BMap.Point(114.206344,23.130384);
    map.centerAndZoom(B_AB04C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_05(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB05C = new BMap.Point(114.207319,23.131506);
    map.centerAndZoom(B_AB05C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_06(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB06C = new BMap.Point(114.207305,23.129678);
    map.centerAndZoom(B_AB06C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_07(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB07C = new BMap.Point(114.208186,23.131206);
    map.centerAndZoom(B_AB07C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_08(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB08C = new BMap.Point(114.208608,23.132029);
    map.centerAndZoom(B_AB08C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_09(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB09C = new BMap.Point(114.209228,23.13153);
    map.centerAndZoom(B_AB09C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_A_10(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_AB10C = new BMap.Point(114.209461,23.130724);
    map.centerAndZoom(B_AB10C, 19);  // 中心点坐标 地图级别
}

function focus_Demo_Block_Boluo_B(){

    currentblock = "Boluo_B";
    //清除之前的覆盖物
    map.clearOverlays();
    map.removeOverlay(zoneOverlay);
    //
    var Demo_Block_Boluo_B_centerP = new BMap.Point(114.205496,23.125436);
    map.centerAndZoom(Demo_Block_Boluo_B_centerP, 19);  // 中心点坐标 地图级别
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
    add_ZoneOverlay_Demo_Block_Boluo_B_nc();
    add_AreaOverlay_Demo_Block_Boluo_B();
}
function add_AreaOverlay_Demo_Block_Boluo_B(){
    //Boluo_BlockPoint01 ...
    var B_BP01 = new BMap.Point(114.204328, 23.126051);
    var B_BP02 = new BMap.Point(114.205797, 23.126811);
    var B_BP03 = new BMap.Point(114.206156, 23.126828);
    var B_BP04 = new BMap.Point(114.206336, 23.126067);
    var B_BP05 = new BMap.Point(114.206641, 23.124908);
    var B_BP06 = new BMap.Point(114.206165, 23.124721);
    var B_BP07 = new BMap.Point(114.205694, 23.125714);
    var B_BP08 = new BMap.Point(114.20528, 23.125714);
    var B_BP09 = new BMap.Point(114.205213, 23.125532);
    var B_BP10 = new BMap.Point(114.205159, 23.124975);
    var B_BP11 = new BMap.Point(114.204355, 23.124688);
    var B_BP12 = new BMap.Point(114.204449, 23.125473);
    //Boluo_BlockB
    var B_BB = [B_BP01,B_BP02,B_BP03,B_BP04,B_BP05,B_BP06,B_BP07,B_BP08,B_BP09,B_BP10,B_BP11,B_BP12];
    var AreaOverlay_Demo_Block_Boluo_B = new BMap.Polygon(B_BB, AreapolygonOptions);
    map.addOverlay(AreaOverlay_Demo_Block_Boluo_B);
}
function focus_Demo_Block_Boluo_B_01(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_BB01C = new BMap.Point(114.205348,23.12603);
    map.centerAndZoom(B_BB01C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_B_02(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_BB02C = new BMap.Point(114.204818,23.125141);
    map.centerAndZoom(B_BB02C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_B_03(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_BB03C = new BMap.Point(114.206174,23.125316);
    map.centerAndZoom(B_BB03C, 19);  // 中心点坐标 地图级别
}

function focus_Demo_Block_Boluo_C(){

    currentblock = "Boluo_C";
    //清除之前的覆盖物
    map.clearOverlays();
    map.removeOverlay(zoneOverlay);
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
    add_ZoneOverlay_Demo_Block_Boluo_C_nc();
    add_AreaOverlay_Demo_Block_Boluo_C();
}
function add_AreaOverlay_Demo_Block_Boluo_C(){
    //Boluo_BlockPoints ...
    var B_CP02 = new BMap.Point(114.208551, 23.128493);
    var B_CP03 = new BMap.Point(114.208825, 23.128992);
    var B_CP04 = new BMap.Point(114.209332, 23.128738);
    var B_CP05 = new BMap.Point(114.209593, 23.128256);
    var B_CP16 = new BMap.Point(114.210091, 23.128605);
    var B_CP10 = new BMap.Point(114.209292, 23.129764);
    var B_CP11 = new BMap.Point(114.210298, 23.130068);
    var B_CP12 = new BMap.Point(114.210338, 23.129494);
    var B_CP13 = new BMap.Point(114.210765, 23.129008);
    var B_CP14 = new BMap.Point(114.210859, 23.128555);
    var B_CP15 = new BMap.Point(114.210545, 23.128007);
    var B_CP06 = new BMap.Point(114.210181, 23.127583);
    var B_CP07 = new BMap.Point(114.20971, 23.126977);

    //Boluo_BlockC
    var B_CB = [B_CP02,B_CP03,B_CP04,B_CP05,B_CP16,B_CP10,B_CP11,B_CP12,B_CP13,B_CP14,B_CP15,B_CP06,B_CP07];
    var AreaOverlay_Demo_Block_Boluo_C = new BMap.Polygon(B_CB, AreapolygonOptions);
    map.addOverlay(AreaOverlay_Demo_Block_Boluo_C);
}
function focus_Demo_Block_Boluo_C_01(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_CB01C = new BMap.Point(114.209395,23.128007);
    map.centerAndZoom(B_CB01C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_C_02(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_CB02C = new BMap.Point(114.210163,23.128115);
    map.centerAndZoom(B_CB02C, 19);  // 中心点坐标 地图级别
}
function focus_Demo_Block_Boluo_C_03(){
    //Boluo_BlockB01Center
    refreshzone();
    var B_CB03C = new BMap.Point(114.210199,23.129154);
    map.centerAndZoom(B_CB03C, 19);  // 中心点坐标 地图级别
}

function focus_Demo_Block_Zhuo_A(){

    currentblock = "Zhuo_A";
    //清除之前的覆盖物
    map.clearOverlays();
    map.clearOverlays();
    //
    var Demo_Block_Boluo_D_centerP = new BMap.Point(115.992803,39.490072);
    map.centerAndZoom(Demo_Block_Boluo_D_centerP, 19);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =true;
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

    currentblock = "Zhuo_B";
    //清除之前的覆盖物
    map.clearOverlays();
    map.clearOverlays();
    //
    var Demo_Block_Boluo_E_centerP = new BMap.Point(115.992803,39.490072);
    map.centerAndZoom(Demo_Block_Boluo_E_centerP, 19);  // 中心点坐标 地图级别
    //flag
    currentblock_has_nc =true;
    currentblock_has_infrared =true;
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