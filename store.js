function countVis(name){
  var formattedName = 'visit' + name.toTitleCase() + 'Site';
  if (localStorage.getItem(formattedName)) {
    localStorage.setItem(formattedName, Number(localStorage.getItem(formattedName)) + 1);
  } else {
    localStorage.setItem(formattedName, 1);
  }
}
