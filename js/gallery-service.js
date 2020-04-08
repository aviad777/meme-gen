

var gImgs = [{ id: 1, url: '/meme-imgs-square/1.jpg', keywords: ['happy'] }, { id: 2, url: '/meme-imgs-square/2.jpg', keywords: ['love'] }];
var gCurrMeme;


function getImgByID(id) {
    return gImgs.find(img => img.id === id);
}


function getImgs() {
    return gImgs;
}


