/**
 * Created by maffee on 16/10/26.
 */

$(function(){
    $('.panel-body').mouseenter(function(){
        $(this).css({'background-color':'lightblue'})
    })
    $('.panel-body').mouseleave(function(){
        $(this).css({'background-color':'white'})
    })

});
