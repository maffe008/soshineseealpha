/**
 * Created by maffee on 16/11/8.
 */
/*
* OutlineOverlay
* ZoneOverlay       <-----
* AreaOverlay
*
*   <btn>   click   =   add_ZoneOverlay_A_ndvi
*
*
*
*
*/

/*
* B_APWM : Boluo_A_Point_WestNorth
* B_APES : Boluo_A_Point_EastSouth
* imageurl_BABnc : imageurl_Boluo_A_Block_nc
*/
function add_ZoneOverlay_Demo_Block_Boluo_A_nc(){
    var B_APWN = new BMap.Point(114.203582,23.13269);
    var B_APES = new BMap.Point(114.21106,23.12777);
    var imageurl_BABnc = "/assets/demo/Boluo/Demo_Block_Boluo_A_web_nc.png";
    zoneOverlay = new ZoneOverlay(B_APWN, B_APES, imageurl_BABnc,1);
    map.addOverlay(zoneOverlay);
}
function add_ZoneOverlay_Demo_Block_Boluo_A_ndvi(){
    var B_APWN = new BMap.Point(114.203582,23.13269);
    var B_APES = new BMap.Point(114.21106,23.12777);
    var imageurl_BABnc = "/assets/demo/Boluo/Demo_Block_Boluo_A_web_ndvi.png";
    zoneOverlay = new ZoneOverlay(B_APWN, B_APES, imageurl_BABnc,1);
    map.addOverlay(zoneOverlay);
}


function add_ZoneOverlay_Demo_Block_Boluo_B_nc(){
    var B_BPWN = new BMap.Point(114.20433, 23.126861);
    var B_BPES = new BMap.Point(114.206688, 23.1247);
    var imageurl_BBBnc = "/assets/demo/Boluo/Demo_Block_Boluo_B_web_nc.png";
    zoneOverlay = new ZoneOverlay(B_BPWN, B_BPES, imageurl_BBBnc,1);
    map.addOverlay(zoneOverlay)
}
function add_ZoneOverlay_Demo_Block_Boluo_B_ndvi(){
    var B_BPWN = new BMap.Point(114.20433, 23.126861);
    var B_BPES = new BMap.Point(114.206688, 23.1247);
    var imageurl_BBBndvi = "/assets/demo/Boluo/Demo_Block_Boluo_B_web_ndvi.png";
    zoneOverlay = new ZoneOverlay(B_BPWN, B_BPES, imageurl_BBBndvi,1);
    map.addOverlay(zoneOverlay);
}


function add_ZoneOverlay_Demo_Block_Boluo_C_nc(){
    var B_CPWN = new BMap.Point(114.208551,23.130068);
    var B_CPES = new BMap.Point(114.210888,23.127001);
    var imageurl_BCBnc = "/assets/demo/Boluo/Demo_Block_Boluo_C_web_nc.png";
    zoneOverlay = new ZoneOverlay(B_CPWN, B_CPES, imageurl_BCBnc,1);
    map.addOverlay(zoneOverlay);
}
function add_ZoneOverlay_Demo_Block_Boluo_C_ndvi(){
    var B_CPWN = new BMap.Point(114.208551,23.130068);
    var B_CPES = new BMap.Point(114.210888,23.127001);
    var imageurl_BCBnc = "/assets/demo/Boluo/Demo_Block_Boluo_C_web_ndvi.png";
    zoneOverlay = new ZoneOverlay(B_CPWN, B_CPES, imageurl_BCBnc,1);
    map.addOverlay(zoneOverlay);
}



