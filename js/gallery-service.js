
// images
var gImgs =
    [{ id: 1, url: './meme-imgs-square/1.jpg', keywords: ['happy'] },
    { id: 2, url: './meme-imgs-square/2.jpg', keywords: ['love'] },
    { id: 3, url: './meme-imgs-square/3.jpg', keywords: ['happy'] },
    { id: 4, url: './meme-imgs-square/4.jpg', keywords: ['happy'] },
    { id: 5, url: './meme-imgs-square/5.jpg', keywords: ['happy'] },
    { id: 6, url: './meme-imgs-square/6.jpg', keywords: ['happy'] },
    { id: 7, url: './meme-imgs-square/7.jpg', keywords: ['happy'] },
    { id: 8, url: './meme-imgs-square/8.jpg', keywords: ['happy'] },
    { id: 9, url: './meme-imgs-square/9.jpg', keywords: ['happy'] },
    { id: 10, url: './meme-imgs-square/10.jpg', keywords: ['happy'] },
    { id: 11, url: './meme-imgs-square/11.jpg', keywords: ['happy'] },
    { id: 12, url: './meme-imgs-square/12.jpg', keywords: ['happy'] }];




// return an image by ID
function getImgByID(id) {
    return gImgs.find(img => img.id === id);
}

// return the images
function getImgs() {
    return gImgs;
}





