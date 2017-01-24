var myIndex = 0;

function carousel() {
  var i;
  var image = document.getElementsByClassName("gallery__img");
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
}
// Rotate image every 4 seconds
setInterval(carousel, 4000);
