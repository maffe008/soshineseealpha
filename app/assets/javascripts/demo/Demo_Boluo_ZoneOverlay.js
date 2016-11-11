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


function add_ZoneOverlay_Demo_Block_Boluo_A_nc(){
    alert(currentblock)
}
function add_ZoneOverlay_Demo_Block_Boluo_A_ndvi(){

}


function add_ZoneOverlay_Demo_Block_Boluo_B_nc(){
    //alert(currentblock);
    //function add_Zone() {
    var B_BPWN = new BMap.Point(114.20431, 23.1268);
    var B_BPES = new BMap.Point(114.206688, 23.1247);
    var imageurl_BBBnc = "/assets/demo/Boluo/Demo_Boluo_Block_2_web_nc.png";
    zoneOverlay = new ZoneOverlay(B_BPWN, B_BPES, imageurl_BBBnc);
    map.addOverlay(zoneOverlay);
    //}
    //add_Zone()
}
function add_ZoneOverlay_Demo_Block_Boluo_B_ndvi(){
    var B_BPWN = new BMap.Point(114.20431, 23.1268);
    var B_BPES = new BMap.Point(114.206688, 23.1247);
    var imageurl_BBBndvi = "/assets/demo/Boluo/Demo_Boluo_Block_2_web_ndvi.png";
    zoneOverlay = new ZoneOverlay(B_BPWN, B_BPES, imageurl_BBBndvi);
    map.addOverlay(zoneOverlay);
}


function add_ZoneOverlay_Demo_Block_Boluo_C_nc(){
    alert(currentblock)
}
function add_ZoneOverlay_Demo_Block_Boluo_C_ndvi(){

}



