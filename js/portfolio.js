var slideIndex = 1;
var slideTimeout;

showSlides(slideIndex);



function plusSlides(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(function() {
    showSlides(slideIndex += 1);
  }, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  // let slides = document.querySelectorAll(".mySlides");
  // let dots = document.querySelectorAll(".dot");

  let slides = document.querySelectorAll(".noa_tm_modalbox.opened .mySlides");
  let dots = document.querySelectorAll(".noa_tm_modalbox.opened .dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" p_active", "");
  }
  console.log("=====>", slides, slideIndex-1, slides[slideIndex-1])
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " p_active";
  // 自動輪播，每3秒切換一張圖片
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(function() {
    showSlides(slideIndex += 1);
  }, 3000);
}
