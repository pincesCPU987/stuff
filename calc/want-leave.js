window.onbeforeunload = function() {
var txtForm = document.getElementById("txtForm");
var txtA = document.getElementById("txtA");
if(txtForm.value != "math_notes.txt" || txtA.value != "Put text here."){
var Ans = confirm("Are you sure you want change page!");
if(Ans==true){
return true;
} else {
return false;
}
}
}
