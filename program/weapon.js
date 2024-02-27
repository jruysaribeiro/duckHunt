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
    pistolSound: "/resources/sounds/gunshot.wav",
    pistolCursor: "/resources/sprites/cursors/pistolCursor.png"
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
    shotgunSound: "/resources/sounds/shotgun.wav",
    shotgunCursor: "/resources/sprites/cursors/shotgunCursor.png"
}

export const machinegun = {
    name: "machinegun",
    damage: 1,
    fireRate: 3,
    reloadTime: 3,
    magazineSize: 30,
    numOfBullets: 30,
    price: 200,
    bulletImage: "/resources/sprites/bullets/machinegunBullet.png",
    machinegunSound: "/resources/sounds/machinegun.wav",
    machinegunCursor: "/resources/sprites/cursors/machinegunCursor.png"
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
    sniperSound: "/resources/sounds/sniper.wav",
    sniperCursor: "/resources/sprites/cursors/sniperCursor.png"
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
    rocketSound: "/resources/sounds/rocket.wav",
    rocketCursor: "/resources/sprites/cursors/rocketCursor.png"
}


export let weapon = pistol;
export let gunshot = new Audio(weapon.pistolSound);















