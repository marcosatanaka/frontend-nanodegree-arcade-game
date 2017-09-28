var MOVEMENT_SIZE = 90;

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 10) + 1);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += MOVEMENT_SIZE * dt * this.speed;
    if (this.x > 520) {
        allEnemies.splice(allEnemies.indexOf(this), 1);
        allEnemies.push(new Enemy(-100, this.y));
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function() {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key) {
        this[key.axis] += key.value;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-100, 60), new Enemy(-100, 145), new Enemy(-100, 225)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: { "axis": "x", "value": MOVEMENT_SIZE * -1 },
        38: { "axis": "y", "value": MOVEMENT_SIZE * -1 },
        39: { "axis": "x", "value": MOVEMENT_SIZE },
        40: { "axis": "y", "value": MOVEMENT_SIZE }
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
