/**
 * Created by maffee on 16/10/26.
 */
$(function(){
    $('#boluo_block_A_1').mouseover(function(){
        $('#blockname').text($('#boluo_block_A_1').text());
        $('#corpinfo').text("博罗县1-1地块");
        $('#timeinfo').text("2016/01/11");
        $('#locinfo').text("114.203505,23.133893")
    });

    $('#boluo_block_B1_1').mouseover(function(){
        $('#blockname').text($('#boluo_block_B1_1').text());
        $('#corpinfo').text("上课学生");
        $('#timeinfo').text("2016/09/20");
        $('#locinfo').text("116.356102,39.990951")
    });

    $('#boluo_block_B2_1').mouseover(function(){
        $('#blockname').text($('#boluo_block_B2_1').text());
        $('#corpinfo').text("运动学生");
        $('#timeinfo').text("2016/09/10");
        $('#locinfo').text("116.354674,39.986639")
    });


});
