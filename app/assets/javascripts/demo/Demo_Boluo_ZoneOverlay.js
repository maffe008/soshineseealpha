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

}
function add_ZoneOverlay_Demo_Block_Boluo_A_ndvi(){

}


function add_ZoneOverlay_Demo_Block_Boluo_B_nc(){

    var has_Zone = false;

    function add_Zone(){
        has_Zone = true;
        var B_BPWN = new BMap.Point(114.20431, 23.126782);
        var B_BPES = new BMap.Point(114.206632, 23.124643);
        var imageurl_BBBnc = "/assets/demo/Boluo/Demo_Boluo_Block_2_web_nc.png";
        zoneOverlay = new ZoneOverlay(B_BPWN,B_BPES,imageurl_BBBnc);
        //alert(B_BPWN+B_BPES + imageurl_BBBnc);
        map.addOverlay(zoneOverlay);

    }
    add_Zone();
    map.addEventListener("zoomstart",function(){
        if (has_Zone){
            map.removeOverlay(zoneOverlay);
        }
    });

    map.addEventListener("zoomend",function(){
        add_Zone();
    })

}
function add_ZoneOverlay_Demo_Block_Boluo_B_ndvi(){

}


function add_ZoneOverlay_Demo_Block_Boluo_C_nc(){

}
function add_ZoneOverlay_Demo_Block_Boluo_C_ndvi(){

}



