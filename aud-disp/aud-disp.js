var loadFile = function(event) {
	var image = document.getElementById('outputImg');
	image.src = URL.createObjectURL(event.target.files[0]);
}
