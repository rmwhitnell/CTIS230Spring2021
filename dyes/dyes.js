cv = document.getElementById("crystalviolet");
rh = document.getElementById("rhodamine");
info = document.querySelector(".expanded");

//cv.addEventListener("click", onImageClick);

cvjson = '{ "name" : "Crystal Violet", "manufacturer" : "Coleman and Bell",' +
'"bottleimage":"images/Crystal_Violet_Coleman_and_Bell_small.png" , "structure":"images/crystalviolet.pdb"}';

cvinfo = JSON.parse(cvjson);

function onImageClick() {
    infoDiv = document.getElementById("compoundinfo");
    infoPar = document.createElement("p");
    infoPar.innerHTML = `<h2>${cvinfo.name}</h2><h2>${cvinfo.manufacturer}</h2>`;
    infoDiv.style.width = "50%";
    infoDiv.style.position = "absolute";
    infoDiv.style.left = "2%";
    infoDiv.style.top = "50px";

    infoDiv.appendChild(infoPar);



    imageDiv = document.getElementById("compoundimage");
    image = document.createElement("img");
    image.src = cvinfo.bottleimage;

    
    image.style.width = "100%";
    
    imageDiv.appendChild(image);
    imageDiv.style.width = "40%";
    imageDiv.style.left = "55%";

    info.style.display = "block";
    info.style.visibility = "visible";
}