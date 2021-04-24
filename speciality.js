function displayContent(n) {
  let className = "specialityDisplay";
  var x = document.getElementsByClassName(className+n)[0];
  if(n==1){
  var y = document.getElementsByClassName(className+2)[0];
  var z = document.getElementsByClassName(className+3)[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  y.style.display = "none";
  z.style.display = "none";
}else if(n==2){
  var y = document.getElementsByClassName(className+1)[0];
  var z = document.getElementsByClassName(className+3)[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  y.style.display = "none";
  z.style.display = "none";
}else{
  var y = document.getElementsByClassName(className+2)[0];
  var z = document.getElementsByClassName(className+1)[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  y.style.display = "none";
  z.style.display = "none";
}
}
