
import gallery from './gallery.js';
import thumbnail from './thumbnails.js';

// javascript module for general functions
let input = document.getElementById("submit");
var apiKey = '&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d';
var apiURL = 'https://api.flickr.com/services/rest?';
let data ;
let currentIndex = 0;

window.onload =  function () {
    data = null;
    currentIndex = 0;
    document.getElementById('gallery').style.display = "none";
    document.getElementById('thumbnails').style.display = "none";
}
document.getElementById('close').addEventListener('click', gallery.closeModal);

input.addEventListener("click", function(event) {
    let query = document.getElementById('search').value;
    if(query === 'undefined' || query === null || query === '') {
        alert("Search text field cannot be empty");
    } else {
    event.preventDefault();
    getImageResp(query);
}
});


async function getImageResp(text) {
    document.getElementById('gallery').style.display = "none";
    document.getElementById('thumbnails').style.display = "none";
    const METHOD = 'method=flickr.photos.search';
    const FORMAT = '&format=json&nojsoncallback=1';
    const SORT_RELEVANCE = '&sort=relevance';
	var reqImages = document.getElementById('maxImage').value;
	var perPage = '5';
	if(reqImages != 'undefined' && reqImages != null && reqImages != '') {
		perPage = reqImages;
	}
    const url = `${apiURL}${METHOD}${apiKey}${SORT_RELEVANCE}${FORMAT}&text=${text}&per_page=${perPage}`;
	let response = await fetch(url, {method: 'GET'});
    data = await response.json();
    
    thumbnail.getImages(data.photos.photo);
    return await data;
}




