// function display(event){
//     // event.preventDefault();
//     var image = document.querySelector("#image");
//     var uploadedImage = document.querySelector("#uploadedImage");

//     var json = document.querySelector("#json");
//     var jsonOutput = document.querySelector("#jsonOutput");

//     var imageReader = new FileReader();
//     imageReader.readAsDataURL(image.files[0])
//     imageReader.onload=function(){
//         uploadedImage.src = imageReader.result;
//         // console.log(reader.result);
//     }
    
//     var jsonText = "";
//     var reader = new FileReader();
//     reader.readAsText(json.files[0]);
//     reader.onload=function(){
//         var jsonArray = JSON.parse(reader.result);
//         // console.log(JSON.parse(reader.result));
//         // console.log(jsonArray["name"]);
//         for (var key in jsonArray){
//             jsonText = jsonText + key + ": " + jsonArray[key] + "<br>";
//         }
//         jsonOutput.innerHTML = jsonText;
//     }
// }
