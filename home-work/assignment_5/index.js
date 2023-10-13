// create an array of colors
let colors = ["purple", "yellow", "green", "white", "red", "blue", "darkred"];

// create a variable to keep track of the current color
let currentColor = 0;

//function to change the text color when the button is clicked
function changeColor () {
    let textElement = document.getElementById("text");
    textElement.style.color = colors[currentColor];
    currentColor++;
    if (currentColor >= colors.length) {
        currentColor = 0;
    }
}

