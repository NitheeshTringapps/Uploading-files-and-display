window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    // console.log(params);
    const image = params.get("image");
    const json = params.get("json");
    // console.log(image);
    // console.log(json);

    var uploadedImage = document.querySelector("#uploadedImage");
    var jsonOutput = document.querySelector("#jsonOutput");

    uploadedImage.src = image;
    
    jsonOutput.innerHTML = json;
    // var jsonText = "";
    // var reader = new FileReader();
    // reader.readAsText(json.files[0]);
    // reader.onload=function(){
    //     var jsonArray = JSON.parse(reader.result);
    //     // console.log(JSON.parse(reader.result));
    //     // console.log(jsonArray["name"]);
    //     for (var key in jsonArray){
    //         jsonText = jsonText + key + ": " + jsonArray[key] + "<br>";
    //     }
    //     jsonOutput.innerHTML = jsonText;
    // }
})