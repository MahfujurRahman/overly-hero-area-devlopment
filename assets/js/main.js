(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".home-page").owlCarousel({
        	items:1,
            autoplay:false,
            loop:true,
            nav:true,
            dots:true,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });
        });



        


    });


    jQuery(window).load(function(){

        
    });

