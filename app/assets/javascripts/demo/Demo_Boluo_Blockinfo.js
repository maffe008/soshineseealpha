// File Path : /app/assets/javascripts/demo/Demo_Boluo_Blockinfo.js
// Developed by Ma Xiaohang(maffee)
// Demo Version Blockinfo display Function
// Created by maffee on 16/11/8.
/*
*
* <element> click   =   blockinfo
*
* */

function show_hd(hdimageurl,Bid){
    var hdimg = document.getElementById("hdimg");
    hdimg.src = hdimageurl;
    document.getElementById("hdmap").style.display="block";
    document.getElementById("allmap").style.display="none";

    switch (Bid){

        case "A01":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A01";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.129632";
            document.getElementById("hdcordS").innerHTML = "S:23.127825";
            document.getElementById("hdcordW").innerHTML = "W:114.203604";
            document.getElementById("hdcordE").innerHTML = "E:114.205437";
            document.getElementById("hdm2").innerHTML = "面积:22388㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "A02":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A02";
            document.getElementById("hdmapinfo-status").className = "alert alert-warning";
            document.getElementById("hdmapinfo-status").innerHTML = "异常";
            document.getElementById("hdcordN").innerHTML = "N:23.130986";
            document.getElementById("hdcordS").innerHTML = "S:23.128963";
            document.getElementById("hdcordW").innerHTML = "W:114.204368";
            document.getElementById("hdcordE").innerHTML = "E:114.206205";
            document.getElementById("hdm2").innerHTML = "面积:22490㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:地块北侧,路南房东鱼塘水质异常";
            break;
        case "A03":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A03";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.129466";
            document.getElementById("hdcordS").innerHTML = "S:23.128465";
            document.getElementById("hdcordW").innerHTML = "W:114.205181";
            document.getElementById("hdcordE").innerHTML = "E:114.206744";
            document.getElementById("hdm2").innerHTML = "面积:9672㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "A04":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A04";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.131942";
            document.getElementById("hdcordS").innerHTML = "S:23.129457";
            document.getElementById("hdcordW").innerHTML = "W:114.205688";
            document.getElementById("hdcordE").innerHTML = "E:114.206704";
            document.getElementById("hdm2").innerHTML = "面积:22272㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "A05":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A05";
            document.getElementById("hdmapinfo-status").className = "alert alert-danger";
            document.getElementById("hdmapinfo-status").innerHTML = "警告";
            document.getElementById("hdcordN").innerHTML = "N:23.132678";
            document.getElementById("hdcordS").innerHTML = "S:23.130434";
            document.getElementById("hdcordW").innerHTML = "W:114.206838";
            document.getElementById("hdcordE").innerHTML = "E:114.207903";
            document.getElementById("hdm2").innerHTML = "面积:22150㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:鱼塘干枯";
            break;
        case "A06":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A06";
            document.getElementById("hdmapinfo-status").className = "alert alert-danger";
            document.getElementById("hdmapinfo-status").innerHTML = "警告";
            document.getElementById("hdcordN").innerHTML = "N:23.130484";
            document.getElementById("hdcordS").innerHTML = "S:23.12871";
            document.getElementById("hdcordW").innerHTML = "W:114.206802";
            document.getElementById("hdcordE").innerHTML = "E:114.208064";
            document.getElementById("hdm2").innerHTML = "面积:17347㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:南侧鱼塘干枯";
            break;
        case "A07":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A07";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.132257";
            document.getElementById("hdcordS").innerHTML = "S:23.130517";
            document.getElementById("hdcordW").innerHTML = "W:114.207768";
            document.getElementById("hdcordE").innerHTML = "E:114.209035";
            document.getElementById("hdm2").innerHTML = "面积:13460㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:油菜";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "A08":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A08";
            document.getElementById("hdmapinfo-status").className = "alert alert-danger";
            document.getElementById("hdmapinfo-status").innerHTML = "警告";
            document.getElementById("hdcordN").innerHTML = "N:23.132440";
            document.getElementById("hdcordS").innerHTML = "S:23.131447";
            document.getElementById("hdcordW").innerHTML = "W:114.207997";
            document.getElementById("hdcordE").innerHTML = "E:114.209277";
            document.getElementById("hdm2").innerHTML = "面积:7972㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:油菜";
            document.getElementById("hdinfo").innerHTML = "信息:整地块土质干硬";
            //doc
            break;
        case "A09":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A09";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.132033";
            document.getElementById("hdcordS").innerHTML = "S:23.131049";
            document.getElementById("hdcordW").innerHTML = "W:114.203604";
            document.getElementById("hdcordE").innerHTML = "E:114.205437";
            document.getElementById("hdm2").innerHTML = "面积:7111㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:植物";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "A10":
            document.getElementById("hdtitle").innerHTML = "博罗县地块A10";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.131655";
            document.getElementById("hdcordS").innerHTML = "S:23.129968";
            document.getElementById("hdcordW").innerHTML = "W:114.207889";
            document.getElementById("hdcordE").innerHTML = "E:114.210975";
            document.getElementById("hdm2").innerHTML = "面积:25123㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:鱼塘";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;

        case "B01":
            document.getElementById("hdtitle").innerHTML = "博罗县地块B01";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.126819";
            document.getElementById("hdcordS").innerHTML = "S:23.125502";
            document.getElementById("hdcordW").innerHTML = "W:114.204310";
            document.getElementById("hdcordE").innerHTML = "E:114.206331";
            document.getElementById("hdm2").innerHTML = "面积:18120㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:谷物";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "B02":
            document.getElementById("hdtitle").innerHTML = "博罗县地块B02";
            document.getElementById("hdmapinfo-status").className = "alert alert-warning";
            document.getElementById("hdmapinfo-status").innerHTML = "异常";
            document.getElementById("hdcordN").innerHTML = "N:23.125540";
            document.getElementById("hdcordS").innerHTML = "S:23.124755";
            document.getElementById("hdcordW").innerHTML = "W:114.204310";
            document.getElementById("hdcordE").innerHTML = "E:114.205209";
            document.getElementById("hdm2").innerHTML = "面积:6284㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:谷物";
            document.getElementById("hdinfo").innerHTML = "信息:农田异常信息";
            break;
        case "B03":
            document.getElementById("hdtitle").innerHTML = "博罗县地块B03";
            document.getElementById("hdmapinfo-status").className = "alert alert-danger";
            document.getElementById("hdmapinfo-status").innerHTML = "警告";
            document.getElementById("hdcordN").innerHTML = "N:23.126013";
            document.getElementById("hdcordS").innerHTML = "S:23.124755";
            document.getElementById("hdcordW").innerHTML = "W:114.205743";
            document.getElementById("hdcordE").innerHTML = "E:114.206637";
            document.getElementById("hdm2").innerHTML = "面积:7743㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:谷物";
            document.getElementById("hdinfo").innerHTML = "信息:北侧农田警告信息";
            break;

        case "C01":
            document.getElementById("hdtitle").innerHTML = "博罗县地块C01";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.130059";
            document.getElementById("hdcordS").innerHTML = "S:23.127978";
            document.getElementById("hdcordW").innerHTML = "W:114.210532";
            document.getElementById("hdcordE").innerHTML = "E:114.210873";
            document.getElementById("hdm2").innerHTML = "面积:16193㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:谷物";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "C02":
            document.getElementById("hdtitle").innerHTML = "博罗县地块C02";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.128593";
            document.getElementById("hdcordS").innerHTML = "S:23.127625";
            document.getElementById("hdcordW").innerHTML = "W:114.209611";
            document.getElementById("hdcordE").innerHTML = "E:114.210572";
            document.getElementById("hdm2").innerHTML = "面积:4757㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:谷物";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        case "C03":
            document.getElementById("hdtitle").innerHTML = "博罗县地块C03";
            document.getElementById("hdmapinfo-status").className = "alert alert-info";
            document.getElementById("hdmapinfo-status").innerHTML = "正常";
            document.getElementById("hdcordN").innerHTML = "N:23.126819";
            document.getElementById("hdcordS").innerHTML = "S:23.125502";
            document.getElementById("hdcordW").innerHTML = "W:114.204310";
            document.getElementById("hdcordE").innerHTML = "E:114.206331";
            document.getElementById("hdm2").innerHTML = "面积:15831㎡";
            document.getElementById("hddate").innerHTML = "日期:2016/03/15";
            document.getElementById("hdproduct").innerHTML = "作物:谷物";
            document.getElementById("hdinfo").innerHTML = "信息:无";
            break;
        default:

    }

}