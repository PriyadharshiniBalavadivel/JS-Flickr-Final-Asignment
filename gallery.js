  // javascript module for gallery (lightbox) functions 
 function showPhoto(index, photos) {
    document.getElementById('gallery').style.display = "block";
    var container = document.getElementsByClassName('gallery__image')[0];
    if (index >= 0 && index < photos.length) {
       var photo = photos[index];
       container.src = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
       '/' + photo.id + '_' + photo.secret + '_b.jpg';
    }

 }
 
 function closeModal() {
   cument.getElementById('gallery').style.display = "none";
  }
  
  export default {showPhoto, closeModal};