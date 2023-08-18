function getInputValue(inputId){
    return parseFloat(document.getElementById(inputId).value);
}
function setInnerText(id,text){
    document.getElementById(id).innerText = text;
}
function addToCalculationEntry(areaType,area){
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount + 1;
    p.innerHTML = `
        <span>${count}.</span>
        <span class="font-bold" >${areaType}</span>
         <div><span>${area} </span>
         <span>cm<sup>2</sup></span></div>
        <button class='btn btn-sm btn-primary lowercase text-white' onclick="cmToMeter(${area})" >convert to <span>m<sup>2</sup></span></button>
    `;
    p.classList.add('flex','justify-around','pb-2','items-center')
    p
    calculationEntry.appendChild(p)
}
function cmToMeter(a){
    const meterArea = (a * 0.01).toFixed(2);
    const meterAreaDisplay = event.target.previousElementSibling;
    meterAreaDisplay.innerHTML = `
        <span>${meterArea}</span>
        <span>m<sup>2</sup></span>
    `;  
    console.log(meterAreaDisplay);
}


function calculateTriangleArea(){
    const baseValue = parseFloat(document.getElementById('tri-base').value);
    const hightValue = parseFloat(document.getElementById('tri-height').value);
    const area = (0.5 * baseValue * hightValue).toFixed(2);
    document.getElementById('tri-area').innerText = area;
    addToCalculationEntry('Triangle',area);
    
}
function calculateRectangleArea(){
    const widthValue = parseFloat(document.getElementById('rect-width').value);
    const lengthValue = parseFloat(document.getElementById('rect-length').value);
    const area = widthValue*lengthValue;
    document.getElementById('rect-area').innerText = area;
    addToCalculationEntry('Rectangle',area);
    
}
function calculateParallelogram(){
    const area = getInputValue('paral-base') * getInputValue('paral-height');
    setInnerText('paral-area',area);
    addToCalculationEntry('Parallelogram',area);
}
function calculateRhombusArea(){
    const area = 0.5 * getInputValue('rhombus-d1') * getInputValue('rhombus-d2');
    setInnerText('rhombus-area',area);
    addToCalculationEntry('Rhombus',area);
}
function calculatePentagonArea(){
    const area = 0.5 * getInputValue('pentagon-p') * getInputValue('pentagon-b');
    setInnerText('pentagon-area',area);
    addToCalculationEntry('Pentagon',area);
}
function calculateEllipseArea(){
    const area = (Math.PI * getInputValue('ellipse-a') * getInputValue('ellipse-b')).toFixed(2);
    setInnerText('ellipse-area',area);
    addToCalculationEntry('Ellipse',area);
}