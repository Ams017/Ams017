const canvas = document.getElementById("myCanvas");
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor(x, y, width, length, colour) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
        this.colour = colour;

    }
    draw() {
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.length);
        c.fillStyle = this.colour;
        c.stroke();
        c.fill();
    }
}

class Bullet {
    constructor(x, y, radius, colour, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.velocity = velocity;

    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.colour;
        c.stroke();
        c.fill();
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, 50, 'red');
player.draw();

window.addEventListener('click', (event) => {
    const bullet = new Bullet(event.clientX, event.clientY, 5, 'blue', null);
});

bullet.draw();

console.log(player);
