
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "image/card_after_training(2).png") {
        myImage.setAttribute("src", "image/card_after_training(7).png");
    } else {
        myImage.setAttribute("src", "image/card_after_training(2).png");
    }
};
