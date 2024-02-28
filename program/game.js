//Imports
import * as playerModule from './player.js';
import * as weaponModule from './weapon.js';
import * as duckModule from './duck.js';

//Game Variables
let round = 1;
export const gameScreen = document.getElementById('game');
export let score = playerModule.getScore();
export let scoreHud = document.getElementById('score');
scoreHud.textContent = playerModule.player.score;
export let duckCounter = document.getElementById("hit");
export let hitCounter = 0;
//Weapon Variables
const weapon = weaponModule.weapon;
export let ammo = document.getElementById('ammo');


//Duck Variables


//Player Variables





//Weapon Functions
gameScreen.addEventListener('click', () => {
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
        reload(weapon);
    }
});

export let reload = function(weapon) {
    console.log("Reload");
    setAmmo(weapon);
}

export let fire = function(weapon) {
    if(numOfBullets() <= 0) {
        return;
    }
    weaponModule.gunshot.pause();
    weaponModule.gunshot.currentTime = 0;
    weaponModule.gunshot.play();
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
    showMessage("Round " + round + "!" + " Get ready!");
    setAmmo(weapon);
    reload(weapon);
    duckModule.updateDuckSpeed(round);
    hitCounter = 0;
    updateLocalScore();
    
}
export function addHitToHud() {
    let newDuckToCounter = document.createElement('img');
    newDuckToCounter.src = "/resources/sprites/scoreImages/hit/duckwhite.png";
    newDuckToCounter.className = "hudDuck";
    duckCounter.appendChild(newDuckToCounter);
    if (hitCounter === 10) {
        showMessage("Round " + round + " finished! You hit 10 ducks!");
        round++;
        hitCounter = 0;
        duckCounter.innerHTML = "";
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
    messageDiv.style.top = '50%';
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
    }, 5000);
}






















