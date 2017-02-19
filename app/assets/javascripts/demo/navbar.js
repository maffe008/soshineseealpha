// File Path : /app/assets/javascripts/demo/navbar.js
// Developed by Ma Xiaohang(maffee)
// Demo Version Page Navigation Bar
// Created by maffee on 16/10/14.

$(function (){
    $('#navbar_demo li').mouseover(function (){
        $('.active').removeClass('active');
        $(this).addClass("active");
    });
})
