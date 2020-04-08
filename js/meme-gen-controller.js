
function initMemeGen() {


    var currMeme = getCurrMeme();
    initCanvas();
    setCanvasDimensions(currMeme);

}


function setMeme() {

    var idx = getCurrMeme().selectedImgID;
    var pic = getImgByID(idx).url;
    var elCanvas = document.querySelector('#my-canvas');
    elCanvas.style.backgroundImage = `url(${pic})`;
}

