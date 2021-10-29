function download(filename, text) {
  event.preventDefault();
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + 

encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
}
function calculate(){
  event.preventDefault();
  var calc1val = document.getElementById("calc1");
  var calc2val = document.getElementById("calc2");
  var oper = document.getElementById("operation");
  if(oper.value == ""){
    alert("Please choose an operation.");
  } else if(oper.value == "plus"){
    var answer = calc1val.value + calc2val.value;
    alert(calc1val.value + " + " + calc2val.value + " = " + answer + " (This text can be copied into the text box where indicated.)");
  } else if(oper.value == "minus"){
    var answer = calc1val.value - calc2val.value;
    alert(calc1val.value + " - " + calc2val.value + " = " + answer + " (This text can be copied into the text box where indicated.)");
  } else if(oper.value == "times"){
    var answer = calc1val.value * calc2val.value;
    alert(calc1val.value + " × " + calc2val.value + " = " + answer + " (This text can be copied into the text box where indicated.)");
  } else {
    if(calc2val.value != 0){
      var answer = calc1val.value / calc2val.value;
      alert(calc1val.value + " ÷ " + calc2val.value + " = " + answer + " (This text can be copied into the text box whwere indicated.)");
    } else {
      alert("The second value cannot be zero when dividing.");
    }
  }
}
