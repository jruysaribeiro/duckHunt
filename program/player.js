export const player = {
    score: 0
};


localStorage.setItem('score', '0');

export const updateScore = function(value) {
    player.score += value;
    localStorage.setItem('score', player.score);
    console.log(player.score);
}

export const getScore = function() {
    let score = localStorage.getItem('score');
    player.score = parseInt(score);
    return player.score;
}

export const updateLocalScore = function() {
    localStorage.setItem('score', player.score);
}

