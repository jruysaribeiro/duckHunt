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