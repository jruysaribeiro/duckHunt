import * as playerModule from './player.js';
import * as gameModule from './game.js';



let scoreHud = document.getElementById('score');
let duck = document.getElementById('duck');
let duckHit = false;
let positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5;
let positionY = 200;
let lastFrameTime = Date.now();
let direction = Math.random() < 0.5 ? -1 : 1;

let duckCount = 0;
let bounceCount = -2;



export function updateDuckCount(){
    duckCount = 0;
}

export function handleDuckHit() {
    if(gameModule.numOfBullets() <= 0) {
        gameModule.showMessage("Out of ammo! Press R to reload!");
        return;
    }
        //gameModule.addHit();
        
        

        duck.className = 'duck';

        //gameModule.addHitToHud();
    }

export function animateDuckFalling() {
    let fallInterval = setInterval(function() {
        duck.style.animationName = 'fall-down';
        duckHit = true;
        let duckBottom = parseInt(window.getComputedStyle(duck).getPropertyValue('bottom'));

        if (duckBottom <= 0) {
            clearInterval(fallInterval);
            duck.style.display = "none"; // Hide the duck
            duck.src = direction === 1 ? "/resources/sprites/duck/flyrightup.gif" : "/resources/sprites/duck/flyleftup.gif";
            duckHit = false;
            positionY = 0;
            positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5; 
            direction = positionX > window.innerWidth / 2 ? -1 : 1; 
            duck.classList.remove("falling");
            showDogAtLocation(duck.style.left, "350px");
            requestAnimationFrame(moveDuck);
        } else {
            duck.style.bottom = duckBottom - 5 + 'px';
        }
    }, 20);
}

function showDogAtLocation(x, y) {

    let dog = document.createElement("img");
    dog.src = "resources/sprites/dog/gotOne.png";
    dog.style.position = "absolute";
    dog.style.left = x;
    dog.style.bottom = y;
    dog.style.zIndex = 1; // showing up over the grass
    dog.style.transform = "scale(2)"; // make it twice as big
    
    document.getElementById("gameScreen").appendChild(dog);

    // determining direction for the dog to run
    const screenWidth = window.innerWidth;
    const dogPositionX = parseInt(x, 10);
    const moveTo = "-200px"; // move down by 200px

    dog.style.transition = "bottom 4s ease-out";

    // run to the side
    setTimeout(() => {
        dog.style.left = moveTo;
    }, 500);

    
    //remove dog
    setTimeout(() => {
        dog.remove();
    }, 2500);
}







export function moveDuck() {
    if (duckHit) {
        return;
    }
    // Remove all animation classes
    duck.className = 'duck';
    duck.style.display = "block";

    // Add the appropriate animation class based on the direction
    if (direction === 1) {
        duck.style.animationName = 'fly-up-right';
    } else {
        duck.style.animationName = 'fly-up-left';
    }

    let currentTime = Date.now();
    let deltaTime = currentTime - lastFrameTime;
    if (deltaTime >= 10) {
        let currentSpeed = gameModule.bulletTimeActive ? gameModule.speed / 5 : gameModule.speed;
        positionY += currentSpeed * 0.5; 
        positionX += currentSpeed * direction; 
        duck.style.bottom = positionY + 'px';
        duck.style.left = positionX + 'px';
        if (positionY >= window.innerHeight || positionX < 0 || positionX >= window.innerWidth) { 
            if (bounceCount < gameModule.round) { // Check if the duck has bounced less than the round number
                direction *= -1; // Reverse the direction
                bounceCount++; // Increment the bounce count
            } else {
                setTimeout(() => { // Add a delay before resetting the duck's position
                    positionY = 200; 
                    positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5; 
                    direction = positionX > window.innerWidth / 2 ? -1 : 1; 
                    duckHit = false;
                    bounceCount = 0;
                    gameModule.updateDuckHealth(gameModule.round);
                }, 1000); 
            }
        }
        duck.removeEventListener('click', handleDuckHit); 
        duck.addEventListener('click', handleDuckHit); 
        lastFrameTime = currentTime;
    }
    requestAnimationFrame(moveDuck);
}

function duckSprite(direction)  {
    if (direction === 1) {
        duck.classList.remove('flyleftup');
        duck.classList.add('flyrightup');
    } else {
        duck.classList.remove('flyrightup');
        duck.classList.add('flyleftup');
    }
}





