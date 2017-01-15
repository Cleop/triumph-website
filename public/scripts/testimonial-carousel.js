//   <div class="w3-center w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
//     <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
//     <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
//     <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
// </div>

let slideIndex = 1;
showDivs(slideIndex);

function showDivs(index) {
  let i;
  const testimonials = document.getElementsByClassName("testimonial");
  const dots = document.getElementsByClassName("fa-circle");
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
