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