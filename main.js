$(document).ready(function(){
	$('#exportlink').hide();

	$("#homelink").click(function() {
		$("#createpage").hide();
		$("#aboutpage").hide();
		$("#songselect").hide();
		$('#exportlink').hide();
		$("#homepage").show();
		$(".active").removeClass("active");
		$(this).addClass("active");
	});

	$(".startworking").click(function() {
		$("#homepage").hide();
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
		camera.fov *= 0.9;
  camera.updateProjectionMatrix();
		
	});

	$("#zoom-out").click(function() {
		camera.fov *= 1.1;
  camera.updateProjectionMatrix();
		
	});
});