function cameraGetPicture() {
   navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
   });

   function onSuccess(imageURL) {
       //console.log(imageURL);
      var image = document.getElementById('myImage');
      //image.src = imageURL;
       image.src = "data:image/jpeg;base64," + imageURL;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }

}

document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture);