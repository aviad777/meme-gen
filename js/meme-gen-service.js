





//current MEME
var gCurrMeme =
{
    selectedImgID: 1, // the selected image num to get from the gallery
    selectedLineIdx: 0, // the selected line of text to be focused on
    selectedSticker: 0, // the selected sticker
    lines: [{ txt: '', size: '20px', align: 'left', color: 'red', x: 50, y: 100, lineWidth: 0, lineHeight: 0 }],
    stickers: []
};

// **************************************** HAMMER  *********************************************

function touchEvent() {

    var hammertime = new Hammer(gCanvas);
    hammertime.on('pan', function (ev) {
        if (ev.pointerType === 'mouse') return;




        let offsetX = ev.srcEvent.offsetX
        let offsetY = ev.srcEvent.offsetY
        gCurrMeme.lines[gCurrMeme.selectedLineIdx].x = offsetX - (gCurrMeme.lines[gCurrMeme.selectedLineIdx].lineWidth)
        gCurrMeme.lines[gCurrMeme.selectedLineIdx].y = offsetY
        renderMeme();
    });
}

// ************************************* Meme ***************************************************************

// render MEME
function renderMeme() {
    setMeme();
    drawText();
    drawStickers();
    touchEvent();
}

function setMeme() {

    img = document.querySelector(`.gallery-image${gCurrMeme.selectedImgID}`);
    if (gWidth > 700)
        gCtx.drawImage(img, 0, 0, 500, 500);
    else
        gCtx.drawImage(img, 0, 0, 500, 500, 0, 0, 300, 300);
}



function setNewMeme(img) {

    gCurrMeme =
    {
        selectedImgID: img.id,
        selectedLineIdx: 0,
        lines: [createLine()],
        stickers: []
    }
}



function clearInputText() {
    document.querySelector('.meme-line').value = '';
}

function clearMeme() {
    gCurrMeme =
    {
        selectedImgID: 1,
        selectedLineIdx: 0,
        selectedSticker: 0,
        lines: [{ txt: '', size: '20px', align: 'left', color: 'red', x: 50, y: 100 }],
        stickers: []
    };
    drawText();
}

// ******************************************* Text Handling  ****************************************************


function changeMemeText(value) {

    var lineNum = gCurrMeme.selectedLineIdx;
    gCurrMeme.lines[lineNum].txt = value;
}



function drawText() {
    var lineNum = 0;

    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    setMeme();

    gCurrMeme.lines.forEach((line) => {
        x = line.x;
        y = line.y;
        var text = line.txt;

        gCtx.strokeStyle = gCurrMeme.color;
        gCtx.fillStyle = 'white';
        gCtx.font = line.size + 'px impact';

        //  mesuare the height (actualBoundingBoxAscent) and than the width after 
        line.lineHeight = gCtx.measureText(text).actualBoundingBoxAscent;
        line.lineWidth = gCtx.measureText(text).width;

        // gCtx.textAlign = 'center'
        gCtx.fillText(text, x, y);
        gCtx.strokeText(text, x, y);
    })
}
// creating a new empty line 
function createLine(txt = '', size = 20, align = 'left', color = 'yellow', x = 50, y = 100) {
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

// add line to the meme's data
function addLine(meme, line) {
    meme.lines.push(line);
}

// change the font
function changeFontSize(num) {

    var lineNum = gCurrMeme.selectedLineIdx;
    gCurrMeme.lines[lineNum].size += num;
    renderMeme();
}

// switch between line or change lines
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

// we can Take It OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  move the line with the buttons 
function moveLine(y) {
    var lineNum = gCurrMeme.selectedLineIdx;
    gCurrMeme.lines[lineNum].y += y * 5;
}


function getCurrMeme() {
    var idx = gCurrMeme.selectedImgID;
    var pic = getImgByID(idx).url;
    return pic;
}


// rotate text!
// function (rotateLine) {
//     radians = (angle * Math.PI / 180)
//     context.save();
//     context.translate(newx, newy);
//     context.rotate(-Math.PI / 2);
//     context.textAlign = "center";
//     context.fillText("Your Label Here", labelXposition, 0);
//     context.restore();
// }


// ************************************************** Stickers ***********************************************


function drawStickers() {
    for (var i = 0; i < gCurrMeme.stickers.length; i++) {

        gCtx.drawImage(
            gCurrMeme.stickers[i].imgUrl, gCurrMeme.stickers[i].x, gCurrMeme.stickers[i].y,
            gCurrMeme.stickers[i].width, gCurrMeme.stickers[i].height,
        );
    }
}

function addStickerData(el, id) {

    var elImage = el;
    var sticker = {
        imgUrl: el,
        x: 50,
        y: 100,
        width: 50,
        height: 50
    }
    console.log(gCurrMeme);
    gCurrMeme.stickers.push(sticker);
    gCurrMeme.selectedSticker = gCurrMeme.stickers.length - 1;

}


function enlargeSticker() {
    console.log('sticker to enlarge', gCurrMeme);
    gCurrMeme.stickers[gCurrMeme.selectedSticker].width += 10;
    gCurrMeme.stickers[gCurrMeme.selectedSticker].height += 10;
    renderMeme();
}


function decreaseSticker() {
    console.log('sticker to enlarge', gCurrMeme.stickers[gCurrMeme.selectedSticker]);
    gCurrMeme.stickers[gCurrMeme.selectedSticker].width -= 10;
    gCurrMeme.stickers[gCurrMeme.selectedSticker].height -= 10;
    renderMeme();
}




//************************************ Drag and Drop Handling  ***********************************************


// calls the function that checks if the clickevent is on the selected linem and letting gDragline be true to handle
// drag and drop


function findClickedLine(ev) {
    var clickedX = ev.offsetX;
    var clickedY = ev.offsetY;

    var isLine = clickedLine(clickedX, clickedY);
    if (isLine) {
        gDragLine = true;
        return isLine;
    }
    return;
}

// check if the clicked event is on the line's teritory returns true and changes meme's selectedLine
function clickedLine(clickedX, clickedY) {
    for (var i = 0; i < gCurrMeme.lines.length; i++) {
        if (
            clickedX >= gCurrMeme.lines[i].x &
            clickedX <= gCurrMeme.lines[i].x + gCurrMeme.lines[i].lineWidth &
            clickedY <= gCurrMeme.lines[i].y &
            clickedY >= gCurrMeme.lines[i].y - gCurrMeme.lines[i].lineHeight) {

            gCurrMeme.selectedLineIdx = i;
            return true;
        }
    }
    return false;
}



function findClickedSticker(ev) {

    var clickedX = ev.offsetX;
    var clickedY = ev.offsetY;

    var isSticker = clickedSticker(clickedX, clickedY);
    if (isSticker) {
        gDragSticker = true;
        return isSticker;
    }

    return;
}

function clickedSticker(clickedX, clickedY) {
    var bol = false;
    gCurrMeme.stickers.forEach((sticker, idx) => {
        debugger
        if (
            clickedX >= sticker.x &
            clickedX <= sticker.x + sticker.width &
            clickedY >= sticker.y &
            clickedY <= sticker.y + sticker.height) {

            console.log('stickedxr it is');
            gCurrMeme.selectedSticker = idx;
            bol = true;

        }

    })
    return bol;
}


// drag the sticker

function dragSticker() {
    if (gDragSticker) {
        console.log('dragSTICLER');
        gCanvas.addEventListener('mousemove', ev => {
            if (!gDragSticker) return;

            gCurrMeme.stickers[gCurrMeme.selectedSticker].x = ev.offsetX;
            gCurrMeme.stickers[gCurrMeme.selectedSticker].y = ev.offsetY;
            renderMeme()
        })
        gCanvas.addEventListener('mouseup', ev => {
            if (!gDragSticker) return;

            gDragSticker = false;
        })
    }

}


function dragLine() {
    if (gDragLine) {
        gCanvas.addEventListener('mousemove', ev => {
            if (!gDragLine) return;

            gCurrMeme.lines[gCurrMeme.selectedLineIdx].x = ev.offsetX;
            gCurrMeme.lines[gCurrMeme.selectedLineIdx].y = ev.offsetY;
            renderMeme()
        })
        gCanvas.addEventListener('mouseup', ev => {
            if (!gDragLine) return;

            gDragLine = false;
        })
    }

}

// function drawText() {
//     var lineNum = 0;

//     gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
//     setMeme();
//     while (lineNum < gCurrMeme.lines.length) {
//         x = gCurrMeme.lines[lineNum].x;
//         y = gCurrMeme.lines[lineNum].y;
//         var text = gCurrMeme.lines[lineNum].txt;

//         gCtx.strokeStyle = gCurrMeme.color;
//         gCtx.fillStyle = 'white';
//         gCtx.font = gCurrMeme.lines[lineNum].size + 'px impact';

//         //  mesuare the height (actualBoundingBoxAscent) and than the width after 
//         gCurrMeme.lines[lineNum].lineHeight = gCtx.measureText(text).actualBoundingBoxAscent;
//         gCurrMeme.lines[lineNum].lineWidth = gCtx.measureText(text).width;

//         // gCtx.textAlign = 'center'
//         gCtx.fillText(text, x, y);
//         gCtx.strokeText(text, x, y);
//         lineNum++;
//     }
// }


// check if the clicked event is on the sticker's teritory returns true and changes meme's selectedSticker

// function clickedSticker(clickedX, clickedY) {
//     for (var i = 0; i < gCurrMeme.stickers.length; i++) {

//         console.log('x,y', clickedX, clickedY)
//         console.log('sticker X click between', gCurrMeme.stickers[i].x, gCurrMeme.stickers[i].x + gCurrMeme.stickers[i].width)
//         console.log('sticker Y click between', gCurrMeme.stickers[i].y - gCurrMeme.stickers[i].height, gCurrMeme.stickers[i].y)
//         if (
//             clickedX >= gCurrMeme.stickers[i].x &
//             clickedX <= gCurrMeme.stickers[i].x + gCurrMeme.stickers[i].width &
//             clickedY >= gCurrMeme.stickers[i].y &
//             clickedY <= gCurrMeme.stickers[i].y + gCurrMeme.stickers[i].height) {

//             console.log('sticker it is');
//             gCurrMeme.selectedSticker = i;
//             return true;
//         }
//     }
//     return false;
// }