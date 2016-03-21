//display a picture and play a sound
function playMedia() {
    var sound = document.getElementById("mySound");
    sound.play();
    var image = document.getElementById("myImage");
    image.style.visibility = "visible";
}