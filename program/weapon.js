import * as gameModule from './game.js';
import * as playerModule from './player.js';
import * as duckModule from './duck.js';


export const pistol = {
    name: "pistol",
    damage: 1,
    fireRate: 1,
    reloadTime: 100,
    magazineSize: 10,
    numOfBullets: 10,
    price: 0,
    bulletImage: "/resources/sprites/bullets/pistolBullet.png",
    sound: "/resources/sounds/gunshot.wav",
    cursor: "/resources/sprites/crosshairs/pistolSight.png"
}

export const bow = {
    name: "bow",
    damage: 5,
    fireRate: 1,
    reloadTime: 50,
    magazineSize: 1,
    numOfBullets: 1,
    price: 3000,
    bulletImage: "/resources/sprites/bullets/arrow.png",
    sound: "/resources/sounds/bow.wav",
    cursor: "/resources/sprites/crosshairs/bowSight.png"
}

export const shotgun = {
    name: "shotgun",
    damage: 3,
    fireRate: 1,
    reloadTime: 200,
    magazineSize: 5,
    numOfBullets: 5,
    price: 1500,
    bulletImage: "/resources/sprites/bullets/shotgunBullet.png",
    sound: "/resources/sounds/shotgunshot.wav",
    cursor: "/resources/sprites/crosshairs/shotgunSight.png"
}

export const machinegun = {
    name: "machinegun",
    damage: 1,
    fireRate: 3,
    reloadTime: 300,
    magazineSize: 24,
    numOfBullets: 24,
    price: 2000,
    bulletImage: "/resources/sprites/bullets/machinegunBullet.png",
    sound: "/resources/sounds/akshot.wav",
    cursor: "/resources/sprites/crosshairs/akSight.png"
}

export const sniper = {
    name: "sniper",
    damage: 5,
    fireRate: 1,
    reloadTime: 500,
    magazineSize: 5,
    numOfBullets: 5,
    price: 5000,
    bulletImage: "/resources/sprites/bullets/sniperBullet.png",
    sound: "/resources/sounds/snipershot.wav",
    cursor: "/resources/sprites/crosshairs/sniperSight.png"
}

export const rocketLauncher = {
    name: "rocketLauncher",
    damage: 25,
    fireRate: 1,
    reloadTime: 1000,
    magazineSize: 1,
    numOfBullets: 1,
    price: 10000,
    bulletImage: "/resources/sprites/bullets/rocket.png",
    sound: "/resources/sounds/bazookashot.wav",
    cursor: "/resources/sprites/crosshairs/rocketSight.png"
}

















