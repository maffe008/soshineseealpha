/**
 * Created by maffee on 16/11/8.
 */
/*
* OutlineOverlay    <----
* ZoneOverlay
* AreaOverlay
*
* <element> over     =   add_OutlineOverlay_A_01()                <-  Divided Block: A01\A02...\B01\...\etc...
*
*
*
* */
function remove_OutlineOverlay(){
    map.removeOverlay(outlineOverlay)
}

function add_OutlineOverlay_Demo_Block_Boluo_B_01(){


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

    //var OutlineOverlay_Demo_Block_Boluo_B_01 = new BMap.Polygon(B_BB01, polygonOptions);
    //map.addOverlay(OutlineOverlay_Demo_Block_Boluo_B_01);
    map.removeOverlay(outlineOverlay)
    outlineOverlay = new BMap.Polygon(B_BB01, polygonOptions);
    map.addOverlay(outlineOverlay);

}

function add_OutlineOverlay_Demo_Block_Boluo_B_02(){

    //Boluo_BlockPoint01 ...
    var B_BP04 = new BMap.Point(114.206336, 23.126067);
    var B_BP05 = new BMap.Point(114.206641, 23.124908);
    var B_BP06 = new BMap.Point(114.206165, 23.124721);
    var B_BP07 = new BMap.Point(114.205694, 23.125714);
    //Boluo_BlockB02
    var B_BB02 = [B_BP04,B_BP05,B_BP06,B_BP07];

    //var OutlineOverlay_Demo_Block_Boluo_B_02 = new BMap.Polygon(B_BB02, polygonOptions);
    //map.addOverlay(OutlineOverlay_Demo_Block_Boluo_B_02);
    map.removeOverlay(outlineOverlay)
    outlineOverlay = new BMap.Polygon(B_BB02, polygonOptions);
    map.addOverlay(outlineOverlay);

}

function add_OutlineOverlay_Demo_Block_Boluo_B_03(){

    //Boluo_BlockPoint01 ...
    var B_BP09 = new BMap.Point(114.205213, 23.125532);
    var B_BP10 = new BMap.Point(114.205159, 23.124975);
    var B_BP11 = new BMap.Point(114.204355, 23.124688);
    var B_BP12 = new BMap.Point(114.204449, 23.125473);
    //Boluo_BlockB01
    var B_BB03 = [B_BP09,B_BP10,B_BP11,B_BP12];

    //var OutlineOverlay_Demo_Block_Boluo_B_03 = new BMap.Polygon(B_BB03, polygonOptions);
    //map.addOverlay(OutlineOverlay_Demo_Block_Boluo_B_03);
    map.removeOverlay(outlineOverlay)
    outlineOverlay = new BMap.Polygon(B_BB03, polygonOptions);
    map.addOverlay(outlineOverlay);

}