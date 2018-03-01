
	var timer = setInterval(refresh, 4000);

	var motto = [
	"Ola k ase", 
	"Gran alumno",
	"Me gusta el futbol",
	"Amunt Valencia",
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
