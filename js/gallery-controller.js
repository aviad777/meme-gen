




function showPics() {
    elGallery = document.querySelector('.image-gallery');
    strHTML = '';
    strHTML = getImgs().map((img, idx) => `<img src="${img.url}" alt=""></img>`);
    elGallery.innerHTML = strHTML;
}