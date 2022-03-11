function display(event){
    event.preventDefault();
    var image = document.querySelector("#image");
    var uploadedImage = document.querySelector("#uploadedImage");

    var json = document.querySelector("#json");
    var jsonOutput = document.querySelector("#jsonOutput");

    var imageReader = new FileReader();
    imageReader.readAsDataURL(image.files[0])
    imageReader.onload=function(){
        uploadedImage.src = imageReader.result;
        console.log(reader.result);
    }
    
    var reader = new FileReader();
    reader.readAsText(json.files[0]);
    reader.onload=function(){
        jsonOutput.innerHTML = reader.result;
        console.log(reader.result);
    }
}