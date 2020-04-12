
//show pics on Gallery
function showPics() {

    elGallery = document.querySelector('.image-gallery');
    strHTML = '';
    strHTML = getImgs().map((img, idx) => `<img class="gallery-image gallery-image${idx + 1}" ontouchstart="onSetMeme(getImgs()[${idx}])" onclick="onSetMeme(getImgs()[${idx}])" src="${img.url}" alt=""></img>`).join('');
    elGallery.innerHTML = strHTML;
}

// creating a new meme on the generator
function onSetMeme(img) {
    toggleModal();
    setNewMeme(img);
    setMeme(img);
}


// toggling between the memeGenerator to the gallery
function toggleModal() {

    document.querySelector('.meme-generator').classList.toggle('hide');
    document.querySelector('.image-gallery-container').classList.toggle('hide');
    if (document.querySelector('.back-to-gallery').innerText === 'GALLERY') {
        document.querySelector('.back-to-gallery').innerText = 'GENERATOR'
    } else (document.querySelector('.back-to-gallery').innerText = 'GALLERY')

    clearMeme();
}







