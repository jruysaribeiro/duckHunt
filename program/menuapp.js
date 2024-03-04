import * as gameModule from './game.js';
import * as weaponModule from './weapon.js';
import * as playerModule from './player.js';

const startControl = document.getElementById('start');
export const gameAudio = new Audio("/resources/sounds/intro.mp3");
const volumeToggle = document.getElementById('toggle');

startControl.addEventListener('click', () => {
    console.log('start clicked');
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    gameModule.startGame();
    gameAudio.volume = 0.2;
    gameAudio.play();
});

const settingControls = document.getElementById('settings');

settingControls.addEventListener('click', () => {
    console.log('settings clicked');
    document.getElementById('menu').style.display = 'none';
    document.getElementById('settingsView').style.display = 'block';
});

const pauseControl = document.getElementById('game');

        // pause the game
document.addEventListener('keydown', (event) => {
        if(document.getElementById('pause').style.display === 'block') {
            if(event.key === 'q') {
                console.log('resumed');
                document.getElementById('pause').style.display = 'none';
                document.getElementById('game').style.display = 'block';
            }
            return;
        }
        console.log("paused")
        if(event.key === 'q') {
        document.getElementById('game').style.display = 'none';
        document.getElementById('pause').style.display = 'block';
    }
});

const exitControls = document.getElementById('exit');

        // exit the game on pause menu
exitControls.addEventListener('click', () => {
    console.log('exit clicked');
    document.getElementById('pause').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
});

const backButton = document.getElementById('back');

backButton.addEventListener('click', () => {
    console.log('back clicked');
    document.getElementById('settingsView').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
}
);

const resumeButton = document.getElementById('resume');

resumeButton.addEventListener('click', () => {
    console.log('resume clicked');
    document.getElementById('pause').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}
);

const shopMenu = document.getElementById('shop');

shopMenu.addEventListener('click', () => {
    console.log('shop clicked');
    document.getElementById('pause').style.display = 'none';
    document.getElementById('shopView').style.display = 'block';
});

const shopExit = document.getElementById('shopExit');

shopExit.addEventListener('click', () => {
    console.log('shop exit clicked');
    document.getElementById('shopView').style.display = 'none';
    document.getElementById('pause').style.display = 'block';
});

//Shop buttons
const buyBow = document.getElementById('bow');
const buyShotgun = document.getElementById('shotgun');
const buyMachinegun = document.getElementById('machinegun');
const buySniper = document.getElementById('sniper');
const buyRocketLauncher = document.getElementById('rocketlauncher');

buyBow.addEventListener('click', () => {
    if(playerModule.getScore() < weaponModule.bow.price) {
        showMessageShop("Not enough money!");
        return;
    }
    console.log('bow clicked');
    gameModule.changeWeapon(weaponModule.bow);
    showMessageShop("Bow purchased!");
    gameModule.startGame();
});

buyShotgun.addEventListener('click', () => {
    if(playerModule.getScore() < weaponModule.shotgun.price) {
        showMessageShop("Not enough money!");
        return;
    }
    console.log('shotgun clicked');
    gameModule.changeWeapon(weaponModule.shotgun);
    showMessageShop("Shotgun purchased!");
    gameModule.startGame();
});

buyMachinegun.addEventListener('click', () => {
    if(playerModule.getScore() < weaponModule.machinegun.price) {
        showMessageShop("Not enough money!");
        return;
    }
    console.log('machinegun clicked');
    gameModule.changeWeapon(weaponModule.machinegun);
    showMessageShop("Machine Gun purchased!");
    gameModule.startGame();
});

buySniper.addEventListener('click', () => {
    if(playerModule.getScore() < weaponModule.sniper.price) {
        showMessageShop("Not enough money!");
        return;
    }
    console.log('sniper clicked');
    gameModule.changeWeapon(weaponModule.sniper);
    showMessageShop("Sniper purchased!");
    gameModule.startGame();
});

buyRocketLauncher.addEventListener('click', () => {
    if(playerModule.getScore() < weaponModule.rocketLauncher.price) {
        showMessageShop("Not enough money!");
        return;
    }
    console.log('rocketlauncher clicked');
    gameModule.changeWeapon(weaponModule.rocketLauncher);
    showMessageShop("Rocket Launcher purchased!");
    gameModule.startGame();
});

//Message in Settings Functions
export function showMessageSettings(message) {
    let div = document.getElementById('settingsView');

    // Create a new div element
    let messageDiv = document.createElement('div');

    // Set the text of the div to the provided message
    messageDiv.textContent = message;

    // Style the div to be centered in the game div
    messageDiv.style.position = 'absolute';
    messageDiv.style.left = '50%';
    messageDiv.style.top = '70%';
    messageDiv.style.transform = 'translate(-50%, -10%)';
    messageDiv.style.padding = '20px';
    messageDiv.style.backgroundColor = 'white';
    messageDiv.style.border = '1px solid black';
    messageDiv.style.borderRadius = '50px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '1000';

    // Add the div to the game div
    div.appendChild(messageDiv);

    // Remove the div after 5 seconds
    setTimeout(function() {
        div.removeChild(messageDiv);
    }, 2000);
};

export function showMessageShop(message) {
    let div = document.getElementById('shopView');

    // Create a new div element
    let messageDiv = document.createElement('div');

    // Set the text of the div to the provided message
    messageDiv.textContent = message;

    // Style the div to be centered in the game div
    messageDiv.style.position = 'absolute';
    messageDiv.style.left = '50%';
    messageDiv.style.top = '70%';
    messageDiv.style.transform = 'translate(-50%, -10%)';
    messageDiv.style.padding = '20px';
    messageDiv.style.backgroundColor = 'white';
    messageDiv.style.border = '1px solid black';
    messageDiv.style.borderRadius = '50px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '1000';

    // Add the div to the game div
    div.appendChild(messageDiv);

    // Remove the div after 5 seconds
    setTimeout(function() {
        div.removeChild(messageDiv);
    }, 2000);
};









