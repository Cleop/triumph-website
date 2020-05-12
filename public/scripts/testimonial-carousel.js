var slideIndex = 1;
showDivs(slideIndex);

function showDivs(index) {
  var i;
  var testimonials = document.getElementsByClassName("testimonial");
  var dots = document.getElementsByClassName("testimonial__circle");
  if (index < 1) { slideIndex = testimonials.length }
  // If the current index surpasses the number of testimonials, reset it to the first slide
  if (index > testimonials.length) {slideIndex = 1}
  // Loop through the testimonials and set all of their displays to none
  for (i = 0; i < testimonials.length; i++) {
     testimonials[i].style.display = "none";
  }
  // Loop through all of the dots and set all of them to the empty dot class name, replacing the filled one
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" testimonial__circle--current", "");
  }
  // Set the testimonial of the index we are on -1 to be visible
  testimonials[slideIndex-1].style.display = "block";
  // Set the dot of the index we are on -1 to be red
  dots[slideIndex-1].className += " testimonial__circle--current";
}

function plusDivs(index) {
  showDivs(slideIndex += index);
}

function currentDiv(index) {
  showDivs(slideIndex = index);
}

// mobile swipe adapted from: https://codelabs.developers.google.com/codelabs/polymer-2-carousel/#8

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var touchDir;

var gestureZone = document.getElementsByClassName('footer__testimonial-section')[0];

gestureZone.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchmove', function (event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;

  // Is touchmove mostly horizontal or vertical?
  if (!touchDir) {
    const absX = Math.abs(event.changedTouches[0].clientX - touchstartX);
    const absY = Math.abs(event.changedTouches[0].clientY - touchstartY);
    touchDir = absX > absY ? 'x' : 'y';
  }

  if (touchDir === 'x') {
    // Prevent vertically scrolling when swiping
    event.preventDefault();
  }
}, false);

gestureZone.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;

  if (touchendX < touchstartX) {
    // swiped left
    plusDivs(1)
  }

  if (touchendX > touchstartX) {
    // swiped right
    plusDivs(-1)
  }

  // Reset touch direction
  touchDir = null;
}, false);
