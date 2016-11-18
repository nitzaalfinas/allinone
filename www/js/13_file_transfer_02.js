function getImage() {
    navigator.camera.getPicture(uploadPhoto, function(message) {
        alert('get picture failed');
    }, 
    {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}

function uploadPhoto(imageURI) {
    //alert(imageURI);
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    console.log(options.fileName);
    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://httpbin.org/post", function(result){
        alert('success');
        console.log(JSON.stringify(result));
    }, function(error){
        console.log(JSON.stringify(error));
        alert('fail');
    }, options);
}

document.getElementById("uploadBtn").addEventListener("click", getImage);