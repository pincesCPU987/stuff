var loadImg = function(eventImg) {
	var image = document.getElementById('outputImg');
	image.src = URL.createObjectURL(eventImg.target.files[0]);
}
