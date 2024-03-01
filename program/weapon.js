import * as gameModule from './game.js';
import * as playerModule from './player.js';
import * as duckModule from './duck.js';


export const pistol = {
    name: "pistol",
    damage: 1,
    fireRate: 1,
    reloadTime: 1,
    magazineSize: 10,
    numOfBullets: 10,
    price: 0,
    bulletImage: "/resources/sprites/bullets/pistolBullet.png",
    sound: "/resources/sounds/gunshot.wav",
    cursor: "/resources/sprites/cursors/pistolCursor.png"
}

export const bow = {
    name: "bow",
    damage: 5,
    fireRate: 1,
    reloadTime: 3,
    magazineSize: 1,
    numOfBullets: 1,
    price: 2000,
    bulletImage: "/resources/sprites/bullets/arrow.png",
    sound: "/resources/sounds/bow.wav",
    cursor: "/resources/sprites/cursors/bowCursor.png"
}

export const shotgun = {
    name: "shotgun",
    damage: 2,
    fireRate: 1,
    reloadTime: 2,
    magazineSize: 5,
    numOfBullets: 5,
    price: 100,
    bulletImage: "/resources/sprites/bullets/shotgunBullet.png",
    sound: "/resources/sounds/shotgun.wav",
    cursor: "/resources/sprites/cursors/shotgunCursor.png"
}

export const machinegun = {
    name: "machinegun",
    damage: 1,
    fireRate: 3,
    reloadTime: 3,
    magazineSize: 24,
    numOfBullets: 24,
    price: 200,
    bulletImage: "/resources/sprites/bullets/machinegunBullet.png",
    sound: "/resources/sounds/machinegun.wav",
    cursor: "/resources/sprites/cursors/machinegunCursor.png"
}

export const sniper = {
    name: "sniper",
    damage: 3,
    fireRate: 1,
    reloadTime: 2,
    magazineSize: 5,
    numOfBullets: 5,
    price: 300,
    bulletImage: "/resources/sprites/bullets/sniperBullet.png",
    sound: "/resources/sounds/sniper.wav",
    cursor: "/resources/sprites/cursors/sniperCursor.png"
}

export const rocketLauncher = {
    name: "rocketLauncher",
    damage: 5,
    fireRate: 1,
    reloadTime: 5,
    magazineSize: 1,
    numOfBullets: 1,
    price: 500,
    bulletImage: "/resources/sprites/bullets/rocket.png",
    sound: "/resources/sounds/rocket.wav",
    cursor: "/resources/sprites/cursors/rocketCursor.png"
}

















