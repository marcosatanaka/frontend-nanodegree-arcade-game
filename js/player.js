var Player = function() {
    this.sprite = PLAYER_SPRITE;
    this.x = PLAYER_INITIAL_X;
    this.y = PLAYER_INITIAL_Y;
};

Player.prototype.update = function() {
};

Player.prototype.kill = function() {
	print("Died!");
    this.x = PLAYER_INITIAL_X;
    this.y = PLAYER_INITIAL_Y;
};

Player.prototype.checkIfWon = function() {
	if (this.y == Y_POSITION_TO_WON) {
		print("Won!");
	}
};

Player.prototype.killIfTouchedEnemy = function() {
	allEnemies.forEach(function(enemy) {
        if (this.x >= (enemy.x - ENEMY_HALF_WIDTH) &&
            this.x <= (enemy.x + ENEMY_HALF_WIDTH) &&
            this.y >= (enemy.y - ENEMY_HALF_HEIGHT) &&
            this.y <= (enemy.y + ENEMY_HALF_HEIGHT)) {
            this.kill();
        }
    }, this);
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key && this.insideScenario(key)) {
        this[key.axis] += key.value;
        this.killIfTouchedEnemy();
        this.checkIfWon();
    }
};

Player.prototype.insideScenario = function(key) {
	var nextPositionOnAxis = this[key.axis] + key.value;
    return nextPositionOnAxis > 0 &&
    		nextPositionOnAxis <= 470
};
