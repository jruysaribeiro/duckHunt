const pauseControl = document.getElementById('pause');

        // pause the game
 pauseControl.addEventListener('keydown', (event) => {
    console.log('pause clicked');
    if(event.key === 'Escape') {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('pause').style.display = 'block';
    }
});
        // get back to the game by clicking Escape
pauseControl.addEventListener('keydown', (event) => {  
    if(event.key === 'Escape') {
        console.log('escape to resume clicked');
        document.getElementById('pause').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    }
});
        // get back to the game by clicking resume
pauseControl.addEventListener('click', () => {
    console.log('resume clicked');
    document.getElementById('pause').style.display = 'none';
    document.getElementById('game').style.display = 'block';
});

const settingControls = document.getElementById('settings');

        // go to settings on pause menu
settingControls.addEventListener('click', () => {
    console.log('settings clicked');
    document.getElementById('pause').style.display = 'none';
    document.getElementById('settingsView').style.display = 'block';
});

const exitControls = document.getElementById('exit');

        // exit the game on pause menu
exitControls.addEventListener('click', () => {
    console.log('exit clicked');
    document.getElementById('pause').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
});



