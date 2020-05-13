var myIndex = 0;
var image = document.getElementsByClassName("gallery__img");

function carousel() {
  var i;
  // Set all images to not display
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  // Move up through the index of images by 1 each time the function is called
  myIndex++;
  // If the index reaches the number of total images, reset it back to the first count
  if (myIndex > image.length) {
    myIndex = 1
  }
  // Style the image which the index is on to display as block (ie. as visible)
  image[myIndex-1].style.display = "block";
  // lazy-load next image for smooth transitions
  if (myIndex < image.length) {
    lazyLoad(image[myIndex]);
  }
}

// lazy-load the image by setting src attribute
function lazyLoad(img) {
  if (!img.src) {
    img.src = img.getAttribute('data-src');
  }
}

// load first image immediately to prevent reflow
lazyLoad(image[0])
carousel()
// Rotate image every 4 seconds
setInterval(carousel, 4000);
