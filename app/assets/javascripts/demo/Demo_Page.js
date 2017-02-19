// File Path : /app/assets/javascripts/demo/Demo_Page.js
// Developed by Ma Xiaohang(maffee)
// Demo Version Page General display Function
// Created by maffee on 16/11/8.

$(function(){
    $('.panel-body').mouseenter(function(){
        $(this).css({'background-color':'lightblue'})
    })
    $('.panel-body').mouseleave(function(){
        $(this).css({'background-color':'white'})
    })

});
