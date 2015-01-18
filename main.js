$(document).ready(function(){

	$("#homelink").click(function() {
		$("#createpage").hide();
		$("#aboutpage").hide();
		$("#songselect").hide();
		$("#homepage").show();
		$(".active").removeClass("active");
		$(this).addClass("active");
	});

	$(".startworking").click(function() {
		$("#homepage").hide();
		$("#aboutpage").hide();
		$("#createpage").show();
		$("#songselect").show();
		$(".active").removeClass("active");
		$("#createlink").addClass("active");
	});

	$("#aboutlink").click(function(){
		$("#createpage").hide();
		$("#homepage").hide();
		$("#songselect").hide();
		$("#aboutpage").show();
		$(".active").removeClass("active");
		$(this).addClass("active");
	})
});