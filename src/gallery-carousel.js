let myIndex = 0;
carousel();

function carousel() {
    let i;
    var img = document.getElementsByClassName("gallery__img");
    for (i = 0; i < img.length; i++) {
       img[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > img.length) {myIndex = 1}
    img[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}
