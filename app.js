const colors = ["Aqua",
    "Aquamarine",
    "Azure",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Crimson",
    "Cyan",
    "DarkOrange",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Fuchsia",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Khaki",
    "LawnGreen",
    "Lime",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",

    "Yellow",
    "YellowGreen",
];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const spanColor = document.getElementById('spanColor')
const title = document.getElementById("Title")


btn.addEventListener('click', btnClick);



function btnClick() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    title.style.color = colors[randomNumber];
    spanColor.style.color = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    var tooltip = document.getElementById("myToolTip");
    tooltip.innerHTML = "Copy to the clipboard by Clicking name of color" ;
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
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
  
/*   function outFunction() {
    var tooltip = document.getElementById("myToolTip");
    tooltip.innerHTML = "Copy to the clipboard by Clicking name of color" ;
  } */
/* panColor.addEventListener("click", copy);

function copy() {
    var copyText = document.getElementById("spanColor");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    alert(textAreaString);
    textArea.remove();

} */
