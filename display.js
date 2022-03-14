window.addEventListener('load', () => {
    const image = localStorage.getItem("IMAGE");
    const json = localStorage.getItem("JSON");

    var uploadedImage = document.querySelector("#uploadedImage");
    var jsonOutput = document.querySelector("#jsonOutput");

    uploadedImage.src = image;

    var jsonText = "";
    var jsonObject = JSON.parse(json);
    for (var key in jsonObject){
        jsonText = jsonText + key + ": " + jsonObject[key] + "<br>";
    }
    jsonOutput.innerHTML = jsonText;

})
