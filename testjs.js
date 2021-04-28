ourText = document.getElementById("text");
ourHeader = document.getElementById("header");
ourButton = document.getElementById("myButton"); /* find the element with the id myButton and store it away*/
ourTextField = document.getElementById("myinput");
myCardDiv = document.getElementById("card");
myCard2Div = document.getElementById("card2");
myCardImage = document.getElementById("cardimage");
addImageButton = document.getElementById("addImage");
/* get the largview div and store it away */
theLargeView = document.getElementById("largeview");

/*myCardDiv.addEventListener("click", expandImage);*/
myCardDiv.addEventListener("click", makeBigImage);
myCard2Div.addEventListener("click", makeBigImage);
addImageButton.addEventListener("click", makeNewImage);
theLargeView.addEventListener("click", hideBigImage), 

ourText.addEventListener("mouseover", onMouseOver);
ourText.addEventListener("mouseout", onMouseOut);
console.log(ourButton);
ourButton.addEventListener("click", onClick);
ourTextField.addEventListener("change", changeText);

function hideBigImage() {
    theLargeView.classList.add("dontshow");
    theLargeView.innerHTML = "";
}

function makeBigImage(event) { /*event contains information about what generated the event*/
    console.log(event);
    bigimage = document.createElement("img");
    bigimage.src = event.target.src;
    theLargeView.appendChild(bigimage);
    theLargeView.classList.remove("dontshow");
}

function makeNewImage() {
    newImg= document.createElement("img");
    newImg.src = "images/GC_emblem_CMYK187.png";
    newImg.style.width = "25%";
    newImgDiv = document.getElementById("newimage");
    newImgDiv.appendChild(newImg);
}

function expandImage() {
    /* manipulate the position of the div and the size of the image */
    if (myCardDiv.style.position == "") {
        myCardDiv.style.position = "fixed";
        myCardDiv.style.top = "10%";
        myCardDiv.style.left = "60%";
        /* make the card image its original size */
        myCardImage.style.width = "auto";
      /*  myCardImage.src = "images/2_of_diamonds.png";*/
    }
    else if (myCardDiv.style.position == "fixed") {
        myCardDiv.style.position = "";
        myCardImage.style.width = "50px";
        myCardImage.src = "images/2_of_clubs.png";
    }
}

function changeText() {
    newtext = ourTextField.value;
    ourHeader.innerHTML = newtext;
}

function onClick() {
    console.log("The button clicked");
    ourHeader.innerHTML = "I clicked the button";
    /* change any attribute to any value I want */
    /* For example, change the id value to larger*/
    ourHeader.setAttribute("id", "larger");
    myCardDiv.style.display = "block";
    myCard2Div.style.display = "block";
}

function onMouseOver() {
    ourText.style.color = "green";
    ourText.style.fontSize = "3em";
    ourHeader.style.fontStyle = "italic";
    ourHeader.innerHTML = "Moved on";
}

function onMouseOut() {
    ourText.style.color = "black";
    ourText.style.fontSize = "1em";
    ourHeader.style.fontStyle = "normal";
    ourHeader.innerHTML = "Moved off";
}