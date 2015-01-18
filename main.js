$(document).ready(function(){
	$('#exportlink').hide();

	$("#homelink").click(function() {
		$("#createpage").hide();
		$("#aboutpage").hide();
		$("#songselect").hide();
		$('#exportlink').hide();
		$("#homepage").show();
		$("#homepage2").show();
		$(".active").removeClass("active");
		$(this).addClass("active");
	});

	$(".startworking").click(function() {
		$("#homepage").hide();
		$("#homepage2").hide();
		$("#aboutpage").hide();
		$("#createpage").show();
		$("#songselect").show();
		$('#exportlink').show();
		$(".active").removeClass("active");
		$("#createlink").addClass("active");
	});

	$("#aboutlink").click(function(){
		$("#createpage").hide();
		$("#homepage").hide();
		$("#homepage2").hide();
		$("#songselect").hide();
		$('#exportlink').hide();
		$("#aboutpage").show();
		$(".active").removeClass("active");
		$(this).addClass("active");
	})

	$("#exportlink").click(function(){
		console.log( stlFromGeometry( cylinderGeo, {download:true} ) )
	});

	$("#zoom-in").click(function() {
		alert("write zoom in - main.js");
	});

	$("#zoom-out").click(function() {
		alert("write zoom out - main.js");
	});
});