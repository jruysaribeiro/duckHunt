//Imports
import * as playerModule from './player.js';
import * as weaponModule from './weapon.js';
import * as duckModule from './duck.js';

//Game Variables
export let round = 1;
export const gameScreen = document.getElementById('game');
let score = playerModule.getScore();
export const scoreHud = document.getElementById('score');
scoreHud.textContent = playerModule.player.score;
export const duckCounter = document.getElementById("hit");
let hitCounter = 0;

//Weapon Variables
export const weapon = weaponModule.machinegun;
console.log(weapon);
export const ammo = document.getElementById('ammo');
export const gunshot = new Audio(weapon.sound);

//Duck Variables
let duck = document.getElementById('duck');

export let duckHealth = 0 + round;
//Player Variables



//Weapon Functions
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
    if (weapon.name === "machinegun") {
        duckHealth -= 3;
    } else {
        duckHealth--;
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
    if (round === 1){
        setAmmo(weapon);
    }
    showMessage("Round " + round + "!" + " Get ready!");
    duckModule.updateDuckSpeed(round);
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
    newDuckToCounter.src = "/resources/sprites/scoreImages/hit/duckwhite.png";
    newDuckToCounter.className = "hudDuck";
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
    bulletTimeCounter++;
    updateBulletTimeMeter();
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
let bulletTimeCounter = 5;
const maxBulletTimeBars = 5;
let isBulletTimeReady = false;

function updateBulletTimeMeter(){

    const bars = document.querySelectorAll(".bullet-time-bar");

    // Fill the bars based on bulletTimeCounter
    bars.forEach((bar, index) => {
        if (index < bulletTimeCounter){
            bar.style.backgroundColor = "black";
        } else {
            bar.style.backgroundColor = "white";
        }
    });

    // Check if bullet time is ready to be activated
    if (bulletTimeCounter >= maxBulletTimeBars){
        isBulletTimeReady = true;
        console.log("Bullet time is ready!");
        showMessage("Bullet time is ready! 🔫")
        document.getElementById("bullet-time-container").style.backgroundColor = "green";

    }

};

function resetBulletTimeMeter(){
    bulletTimeCounter = 0;
    isBulletTimeReady = false;
    updateBulletTimeMeter();
};

document.addEventListener("keydown", (event) => {
    if (event.key === "b" && isBulletTimeReady){
        console.log("Bullet time activated! 🔫")
        // we slow down time here
        // after 10 secs or something:
        // resetBulletTimeMeter();  
    }
});
