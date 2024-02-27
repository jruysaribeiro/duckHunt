const pistol = {
    name: "pistol",
    damage: 1,
    fireRate: 1,
    reloadTime: 1,
    magazineSize: 10,
    ammo: 10,
    bulletImage: "/resources/sprites/bullets/pistolBullet.png",
    pistolSound: "/resources/sounds/gunshot.wav"
}


let magazineSize = 10;
let ammo = document.getElementById('ammo');
let weapon = "pistol";
let gunshot = new Audio('/resources/sounds/gunshot.wav');
const gameScreen = document.getElementById('game');

let numOfBullets = function() {
    return document.querySelectorAll('#ammo img').length;
};

let setAmmo = function() {
    for (let i = numOfBullets(); i < magazineSize; i++) {
        const bullet = document.createElement('img');
        bullet.src = "/resources/sprites/bullets/pistolBullet.png";
        bullet.className = "bullet";
        ammo.appendChild(bullet);   
    };
};

let fire = function() {
    if(numOfBullets() <= 0) {
        return;
    }
    gunshot.pause();
    gunshot.currentTime = 0;
    gunshot.play();
    updateAmmo();
    console.log("Fire");
}

let reload = function() {
    console.log("Reload");
    setAmmo();
}

gameScreen.addEventListener('click', () => {
  fire();
});

let updateAmmo = function() {
    let bullets = ammo.getElementsByClassName('bullet');
    if (bullets.length > 0) {
        bullets[0].remove();
    }
}

document.addEventListener('keydown', (event) => {
    if(event.key === "r" || event.key === "R") {
        reload();
    }
});

setAmmo();

//Duck Logic

let hitCounter = 0; // Initialize hit counter

let duckCounter = document.getElementById("hit");



let duck = document.getElementById('duck');
let duckHit = false;
let positionX = window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5;
let positionY = 0;
let lastFrameTime = Date.now();
let direction = Math.random() < 0.5 ? -1 : 1;

function handleDuckHit() {
    duck.style.display = "none"; 
    console.log('Duck was hit');
    hitCounter++;
    duckHit = true;
    let newDuckToCounter = document.createElement('img');
    newDuckToCounter.src = "/resources/sprites/scoreImages/hit/duckwhite.png";
    newDuckToCounter.className = "hudDuck";
    duckCounter.appendChild(newDuckToCounter);
    if (hitCounter === 10) {
        alert('You win this round, increasing the difficulty!');
    }
}

duck.addEventListener('click', handleDuckHit);

function moveDuck() {
    if (!duckHit) { // Add this line
        duck.style.display = 'block';
    }
    let currentTime = Date.now();
    let deltaTime = currentTime - lastFrameTime;
    let buffer = 100; 
    if (deltaTime >= 10) { 
        positionY += 2; 
        positionX += 2 * direction; 
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

setTimeout(() => {
    requestAnimationFrame(moveDuck); 
}, 5000); 


// Game Start logic so the duck doesn't start moving until the game starts
