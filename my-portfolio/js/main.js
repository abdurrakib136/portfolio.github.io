(function ($) {
    "use strict";

	jQuery(document).ready(function($) {

		"use strict";

			//Preloader========================>
			$(window).load(function(){
				$('.preloader-wrapper').fadeOut(500);
			});

			//Typed========================>
			var typed = new Typed('.element', {
			  	strings: ["Hello, I am Abdur Rakib.", "I am from Rajshahi.","I am Front-end Developer.", "I am Creative."],
				typeSpeed: 120,
				showCursor: false,
				loop: true,
			});



		 //Isotope========================>
		  var $grid = $('.isotope_warpper').isotope({
		      itemSelector: '.isotope1',
		      layoutMode: 'fitRows',
		      filter: '*',
		    });
		    $(".portfolio-nav ul li").on("click" , function(){
		        var selector = $(this).attr('data-filter');
		        $grid.isotope({
		            filter: selector
		        });
		        
		    });

		    $(".portfolio-nav ul li").on('click', function() {

		    	$('.portfolio-nav ul li').removeClass('active');
		    	$(this).addClass('active');

		    });

		    //Wow========================>
		    new WOW().init();


			//Menu trigger========================>
		    $(".menu-trigger").on('click', function(event) {
		    	 event.preventDefault();
		    	$(".menu-area, .menu-trigger").toggleClass('active');
		    });

		    $(".menu li").on('click', function(e) {
		    	e.preventDefault();
		    	$(".menu li").removeClass('active');
		    	$(this).addClass('active');
		    });

			//Scroll========================>
			$('a').smoothScroll({
				speed: 1500,
				autoFocus: true,
				preventDefault: true
			});

		    //Owl carousel========================>
			$(".testimonial-area").owlCarousel({
				items: 1,
				autoplay: true,
				loop: true,
				dots: true,
				animateOut: 'fadeOutDown',
	       		 animateIn: 'fadeInRight',
			});
		
		
	  		//Skill-bar========================>
	        $('.chart').waypoint(function() {
	              $(this).easyPieChart({
	                animate: 1500,
	                scaleColor: false,
	                trackColor: '#e5e5e5',
	                barColor: '#4FB55D',
	                lineWidth: 10,
	                size: 100,
	              });
	            }, {
	              triggerOnce: true,
	              offset: 'bottom-in-view'
	        });



	        //Counter========================>
	        $('.counter').counterUp({
			    delay: 10,
			    time: 1500
			});

	        //Scroll top========================>
			$(window).scroll(function() {
			    if ($(this).scrollTop() > 300) {

			        $('#scroll-top').fadeIn();

			    } else {

			        $('#scroll-top').fadeOut();
			    }
			});
			$("#scroll-top").on('click', function(){
				$("html, body").animate({scrollTop: 0}, 1000);
				return false;
			});


	        //Nicescroll========================>
			$("body").niceScroll({
				cursorcolor: "#4FB55D",
				zindex: "100",
				cursorwidth: "6px",
				background: "#ddd",
	            cursorborderradius: '10px',
	            spacebarenabled: false,
	            cursorborder: '0',
	            horizrailenabled: false
			});




	});

}(jQuery));