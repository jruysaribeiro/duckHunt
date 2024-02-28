//Imports
import * as playerModule from './player.js';
import * as weaponModule from './weapon.js';
import * as duckModule from './duck.js';

//Game Variables
export let round = 1;
export const gameScreen = document.getElementById('game');
export let score = playerModule.getScore();
export let scoreHud = document.getElementById('score');
scoreHud.textContent = playerModule.player.score;
export let duckCounter = document.getElementById("hit");
export let hitCounter = 0;
//Weapon Variables
export const weapon = weaponModule.machinegun;
console.log(weapon);
export let ammo = document.getElementById('ammo');
export let gunshot = new Audio(weapon.sound);

//Duck Variables


//Player Variables



//Weapon Functions
gameScreen.addEventListener('click', () => {
    if(weapon === weaponModule.machinegun) {
        fire(weapon);
        fire(weapon);
    }
    fire(weapon);
  });
  export let updateAmmo = function() {
    let bullets = ammo.getElementsByClassName('bullet');
    if (bullets.length > 0) {
        bullets[0].remove();
    }
}

export let setAmmo = function(weapon) {
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

export let reload = function(weapon) {
    setAmmo(weapon);
    showMessage("Reloaded!");
}

export let fire = function(weapon) {
    if(numOfBullets() <= 0) {
        return;
    }
    gunshot.pause();
    gunshot.currentTime = 0;
    gunshot.play();
    updateAmmo(weapon);
    console.log("Fire");
}

export let numOfBullets = function() {
    return document.querySelectorAll('#ammo img').length;
};


//Duck Functions



//Player Functions

//Game Functions
function updateLocalScore() {
    playerModule.updateLocalScore();
}
export let startGame = function() {
    roundHandler();
};
let roundHandler = function() {
    if (round === 1){
        setAmmo(weapon);
    }
    showMessage("Round " + round + "!" + " Get ready!");
    duckModule.updateDuckSpeed(round);
    hitCounter = 0;
    updateLocalScore();
    
}
export function addHitToHud() {
    let newDuckToCounter = document.createElement('img');
    newDuckToCounter.src = "/resources/sprites/scoreImages/hit/duckwhite.png";
    newDuckToCounter.className = "hudDuck";
    duckCounter.appendChild(newDuckToCounter);
    if (hitCounter === 5) {
        round++;
        hitCounter = 0;
        duckCounter.innerHTML = "";
        roundHandler();
    }
};
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
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '1000';

    // Add the div to the game div
    gameDiv.appendChild(messageDiv);

    // Remove the div after 5 seconds
    setTimeout(function() {
        gameDiv.removeChild(messageDiv);
    }, 2000);
}

//Commit do André
























