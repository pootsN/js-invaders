class Enemy {
    x;
    y;
    health;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 3;

    }

    draw(context) {
        const image = new Image();
        image.src = 'poes.jpg';
        context.drawImage(image, this.x, this.y, 50, 50);
    }
}

class Bullet {
    color = 'red';
    x;
    y;
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } 

    move() {
        this.y -= 20;
    }

    draw(context) {
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            context.fill(); 
    }
}

const player = {
    x: 390,
    y: 580,

    move: function() {
        if(direction.up) {
            this.y -= 10;
        }
        if(direction.left) {
            this.x -= 10;
        }
        if(direction.down) {
            this.y += 10;
        }
        if(direction.right) {
            this.x += 10;
        }
    },

    draw: function(context) {
        context.fillStyle = 'aqua';
        context.fillRect(this.x, this.y, 20, 20);
    }
};

let bullets = [];

let enemies = [];

let direction = {
    up: false,
    down: false,
    left: false,
    right: false
};

function setup() {
    let enemy = new Enemy(30, 30);
    enemies.push(enemy);
}

function update() {
    player.move();

    for (let index = 0; index < bullets.length; index++) {
        bullets[index].move();  
    }
    
    draw();
}



function draw() {
    const canvas = document.getElementById('invaders-canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);
    
    context.font = "48px Verdana";
    context.fillStyle = 'white';
    context.fillText("Space Invaders", 10, 50);

    player.draw(context);

    for (let index = 0; index < bullets.length; index++) {
        bullets[index].draw(context); 
    }

    for (let index = 0; index < enemies.length; index++) {
        enemies[index].draw(context); 
    }
}

function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
            direction.left = true;
            break;
        case "ArrowRight":
            direction.right = true;
            break;
        case "ArrowUp":
            direction.up = true;
            break;
        case "ArrowDown":
            direction.down = true;
            break;
        case " ":
            let bullet = new Bullet(player.x + 10, player.y);
            bullets.push(bullet);
            break;
    }


}
function keyUp(event) {
    switch(event.key) {
        case "ArrowLeft":
            direction.left = false;
            break;
        case "ArrowRight":
            direction.right = false;
            break;
        case "ArrowUp":
            direction.up = false;
            break;
        case "ArrowDown":
            direction.down = false;
            break;
}
}

window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', keyUp)
setInterval(update, 50);