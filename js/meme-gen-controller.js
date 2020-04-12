

// intial the generator
function initMemeGen() {
    initCanvas();
    setCanvasDimensions();
}

// when you put the text
function onGetText(value) {
    changeMemeText(value);
    drawText();
    clearInputText();
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

    addStickerData(el, id);
    drawStickers();

}










