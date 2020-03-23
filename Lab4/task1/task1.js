let submit = document.getElementById("submit-button");
let imageWidth = document.getElementById("image-width");
let imageHeight = document.getElementById("image-height");
let borderWidth = document.getElementById("border-width");
let borderColor = document.getElementById("border-color");
let imageAlt = document.getElementById("image-alt");
let mainImage = document.getElementById("main-image");

function Logger() {
    console.log(imageWidth.value);
    console.log(imageHeight.value);
    console.log(borderWidth.value);
    console.log(borderColor.value);
    console.log(imageAlt.value);
    console.log(mainImage);
    mainImage.style.width = imageWidth.value + 'px';
    mainImage.style.height = imageHeight.value + 'px';

}

submit.addEventListener("click", Logger);