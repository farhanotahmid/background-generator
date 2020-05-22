// To put the CSS code in the blank h3 tag
var css = document.querySelector("h3");

// Select the first color class
var color1 = document.querySelector(".color1");

// Select the second color class
var color2 = document.querySelector(".color2");

// Fetch the body to change the gradient
var body = document.getElementById("gradient");

// Write the function to change the gradient
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    // Assign the h3 to the CSS color code
    css.textContent = body.style.background + ";";
}

// Callback functions
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);