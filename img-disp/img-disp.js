function loadFile(event){
  var loadFile = function(event) {
  var image = document.getElementById('output');
  var fileSrc = URL.createObjectURL(event.target.files[0]);
  localStorage.setItem('imgDispFile', fileSrc)
  image.src = localStorage.getItem
}
