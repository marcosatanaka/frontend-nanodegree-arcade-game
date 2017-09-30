document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: { "axis": "x", "value": MOVEMENT_SIZE * -1 }, // left
        38: { "axis": "y", "value": MOVEMENT_SIZE * -1 }, // up
        39: { "axis": "x", "value": MOVEMENT_SIZE },      // right
        40: { "axis": "y", "value": MOVEMENT_SIZE }       // down
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function removeEnemy(enemy) {
    allEnemies.splice(allEnemies.indexOf(enemy), 1);
}

function addEnemy(enemy) {
    allEnemies.push(enemy);
}

function print(message) {
    document.getElementById("status").innerHTML = message;
}

var allEnemies = [
    new Enemy(ENEMY_INITIAL_X, FIRST_ENEMY_Y),
    new Enemy(ENEMY_INITIAL_X, SECOND_ENEMY_Y),
    new Enemy(ENEMY_INITIAL_X, THIRD_ENEMY_Y)
];

var player = new Player();
