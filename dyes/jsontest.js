mainStuff = document.getElementById("maincontent");

// provide the URL where the JSON is located--must be on a server
// not the local computer
requestURL = 'https://rmwhitnell.github.io/CTIS230Spring2021/dyes/dyes.json';

// construct an object that can make HTTP requests from JavaScript
request = new XMLHttpRequest();
// use that object to send a GET request to the server for the JSON file
request.open('GET', requestURL);

// what kind of content do we want back
request.responseType = 'json';

request.send();

// only do something when we know the content has been delivered (loaded)

request.onload =
function()  {
    // make a variable to hold the info
    myDyes = request.response;
    console.log(myDyes);
    // call a function to add DOM elements based on the JSON content
    makeMain(myDyes);
}

function makeMain(jsonObj) {
    theDyes = jsonObj["dyes"];  // Provide the dyes list

    for (i=0; i < theDyes.length; i++) { // Use each dye in the list, one after the other, and build a new DOM div from it
        dyeDiv = document.createElement('div');
        dyenameH1 = document.createElement('h1');
        dyemanuH2 = document.createElement('h2');
        dyeImage = document.createElement('img');

        dyenameH1.textContent = theDyes[i].name;
        dyemanuH2.textContent = theDyes[i].manufacturer;
        dyeImage.src = theDyes[i].bottleimage;
        dyeImage.alt = theDyes[i].alt;

        dyenameH1.classList.add("chemicalname");

        dyeDiv.appendChild(dyenameH1);
        dyeDiv.appendChild(dyemanuH2);
        dyeDiv.appendChild(dyeImage);

        mainStuff.appendChild(dyeDiv);

    } 
}