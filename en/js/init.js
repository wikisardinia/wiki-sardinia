(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
	$(".dropdown-trigger").dropdown();
	$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

  }); // end of document ready
})(jQuery); // end of jQuery name space
