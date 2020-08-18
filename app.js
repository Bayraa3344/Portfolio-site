var images = ["img/banner-2.gif", "img/banner-6.gif", "img/banner-4.gif"];

setInterval(myFunction, 3000);
var currentImg = 0;
function myFunction() {
  if (images[currentImg]) {
    document.getElementById("section-image").src = images[currentImg];
    currentImg++;
  } else {
    currentImg = 0;
  }
}
