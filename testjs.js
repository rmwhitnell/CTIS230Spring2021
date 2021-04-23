ourText = document.getElementById("text");
ourHeader = document.getElementById("header");
ourButton = document.getElementById("myButton");
ourTextField = document.getElementById("myinput");
myCardDiv = document.getElementById("card");
myCardImage = document.getElementById("cardimage");

myCardDiv.addEventListener("click", expandImage);

ourText.addEventListener("mouseover", onMouseOver);
ourText.addEventListener("mouseout", onMouseOut);
ourButton.addEventListener("click", onClick);
ourTextField.addEventListener("change", changeText);

function expandImage() {
    /* manipulate the position of the div and the size of the image */
    if (myCardDiv.style.position == "") {
        myCardDiv.style.position = "absolute";
        myCardDiv.style.top = "100px";
        myCardDiv.style.left = "100px";
        /* make the card image its original size */
        myCardImage.style.width = "auto";
        myCardImage.src = "images/2_of_diamonds.png";
    }
    else if (myCardDiv.style.position == "absolute") {
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