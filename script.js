function getInputValue(inputId){
    return parseFloat(document.getElementById(inputId).value);
}
function setInnerText(id,text){
    document.getElementById(id).innerText = text;
}



function calculateTriangleArea(){
    const baseValue = parseFloat(document.getElementById('tri-base').value);
    const hightValue = parseFloat(document.getElementById('tri-height').value);
    const area = 0.5*baseValue*hightValue;
    document.getElementById('tri-area').innerText = area;
    
}
function calculateRectangleArea(){
    const widthValue = parseFloat(document.getElementById('rect-width').value);
    const lengthValue = parseFloat(document.getElementById('rect-length').value);
    const area = widthValue*lengthValue;
    document.getElementById('rect-area').innerText = area;
    
}
function calculateParallelogram(){
    const area = getInputValue('paral-base') * getInputValue('paral-height');
    setInnerText('paral-area',area);
}
function calculateRhombusArea(){
    const area = 0.5 * getInputValue('rhombus-d1') * getInputValue('rhombus-d2');
    setInnerText('rhombus-area',area);
}
function calculatePentagonArea(){
    const area = 0.5 * getInputValue('pentagon-p') * getInputValue('pentagon-b');
    setInnerText('pentagon-area',area);
}
function calculateEllipseArea(){
    const area = Math.PI * getInputValue('ellipse-a') * getInputValue('ellipse-b');
    setInnerText('ellipse-area',area.toFixed(2));
}