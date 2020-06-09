// Button Press
var button = document.querySelectorAll(".drum");
// for loop to go through all drum classes and add event listeners to each
for (var i = 0; i < button.length; i++){
    var listener = button[i].addEventListener("click", function (){
        var clickedButton = this.innerHTML;
        makeSound(clickedButton);
        buttonAnimation(clickedButton);
    });
}

// Key Press
document.addEventListener("keydown", function pressed(event){
    var keypressed = event.key;
    makeSound(keypressed);
    buttonAnimation(keypressed);
});

// Choose Sound
function makeSound(key) {
    switch (key) {
        case "w":
        var crash = new Audio ("sounds/crash.mp3");
        crash.play();
        break;
        case "a":
        var kick = new Audio ("sounds/kick-bass.mp3");
        kick.play();
        break;
        case "s":
        var snare = new Audio ("sounds/snare.mp3");
        snare.play();
        break;
        case "d":
        var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "j":
        var tom2 = new Audio ("sounds/tom-2.mp3");
        tom2.play()
        break;
        case "k":
        var tom3 = new Audio ("sounds/tom-3.mp3");
        tom3.play()
        break;
        case "l":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play()
        break;
        default:
            console.log(key);
    }
}

function buttonAnimation(currentkey){
    var currentImage = document.querySelector("." + currentkey)
    currentImage.classList.add("pressed");
    setTimeout(function(){
        currentImage.classList.remove("pressed");
    }, 100);
}