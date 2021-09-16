var loadImg = function(event) {
	var image = document.getElementById('outputImg');
	image.src = URL.createObjectURL(event.target.files[0]);
}
var loadAud = function(event) {
	var audio = document.getElementById('outputAud');
	audio.src = URL.createObjectURL(event.target.files[0]);
}
