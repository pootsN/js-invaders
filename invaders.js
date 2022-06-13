const player = {
    x: 390,
    y: 580
};

let bullets = [];

let direction = {
    up: false,
    down: false,
    left: false,
    right: false
};

function setup() {

}

function update() {
    if(direction.up) {
        player.y -= 10;
    }
    if(direction.left) {
        player.x -= 10;
    }
    if(direction.down) {
        player.y += 10;
    }
    if(direction.right) {
        player.x += 10;
    }

    for (let index = 0; index < bullets.length; index++) {
        bullets[index].y -=5;  
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

    context.fillStyle = 'aqua';
    context.fillRect(player.x, player.y, 20, 20);

    for (let index = 0; index < bullets.length; index++) {
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(bullets[index].x, bullets[index].y, 5, 0, 2 * Math.PI);
        context.fill();
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
            bullets.push(  {
                x: player.x + 10,
                y: player.y
            } );
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