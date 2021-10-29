function doc_keyUp(formName,e) {
// this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
if (e.ctrlKey && e.keyCode === 13) {
// call your function to do the thing
document.getElementById("buttonD").click();
}
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);
