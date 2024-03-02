//Imports
import * as playerModule from './player.js';
import * as weaponModule from './weapon.js';
import * as duckModule from './duck.js';
import { gameAudio } from './menuapp.js';

//Game Variables
export let round = 1;
export const gameScreen = document.getElementById('game');
let score = playerModule.getScore();
export const scoreHud = document.getElementById('score');
scoreHud.textContent = playerModule.player.score;
export let duckCounter = document.getElementById("hit");
export let hitCounter = 0;
let bulletTimeCounter = 0;
const maxBulletTimeStacks = 14;
let isBulletTimeReady = false;
export let bulletTimeActive = false;
const bulletTimeDuration = 13000;


//Weapon Variables
export let weapon = weaponModule.pistol;
console.log(weapon);

export let ammo = document.getElementById('bullet');
export let gunshot = new Audio(weapon.sound);

//Duck Variables
let duck = document.getElementById('duck');
export let speed = 2;
export let duckHealth = 0 + round;
//Player Variables



//Weapon Functions
export function changeWeapon(newWeapon) {
    weapon = newWeapon;
    cleanWeapon();
    setAmmo(weapon);
    console.log("Weapon changed to " + weapon.name);
    showMessage("Weapon changed to " + weapon.name);
    gunshot = new Audio(weapon.sound);
    console.log(weapon);
    roundHandler();
}

export function cleanWeapon() {
    let bullets = document.querySelectorAll('#ammo .bullet');
    bullets.forEach(function(bullet) {
    bullet.remove();
});
}

gameScreen.addEventListener('click', () => {
    if(numOfBullets() <= 0) {
        showMessage("Out of ammo! Press R to reload!");
        return;
    }
    if(weapon === weaponModule.machinegun) {
        fire(weapon);
        fire(weapon);
    }
    fire(weapon);
});


  export const updateAmmo = function() {
    let bullets = ammo.getElementsByClassName('bullet');
    if (bullets.length > 0) {
        bullets[0].remove();
    }
}

export const setAmmo = function(weapon) {
    for (let i = numOfBullets(); i < weapon.magazineSize; i++) {
        const bullet = document.createElement('img');
        bullet.src = weapon.bulletImage;
        bullet.className = "bullet";
        ammo.appendChild(bullet);   
    };
};

document.addEventListener('keydown', (event) => {
    if(event.key === "r" || event.key === "R") {
        showMessage("Reloading!");
        setTimeout(() => reload(weapon), weapon.reloadTime + 2000);
    }
});

export const reload = function(weapon) {
    setAmmo(weapon);
    showMessage("Reloaded!");
}

export const fire = function(weapon) {
    if(numOfBullets() <= 0) {
        return;
    }
    gunshot.pause();
    gunshot.currentTime = 0;
    gunshot.play();
    updateAmmo();
    console.log("Fire");
}

export const numOfBullets = function() {
    return document.querySelectorAll('#ammo img').length;
};


//Duck Functions

duck.addEventListener('click', function() {
    if(numOfBullets() <= 0) {   
        return;
    };
    bulletTimeCounter++;
    updateBulletTimeMeter();
    if (weapon.name === "machinegun") {
        duckHealth -= 3;
    } else {
        duckHealth -= weapon.damage;
    }
    console.log("Duck Health: " + duckHealth);
    console.log("Weapon Damage = " + weapon.damage);
    console.log("updatedDuckHealth = " + duckHealth);
    if(duckHealth <= 0) {
        playerModule.player.score += round * 100;
        scoreHud.textContent = playerModule.player.score;
        addHit();
        addHitToHud();
        duckModule.animateDuckFalling();
        duckHealth = 0 + round;
        return;
    } else {
        duckModule.handleDuckHit();
    }
});

export function updateDuckSpeed(round) {
    speed = 2 + round * 0.5;
    console.log("speed= " + speed);
}


export let updateDuckHealth = function(round) {
    duckHealth = 0 + round;
}


//Player Functions

//Game Functions
function updateLocalScore() {
    playerModule.updateLocalScore();
}
export const startGame = function() {
    roundHandler();
    setTimeout(() => {
        requestAnimationFrame(duckModule.moveDuck); 
    }, 5000); 
};

let roundHandler = function() {
    gameAudio.play();
    if (round === 1){
        setAmmo(weapon);
    }
    showMessage("Round " + round + "!" + " Get ready!");
    updateDuckSpeed(round);
    hitCounter = 0;
    let duckCounters = document.querySelectorAll('.hudDuck');
    duckCounters.forEach(function(duckCounter) {
        duckCounter.remove();
    });
    updateLocalScore();
    duckModule.updateDuckCount();
    updateDuckHealth(round);
    console.log("Duck Health: " + duckHealth);
}

export function addHitToHud() {
    let newDuckToCounter = document.createElement('img');
    newDuckToCounter.src = "/resources/sprites/duck/hit.png";
    newDuckToCounter.className = "hudDuck";
    newDuckToCounter.style.width = "20px";
    newDuckToCounter.style.height = "auto";
    duckCounter.appendChild(newDuckToCounter);
    if (hitCounter >= 5) {
        updateRound();
        hitCounter = 0;
        roundHandler();
    }
};

function updateRound() {
    round++;
}

export function addHit() {
    hitCounter++;
}


//Message Functions
export function showMessage(message) {
    // Get the game div
    let gameDiv = document.getElementById('game');

    // Create a new div element
    let messageDiv = document.createElement('div');

    // Set the text of the div to the provided message
    messageDiv.textContent = message;

    // Style the div to be centered in the game div
    messageDiv.style.position = 'absolute';
    messageDiv.style.left = '50%';
    messageDiv.style.top = '70%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.padding = '20px';
    messageDiv.style.backgroundColor = 'white';
    messageDiv.style.border = '1px solid black';
    messageDiv.style.borderRadius = '50px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '1000';

    // Add the div to the game div
    gameDiv.appendChild(messageDiv);

    // Remove the div after 5 seconds
    setTimeout(function() {
        gameDiv.removeChild(messageDiv);
    }, 2000);
};


//Bullet Time Functions

let matrixAudio = new Audio("/resources/sounds/matrix.wav");
function updateBulletTimeMeter(){

    let bulletTimeMeter = document.getElementById("bullet-time-meter"); // can we declare this variable on global scope?
    bulletTimeMeter.value = bulletTimeCounter;
    console.log("counter value:" + bulletTimeCounter.valueOf());

    // Check if bullet time is ready to be activated
    if (bulletTimeCounter >= maxBulletTimeStacks){
        isBulletTimeReady = true;
        showMessage("Bullet time is ready! 🔫 Press B to activate!");
    } else{
        isBulletTimeReady = false; // do we need this? The variable is initialized as false
    }

};

function resetBulletTimeMeter(){
    bulletTimeCounter = 0;
    isBulletTimeReady = false;
    updateBulletTimeMeter();
};

document.addEventListener("keydown", (event) => {
    if (event.key === "b" && isBulletTimeReady){
        activateBulletTime();
    }
});


function activateBulletTime(){
    matrixAudio.play();
    console.log("Bullet time activated! ⏳")
    showMessage("Bullet time activated! ⏳")
    bulletTimeActive = true;
    // Set timeout to deactivate
    setTimeout(() => {
        bulletTimeActive = false;
        console.log("Bullet time ended.");
        showMessage("Bullet time ended.");
    }, bulletTimeDuration);

    resetBulletTimeMeter();
}

export function getBulletTimeActive() {
    return bulletTimeActive;
}

