const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");
const spanColor = document.getElementById('spanColor')
const title = document.getElementById("Title")
var tooltip = document.getElementById("myToolTip");


btn.addEventListener('click',btnClick)




function btnClick(){
    let hexColor ='#';
    for(let i=0; i<6; i++ ){
        hexColor+=hex[getRandomNumber()]
    }
    color.textContent =hexColor;
    document.body.style.backgroundColor=hexColor;
    title.style.color=hexColor;
    spanColor.style.color=hexColor;
    tooltip.innerHTML = "Copy to the clipboard by Clicking name of color" ;
}
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}




function copyFunction() {
    var copyText = document.getElementById("spanColor");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
   
    document.execCommand("copy");
    
    var tooltip = document.getElementById("myToolTip");
    tooltip.innerHTML = "Copied: " + copyText.textContent;
    textArea.remove();
  }