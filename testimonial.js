var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex2-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}