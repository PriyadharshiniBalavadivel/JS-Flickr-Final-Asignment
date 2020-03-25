import gallery from './gallery.js';
// javascript module for image thumbnails functions 

//image thumbnails
function getImages(photos) {
    function clickHandler(index, photos) {
        return function (event) {
           event.preventDefault();

           gallery.showPhoto(index, photos);
        };
     }
     var container = document.getElementsByClassName('thumbnails__list')[0];
    container.textContent = '';
    var image, link, listItem;
    for (var i = 0; i < photos.length; i++) {
       image = document.createElement('img');
       image.src = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server +
       '/' + photos[i].id + '_' + photos[i].secret + '_q.jpg';
       image.className = 'thumbnail';
       image.alt = photos[i].title;
       image.title = photos[i].title;

       link = document.createElement('a');
       link.href = image.src;
       link.addEventListener('click', clickHandler(i, photos));
       link.appendChild(image);

       listItem = document.createElement('li');
       listItem.appendChild(link);

       container.appendChild(listItem);
    }
    document.getElementById('thumbnails').style.display = "block";
  
 }

 export default {getImages};