$(document).ready(function(){
	$(".contact_list").hide();
	$(".contact_list li:odd").css("background-color", "#fff");
	$("h3 span").click(function(){
		$(this).parent().next().slideToggle();
	});
});