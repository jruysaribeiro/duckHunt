const startControl = document.getElementById('start');

startControl.addEventListener('click', () => {
    console.log('start clicked');
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
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
                document.getElementById('game').style.display = 'flex';
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
    document.getElementById('game').style.display = 'flex';
}
);


