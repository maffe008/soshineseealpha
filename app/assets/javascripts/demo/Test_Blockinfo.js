// File Path : /app/assets/javascripts/demo/Test_Blockinfo.js
// Developed by Ma Xiaohang(maffee)
// Test Version Blockinfo
// Created by maffee on 16/10/14.


$(function(){
    $('#block_test_A_1').mouseover(function(){
        $('#blockname').text($('#block_test_A_1').text());
        $('#corpinfo').text("实验室学生");
        $('#timeinfo').text("2016/09/15");
        $('#locinfo').text("116.356951,39.986874")
    });

    $('#block_test_A_2').mouseover(function(){
        $('#blockname').text($('#block_test_A_2').text());
        $('#corpinfo').text("上课学生");
        $('#timeinfo').text("2016/09/20");
        $('#locinfo').text("116.356102,39.990951")
    });
    $('#block_test_A_3').mouseover(function(){
        $('#blockname').text($('#block_test_A_3').text());
        $('#corpinfo').text("运动学生");
        $('#timeinfo').text("2016/09/10");
        $('#locinfo').text("116.354674,39.986639")
    });
    $('#block_test_A_4').mouseover(function(){
        $('#blockname').text($('#block_test_A_4').text());
        $('#corpinfo').text("减肥学生");
        $('#timeinfo').text("2016/09/02");
        $('#locinfo').text("116.351642,39.986853")
    });
    $('#block_test_A_5').mouseover(function(){
        $('#blockname').text($('#block_test_A_5').text());
        $('#corpinfo').text("休息学生");
        $('#timeinfo').text("2016/09/30");
        $('#locinfo').text("116.350802,39.991808")
    });
    $('#block_test_A_6').mouseover(function(){
        $('#blockname').text($('#block_test_A_6').text());
        $('#corpinfo').text("回寝学生");
        $('#timeinfo').text("2016/09/01");
        $('#locinfo').text("116.348197,39.984")
    });

    $('#block_test_B_2').mouseover(function(){
        $('#blockname').text($('#block_test_B_2').text());
        $('#corpinfo').text("首欣科技");
        $('#timeinfo').text("2016/10/02");
        $('#locinfo').text("116.358303,39.991833")
    });
    $('#block_test_B_3').mouseover(function(){
        $('#blockname').text($('#block_test_B_3').text());
        $('#corpinfo').text("首欣教育");
        $('#timeinfo').text("2016/10/03");
        $('#locinfo').text("116.359327,39.983627")
    });
    $('#block_test_B_4').mouseover(function(){
        $('#blockname').text($('#block_test_B_4').text());
        $('#corpinfo').text("首欣集团");
        $('#timeinfo').text("2016/10/08");
        $('#locinfo').text("116.357144,39.983548")
    });

});
