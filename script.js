let container = document.querySelector('.boxContainer');
const body = document.querySelector('body');
const slider = document.querySelector('#canvasSizeSelect');
const output = document.getElementById('sliderDemo');
const startButton = document.querySelector('.startButton');
let canvasIsExist = false;
slider.oninput = function() {
    output.innerHTML = this.value;
};
startButton.addEventListener('click', () => {
    doSketchPad(slider.value);
});
const doSketchPad = function(maxBoxes) {
    if (canvasIsExist) {
        removeContainer();
        container = recreateContainer();
        createBoxes(maxBoxes);
    } else {
        createBoxes(maxBoxes);
    };
};
const removeContainer = function() {
    container.remove();
};
const recreateContainer = function() {
    let newContainer = document.createElement('div');
    newContainer.classList.add('boxContainer');
    body.appendChild(newContainer);
    return newContainer;
}
const createBoxes = function(maxBoxes) {
    for (i = 0; i < (maxBoxes * maxBoxes); i++) {
        let item = document.createElement('div');
        item.style.cssText = `background-color : white; height: ${(800 / maxBoxes)}px; width: ${(800 / maxBoxes)}px;`
        item.classList.add(`box`);
        container.appendChild(item);
        let iteration = 0;
        item.addEventListener('mouseenter', () => {
            const greyArray = ['f0f0f0', 'eeeeee', 'dddddd', 'cccccc', 'bbbbbb', 'aaaaaa', '999999', '888888', '777777', '666666', '555555', '444444', '333333', '222222', '111111', '000000'];
            console.log(greyArray[iteration]);
            item.style.cssText = `background-color : #${greyArray[iteration]}; height: ${(800 / maxBoxes)}px; width: ${(800 / maxBoxes)}px;`
            if (iteration < 15)iteration++;
            //console.log(item.classList);
            //console.log(item.style.cssText);
        });
        canvasIsExist = true;
    };
}