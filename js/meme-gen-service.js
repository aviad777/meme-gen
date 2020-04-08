var gCanvas
var gCtx
var gCurrMeme =
{
    selectedImgID: 1,
    selectedLineIdx: 0,
    lines: [{ txt: 'i love corona', size: 20, align: 'left', color: 'red' }]
};



function initCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
    return gCanvas;
}


function setCanvasDimensions() {
    console.log('width,height', window.innerWidth, window.innerHeight);

    debugger
    gWidth = screen.width;
    var elPic = document.querySelector('.meme-image1');
    var memeOriginalSize = getPicSize(elPic);

    console.log(memeOriginalSize);
    gCanvas.width = memeOriginalSize.width;
    gCanvas.height = memeOriginalSize.height;
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}



function getCurrMeme() {
    return gCurrMeme;
}

function createLine(txt, size, align, color) {
    let line = {
        txt: txt,
        size: size,
        align: align,
        color: color
    }
    return line;
}


function addLine(meme, line) {
    meme.lines.push(line);
}




