"use strict"

$(".button--container").hover(function(){
    $("#title--color").css("color","green");
    $("#play--button").css("color","gray");
},function(){
    $("#title--color").css("color","gray"); 
    $("#play--button").css("color","white");
});

  
    