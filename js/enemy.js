var Enemy = function(x, y) {
    this.sprite = ENEMY_SPRITE;
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 10) + 1);
};

Enemy.prototype.update = function(dt) {
    this.x += MOVEMENT_SIZE * dt * this.speed;
    this.killTouchedPlayer();
    this.rebornIfLeftScenario();
};

Enemy.prototype.killTouchedPlayer = function() {
    if (player.x >= (this.x - ENEMY_HALF_WIDTH) &&
        player.x <= (this.x + ENEMY_HALF_WIDTH) &&
        player.y >= (this.y - ENEMY_HALF_HEIGHT) &&
        player.y <= (this.y + ENEMY_HALF_HEIGHT)) {
        player.kill();
    }
}

Enemy.prototype.rebornIfLeftScenario = function() {
    if (this.x > ENEMY_FINAL_X) {
        removeEnemy(this);
        addEnemy(new Enemy(ENEMY_INITIAL_X, this.y));
    }
}

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
