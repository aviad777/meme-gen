var gCanvas
var gCtx
var gCurrMeme =
{
    selectedImgID: 1,
    selectedLineIdx: 0,
    lines: [{ txt: '', size: '20px', align: 'left', color: 'red', x: 50, y: 100 }]
};


function getCtx() {
    return gCtx;
}



function initCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
    return gCanvas;
}


function setCanvasDimensions() {
    debugger
    gWidth = screen.width;
    if (gWidth > 500) {
        gCanvas.width = 500;
        gCanvas.height = 500;
    } else {
        gCanvas.width = 300;
        gCanvas.height = 300;
    }
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function changeMemeText(value) {

    var lineNum = gCurrMeme.selectedLineIdx;
    gCurrMeme.lines[lineNum].txt = value;

}

function drawText() {
    var lineNum = 0;
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    setMeme();
    while (lineNum < gCurrMeme.lines.length) {

        x = gCurrMeme.lines[lineNum].x;
        y = gCurrMeme.lines[lineNum].y;
        console.log(y);
        text = gCurrMeme.lines[lineNum].txt;

        gCtx.strokeStyle = gCurrMeme.color;
        gCtx.fillStyle = 'white';

        gCtx.font = gCurrMeme.lines[lineNum].size + 'px impact';
        // gCtx.textAlign = 'center'
        gCtx.fillText(text, x, y);
        gCtx.strokeText(text, x, y);
        lineNum++;
    }
}




function getInput() {

}



function getCurrMeme() {
    var idx = gCurrMeme.selectedImgID;
    var pic = getImgByID(idx).url;
    return pic;
}

function createLine(txt = 'meme here', size = 20, align = 'left', color = 'yellow', x = 50, y = 100) {
    let line = {
        txt: txt,
        size: size,
        align: align,
        color: color,
        x: x,
        y: y
    }
    return line;
}


function addLine(meme, line) {
    meme.lines.push(line);
}



// function setMeme(img) {

//     setNewMeme(img);
//     var elCanvas = document.querySelector('#my-canvas');
//     elCanvas.style.backgroundImage = `url(${img.url})`;
// }

function setMeme() {
    debugger

    // var elCanvas = document.querySelector('#my-canvas');

    img = document.querySelector(`.meme-image${gCurrMeme.selectedImgID}`);
    gCtx.drawImage(img, 0, 0, 500, 500);
}



function setNewMeme(img) {

    gCurrMeme =
    {
        selectedImgID: img.id,
        selectedLineIdx: 0,
        lines: [createLine()]
    }
}

function changeFontSize(num) {
    debugger
    var lineNum = gCurrMeme.selectedLineIdx;
    gCurrMeme.lines[lineNum].size += num;

    drawText();
}

function moveLine(y) {
    var lineNum = gCurrMeme.selectedLineIdx;
    gCurrMeme.lines[lineNum].y += y * 5;

    drawText();

}

function SwitchLine() {
    if (gCurrMeme.lines.length > 2) {
        if (gCurrMeme.selectedLineIdx < 2)
            gCurrMeme.selectedLineIdx++;
        else gCurrMeme.selectedLineIdx = 0;
    } else {
        if (gCurrMeme.selectedLineIdx + 1 <= gCurrMeme.lines.length) {
            gCurrMeme.selectedLineIdx++;
            gCurrMeme.lines.push(createLine());
        } else gCurrMeme.selectedLineIdx++;
    }

}

function clearInputText() {
    debugger
    document.querySelector('.meme-line').value = '';
}

function clearMeme() {
    gCurrMeme =
    {
        selectedImgID: 1,
        selectedLineIdx: 0,
        lines: [{ txt: '', size: '20px', align: 'left', color: 'red', x: 50, y: 100 }]
    };
    drawText();
}





