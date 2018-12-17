$("#toggle > li > div").click(function () {
	    if (false == $(this).next().is(':visible')) {
	        $('#toggle ul').slideUp();
	    }
	 
	    var $currIcon=$(this).find("span.the-btn > i")
	 
	    $("span.the-btn > i").not($currIcon).addClass('fa-plus').removeClass('fa-minus');
	 
	    $currIcon.toggleClass('fa-minus fa-plus');
	 
	    $(this).next().slideToggle();
	 
	    $("#toggle > li > div").removeClass("active");
	    $(this).addClass('active');
	 
	});