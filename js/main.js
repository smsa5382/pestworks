$(window).scroll(function() {
	$(window).scrollTop() >= 50 ? $(".menu_section").addClass("fixed") : $(".menu_section").removeClass("fixed")
	$(window).scrollTop() >= 200 ? $(".calltoactionmobiledisplay").addClass("show") : $(".calltoactionmobiledisplay").removeClass("show");
});
$(document).ready( function() {
	$('#customers-testimonials').owlCarousel({loop:true,center:true,items:3,margin:10,autoplay:true,dots:false,nav:true,navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],autoWidth:true,autoplayTimeout:8500,smartSpeed:450,responsive:{0:{items:1},768:{items:2},1170:{items:3}}});
	var action = 'click';
	var speed = 500;
    //  question handler
   $('li.q').on(action, function() {
       // get next element
       $(this).next()
           .slideToggle(speed)
                .siblings('li.a').slideUp(speed);
   });
});	