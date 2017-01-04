let myIndex = 0;
carousel();

function carousel() {
  let i;
  var image = document.getElementsByClassName("gallery__img");
// Set all images to not display
  for (i = 0; i < img.length; i++) {
    image[i].style.display = "none";
  }
// Move up through the index of images by 1 each time the function is called
  myIndex++;
// If the index reaches the number of total images, reset it back to the first count again
  if (myIndex > img.length) {
    myIndex = 1
  }
// Style the image which the index is on to display as block (ie. as visible)
  image[myIndex-1].style.display = "block";
// Change image every 3 seconds
  setTimeout(carousel, 3000);
}
