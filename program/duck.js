import * as playerModule from './player.js';
import * as gameModule from './game.js';



let scoreHud = document.getElementById('score');
let duck = document.getElementById('duck');
let duckHit = false;
let positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5;
let positionY = 0;
let lastFrameTime = Date.now();
let direction = Math.random() < 0.5 ? -1 : 1;
let speed = 1.5;
let duckCount = 0;
let bounceCount = 0;

let healthIncrement = 0;
let health = 1 + healthIncrement;


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
            requestAnimationFrame(moveDuck);
        } else {
            duck.style.bottom = duckBottom - 5 + 'px';
        }
    }, 20);
}






export function moveDuck() {
    health = 1 + healthIncrement;
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
        positionY += speed * 0.5; 
        positionX += speed * direction; 
        duck.style.bottom = positionY + 'px';
        duck.style.left = positionX + 'px';
        if (positionY >= window.innerHeight || positionX < 0 || positionX >= window.innerWidth) { 
            if (bounceCount < gameModule.round) { // Check if the duck has bounced less than the round number
                direction *= -1; // Reverse the direction
                bounceCount++; // Increment the bounce count
            } else {
                setTimeout(() => { // Add a delay before resetting the duck's position
                    positionY = 0; 
                    positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5; 
                    direction = positionX > window.innerWidth / 2 ? -1 : 1; 
                    duckHit = false;
                    duck.removeEventListener('click', handleDuckHit); 
                    duck.addEventListener('click', handleDuckHit); 
                    bounceCount = 0; 
                }, 1000); 
            }
        }
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

export function updateDuckSpeed(round) {
    speed = speed + round * 0.5;
    console.log("speed= " + speed);
}

