$(document).ready(function(){

	clearPlayer = function() {
		$('#exportlink').hide();
		$('#play').hide();
		$("#pause").hide();
		player.stop();
	}

	$("#homelink").click(function() {
		$("#createpage").hide();
		$("#aboutpage").hide();
		$("#homepage").show();
		$("#homepage2").show();
		$(".active").removeClass("active");
		$(this).addClass("active");
		
		clearPlayer();
	});

	$(".startworking").click(function() {
		$("#homepage").hide();
		$("#homepage2").hide();
		$("#aboutpage").hide();
		$("#createpage").show();
		$(".active").removeClass("active");
		$("#createlink").addClass("active");

		clearPlayer();
	});

	$("#aboutlink").click(function(){
		$("#createpage").hide();
		$("#homepage").hide();
		$("#homepage2").hide();
		$("#aboutpage").show();
		$(".active").removeClass("active");
		$(this).addClass("active");

		clearPlayer();
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