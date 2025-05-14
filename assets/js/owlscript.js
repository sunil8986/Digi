$(document).ready(function() {
  var owl = $('.teamrow .owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1300: {
        items: 5
      }
    }
  });
  var owl = $('.superstrsec .owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });
});


$(function() {
	  $('a.scroll[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	
	      var target = $(this.hash);
	     
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	      	alert("3");
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	





