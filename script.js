function saveLocalStorage(){
    var image = document.querySelector("#image");
    var json = document.querySelector("#json");

    var imageReader = new FileReader();
    imageReader.readAsDataURL(image.files[0])
    imageReader.onload=function(){
        localStorage.setItem("IMAGE", imageReader.result);
    }
    
    var reader = new FileReader();
    reader.readAsText(json.files[0]);
    reader.onload=function(){
        localStorage.setItem("JSON", reader.result);
    }
}
