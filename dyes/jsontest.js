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
}