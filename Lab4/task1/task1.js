let submit = document.getElementById("submit-button");
let imageWidth = document.getElementById("image-width");
let imageHeight = document.getElementById("image-height");
let borderWidth = document.getElementById("border-width");
let borderColor = document.getElementById("border-color");
let imageAlt = document.getElementById("image-alt");
let mainImage = document.getElementById("main-image");

let options = [imageWidth, imageHeight, borderWidth, borderColor, imageAlt];

function Logger() {
    let flag = false;
    options.forEach(option => {
        !option.value ? (option.style.border = "2px solid red") && (flag = true) : option.style.border = "";
    });
    if (/\D/.test(imageWidth.value)) {
        imageWidth.style.border = "2px solid red";
        flag = true
    } else {
        imageWidth.style.border = "";
    }
    if (/\D/.test(imageHeight.value)) {
        imageHeight.style.border = "2px solid red";
        flag = true
    } else {
        imageHeight.style.border = "";
    }
    if (/\D/.test(borderWidth.value)) {
        borderWidth.style.border = "2px solid red";
        flag = true
    } else {
        borderWidth.style.border = "";
    }
    var latin = /^[0-9a-zA-Z ]+$/;
    if (!imageAlt.value.match(latin)) {
        imageAlt.style.border = "2px solid red";
        flag = true
    } else {
        imageAlt.style.border = "";
    }

    if (!flag) {
        mainImage.style.width = imageWidth.value + 'px';
        mainImage.style.height = imageHeight.value + 'px';
        mainImage.setAttribute('alt', imageAlt.value);
        mainImage.style.borderColor = borderColor.value;
        mainImage.style.borderWidth = borderWidth.value + 'px';
    }
}

submit.addEventListener("click", Logger);