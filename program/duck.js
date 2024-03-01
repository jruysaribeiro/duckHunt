import * as playerModule from './player.js';
import * as gameModule from './game.js';
import * as weaponModule from './weapon.js';



let scoreHud = document.getElementById('score');
let duck = document.getElementById('duck');
let duckHit = false;
let positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5;
let positionY = 0;
let lastFrameTime = Date.now();
let direction = Math.random() < 0.5 ? -1 : 1;
let speed = 1.5;
let duckCount = 0;

let healthIncrement = 0;
let health = 1 + healthIncrement;


export function updateDuckCount(){
    duckCount = 0;
}

function handleDuckHit() {
    if(gameModule.numOfBullets() <= 0) {
        gameModule.showMessage("Out of ammo! Press R to reload!");
        return;
    }
        gameModule.addHit();
        playerModule.player.score += 100 + gameModule.round * 100;
        scoreHud.textContent = playerModule.player.score;
        duckHit = true;

        duck.className = 'duck';

        duck.style.animationName = 'fall-down';

        gameModule.addHitToHud();

        animateDuckFalling();
    }

function animateDuckFalling() {
    let fallInterval = setInterval(function() {
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

duck.addEventListener('click', handleDuckHit);




export function moveDuck() {

    let currentSpeed = gameModule.getBulletTimeAcive() ? speed / 2 : speed;

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
    let buffer = 100; 
    if (deltaTime >= 10) { 
        positionY += currentSpeed; 
        positionX += currentSpeed * direction; 
        duck.style.bottom = positionY + 'px';
        duck.style.left = positionX + 'px';
        if (positionY >= window.innerHeight + buffer || positionX < -buffer || positionX >= window.innerWidth + buffer) { 
            positionY = 0; 
            positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5; 
            direction = positionX > window.innerWidth / 2 ? -1 : 1; 
            duckHit = false;
            duck.removeEventListener('click', handleDuckHit); 
            duck.addEventListener('click', handleDuckHit); 
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

