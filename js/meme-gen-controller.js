
const shareButton = document.querySelector('.share-button');
const shareModal = document.querySelector('.share-modal');
const title = window.document.title;
const url = window.document.location.href;

var gCanvas  // canvas the meme generator
var gCtx    // context 
var gWidth
var gDragLine = false;   // is a line being drag
var gDragSticker = false;  // is a sticker being drag






function onShareButton() {
    if (navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url}`
        })
    }
    else {
        confirm('would you like to share on facebook?');
    }

}



//  **************************************canvas start**********************************************
// get canvas context
function getCtx() {
    return gCtx;
}


function initCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
    return gCanvas;
}


function setCanvasDimensions() {


    gWidth = screen.width;
    if (gWidth > 700) {
        gCanvas.width = 500;
        gCanvas.height = 500;
    } else {
        document.querySelector('body').classList.add('mobile');
        gCanvas.width = 300;
        gCanvas.height = 300;
    }
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}






// intial the generator
function initMemeGen() {
    initCanvas();
    setCanvasDimensions();
}

// when you put the text
function onGetText(value) {
    changeMemeText(value);
    drawText();
    drawStickers();
}

//change font size
function onChangeFontSize(num) {
    onChangeFontSize(num);

}


// when you move a line
function onMove(y) {
    moveLine(y);
}

// switch to a new line or between lines
function onSwitchLine() {
    clearInputText()
    SwitchLine()
}

// when you click the on the MEME check if it is a line or object and drags it if needed
function onCanvasClick(ev) {
    var isLine = findClickedLine(ev);
    if (isLine)
        dragLine();

    var isSticker = findClickedSticker(ev);
    if (isSticker)
        dragSticker();
}





// download the meme
function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}


// toggle the stickers MODAL
function toggleExtraModal() {
    document.querySelector('.extras').classList.toggle('hide');
}




function onClickSticker(el, id) {
    console.log('add-sticker', el, id)
    addStickerData(el, id);
    drawStickers();

}










