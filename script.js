//alert("web_foundations-final!");

let myName = document.getElementById("name");
let myTitle = document.getElementById("title");
console.log(myName);
function sizeUp() {
    this.style.transform = "scale(1.25)";
}
function sizeDown() {
    this.style.transform = 'scale(1)';
}
myName.addEventListener("mouseenter",sizeUp);
myName.addEventListener("mouseleave",sizeDown);
myTitle.addEventListener("mouseenter",sizeUp);
myTitle.addEventListener("mouseleave",sizeDown);

let tech = document.getElementById("tech");
let soft = document.getElementById("soft");
let hobby = document.getElementById("hobb");
console.log(tech);
function invertColor() {
    this.style.backgroundColor="rgba(105,109,125, 0.8)";
    this.style.color = "white";
    this.style.border="2px double #FAF3DD";
}
function revertColor() {
    this.style.backgroundColor="rgba(250, 243, 221, 0.8)";
    this.style.color = "black";
    this.style.border="2px double #696d7d";
}
tech.addEventListener("mouseenter", invertColor);
tech.addEventListener("mouseleave", revertColor);
soft.addEventListener("mouseenter", invertColor);
soft.addEventListener("mouseleave", revertColor);
hobby.addEventListener("mouseenter", invertColor);
hobby.addEventListener("mouseleave", revertColor);

let logo = document.getElementById("logo");
function logoHover() {
    this.src = "images/logo_blackOnWhite.png";
}
function logoNorm() {
    this.src = "images/logo_whiteOnBlack.png";
}
logo.addEventListener("mouseenter", logoHover);
logo.addEventListener("mouseleave", logoNorm);

//AJAX request for Random Fact filler
let adviceBlock = document.getElementById("advBlock");
function randomAdvice() {
    
    adviceBlock.innerHTML = "";
    $.ajax("https://api.adviceslip.com/advice",{
        success: function (response) {
            console.log(response);
            let advResponse = JSON.parse(response);
            //console.log(advResponse);
            //console.log(advResponse.slip.advice);
            adviceBlock.innerHTML = advResponse.slip.advice;
    }
    });
}

randomAdvice();

adviceBlock.addEventListener("mouseenter",sizeUp);
adviceBlock.addEventListener("mouseleave",sizeDown);