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

function add_OutlineOverlay_Demo_Block_Boluo_A_01(){
    //Boluo_BlockPoint01 ...
    var B_AP01= new BMap.Point(114.203604,23.129237);
    var B_AP02= new BMap.Point(114.204646,23.129632);
    var B_AP21= new BMap.Point(114.205437,23.12846);
    var B_AP22= new BMap.Point(114.203968,23.127825);
    var B_AB01 = [B_AP01 ,B_AP02 ,B_AP21 , B_AP22   ];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB01, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_02(){
    //Boluo_BlockPoint01 ...
    var B_AP03= new BMap.Point(114.204368,23.129989);
    var B_AP04= new BMap.Point(114.205545,23.130965);
    var B_AP24= new BMap.Point(114.206232,23.129449);
    var B_AP23= new BMap.Point(114.205185,23.128942);
    var B_AB02 = [B_AP03, B_AP04 ,B_AP24 , B_AP23   ];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB02, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_03(){
    //Boluo_BlockPoint01 ...
    var B_AP20= new BMap.Point(114.206713,23.12898);
    var B_AP21= new BMap.Point(114.205437,23.12846);
    var B_AP23= new BMap.Point(114.205185,23.128942);
    var B_AP24= new BMap.Point(114.206232,23.129449);
    var B_AP25= new BMap.Point(114.206775,23.129457);
    var B_AB03 = [B_AP20,B_AP21,B_AP23,B_AP24,B_AP25];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB03, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_04(){
    //Boluo_BlockPoint01 ...
    var B_AP04= new BMap.Point(114.205545,23.130965);
    var B_AP05= new BMap.Point(114.206784,23.131946);
    var B_AP25= new BMap.Point(114.206775,23.129457);
    var B_AP24= new BMap.Point(114.206232,23.129449);
    var B_AB04 = [ B_AP04 ,B_AP05 ,B_AP25,B_AP24 ];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB04, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}

function add_OutlineOverlay_Demo_Block_Boluo_A_05(){
    //Boluo_BlockPoint01 ...
    var B_AP06= new BMap.Point(114.206757,23.132407);
    var B_AP07= new BMap.Point(114.207144,23.132673);
    var B_AP08= new BMap.Point(114.207831,23.132332);
    var B_AP27= new BMap.Point(114.207719,23.130513);
    var B_AP26= new BMap.Point(114.206834,23.130425);
    var B_AB05 = [B_AP06,B_AP07,B_AP08,B_AP27,B_AP26];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB05, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}

function add_OutlineOverlay_Demo_Block_Boluo_A_06(){
    //Boluo_BlockPoint01 ...
    var B_AP18= new BMap.Point(114.207813,23.129873);
    var B_AP19= new BMap.Point(114.207543,23.128689);
    var B_AP20= new BMap.Point(114.206713,23.12898);
    var B_AP25= new BMap.Point(114.206775,23.129457);
    var B_AP26= new BMap.Point(114.206834,23.130425);
    var B_AP27= new BMap.Point(114.207719,23.130513);
    var B_AP28= new BMap.Point(114.208038,23.130488);
    var B_AB06 = [B_AP18,B_AP19,B_AP20,B_AP25,B_AP26,B_AP27,B_AP28];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB06, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_07(){
    //Boluo_BlockPoint01 ...
    var B_AP08= new BMap.Point(114.207831,23.132332);
    var B_AP27= new BMap.Point(114.207719,23.130513);
    var B_AP28= new BMap.Point(114.208038,23.130488);
    var B_AP29= new BMap.Point(114.208383,23.1307);
    var B_AP30= new BMap.Point(114.208473,23.131086);
    var B_AP31= new BMap.Point(114.208734,23.131165);
    var B_AP32= new BMap.Point(114.208815,23.130982);
    var B_AP33= new BMap.Point(114.209039,23.131007);
    var B_AP37= new BMap.Point(114.208734,23.131551);
    var B_AP38= new BMap.Point(114.208388,23.131456);
    var B_AB07 = [B_AP08,B_AP27,B_AP28,B_AP29,B_AP30,B_AP31,B_AP32,B_AP33,B_AP37,B_AP38];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB07, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_08(){
    //Boluo_BlockPoint01 ...
    var B_AP08= new BMap.Point(114.207916,23.132311);
    var B_AP09= new BMap.Point(114.208496,23.132465);
    var B_AP10= new BMap.Point(114.208891,23.132407);
    var B_AP11= new BMap.Point(114.2093,23.132012);
    var B_AP34= new BMap.Point(114.208873,23.131892);
    var B_AP35= new BMap.Point(114.208756,23.132021);
    var B_AP36= new BMap.Point(114.208532,23.131938);
    var B_AP37= new BMap.Point(114.208734,23.131551);
    var B_AP38= new BMap.Point(114.208388,23.131456);
    var B_AB08 = [B_AP08,B_AP09,B_AP10,B_AP11,B_AP34,B_AP35,B_AP36,B_AP37,B_AP38];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB08, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_09(){
    //Boluo_BlockPoint01 ...
    var B_AP34= new BMap.Point(114.208873,23.131892);
    var B_AP35= new BMap.Point(114.208756,23.132021);
    var B_AP36= new BMap.Point(114.208532,23.131938);
    var B_AP37= new BMap.Point(114.208734,23.131551);
    var B_AP33= new BMap.Point(114.209039,23.131007);
    var B_AP33_12= new BMap.Point(114.209286,23.131086);
    var B_AP12= new BMap.Point(114.209884,23.131609);
    var B_AP11= new BMap.Point(114.2093,23.132012);
    var B_AB09 = [B_AP34,B_AP35,B_AP36,B_AP37,B_AP33,B_AP33_12,B_AP12,B_AP11];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB09, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}
function add_OutlineOverlay_Demo_Block_Boluo_A_10(){
    //Boluo_BlockPoint01 ...
    var B_AP12= new BMap.Point(114.209884,23.131609);
    var B_AP13= new BMap.Point(114.210184,23.131717);
    var B_AP14= new BMap.Point(114.210966,23.130891);
    var B_AP15= new BMap.Point(114.211002,23.130596);
    var B_AP16= new BMap.Point(114.210436,23.130284);
    var B_AP17= new BMap.Point(114.20899,23.130459);
    var B_AP18= new BMap.Point(114.207813,23.129873);
    var B_AP28= new BMap.Point(114.208038,23.130488);
    var B_AP29= new BMap.Point(114.208383,23.1307);
    var B_AP30= new BMap.Point(114.208473,23.131086);
    var B_AP31= new BMap.Point(114.208734,23.131165);
    var B_AP32= new BMap.Point(114.208815,23.130982);
    var B_AP33= new BMap.Point(114.209187,23.13104);
    var B_AB10 = [B_AP12,B_AP13,B_AP14,B_AP15,B_AP16,B_AP17,B_AP18,B_AP28,B_AP29,B_AP30,B_AP31,B_AP32,B_AP33];
    //Boluo_BlockB01
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_AB10, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
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
    map.removeOverlay(outlineOverlay)
    outlineOverlay = new BMap.Polygon(B_BB01, OutlinepolygonOptions);
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
    map.removeOverlay(outlineOverlay)
    outlineOverlay = new BMap.Polygon(B_BB02, OutlinepolygonOptions);
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
    map.removeOverlay(outlineOverlay)
    outlineOverlay = new BMap.Polygon(B_BB03, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}


function add_OutlineOverlay_Demo_Block_Boluo_C_01(){
    var B_CP02 = new BMap.Point(114.208551, 23.128493);
    var B_CP03 = new BMap.Point(114.208825, 23.128992);
    var B_CP04 = new BMap.Point(114.209332, 23.128738);
    var B_CP05 = new BMap.Point(114.209593, 23.128256);
    var B_CP08 = new BMap.Point(114.209952, 23.12798);
    var B_CP06 = new BMap.Point(114.210181, 23.127583);
    var B_CP07 = new BMap.Point(114.20971, 23.126977);
    var B_CB01 = [B_CP02,B_CP03,B_CP04,B_CP05,B_CP08,B_CP06,B_CP07];
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_CB01, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}

function add_OutlineOverlay_Demo_Block_Boluo_C_02(){
    var B_CP05 = new BMap.Point(114.209593, 23.128256);
    var B_CP16 = new BMap.Point(114.210091, 23.128605);
    var B_CP15 = new BMap.Point(114.210545, 23.128007);
    var B_CP06 = new BMap.Point(114.210181, 23.127583);
    var B_CP08 = new BMap.Point(114.209952, 23.12798);
    var B_CB02 = [B_CP05,B_CP16,B_CP15,B_CP06,B_CP08];
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_CB02, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}

function add_OutlineOverlay_Demo_Block_Boluo_C_03(){
    var B_CP10 = new BMap.Point(114.209292, 23.129764);
    var B_CP11 = new BMap.Point(114.210298, 23.130068);
    var B_CP12 = new BMap.Point(114.210338, 23.129494);
    var B_CP13 = new BMap.Point(114.210765, 23.129008);
    var B_CP14 = new BMap.Point(114.210859, 23.128555);
    var B_CP15 = new BMap.Point(114.210545, 23.128007);
    var B_CP16 = new BMap.Point(114.210091, 23.128605);
    var B_CB03 = [B_CP10,B_CP11,B_CP12,B_CP13,B_CP14,B_CP15,B_CP16];
    map.removeOverlay(outlineOverlay);
    outlineOverlay = new BMap.Polygon(B_CB03, OutlinepolygonOptions);
    map.addOverlay(outlineOverlay);
}