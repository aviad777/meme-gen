




function showPics() {
    elGallery = document.querySelector('.image-gallery');
    strHTML = '';
    strHTML = getImgs().map((img, idx) => `<img class="meme-image${idx + 1}" src="${img.url}" alt=""></img>`).join('');
    elGallery.innerHTML = strHTML;
}



