// select elements with class drum
var button = document.querySelectorAll(".drum");

// for loop to go through all drum classes and add event listeners to each
for (var i = 0; i < button.length; i++){
    var listener = button[i].addEventListener("click", handleClick);
}
// the function click carries out.
function handleClick () {
    console.log("Handle Click Worked");
}
