var canvas = null;
var context = null;
var mousePosition = { x: undefined, y: undefined };

const onReady = () => {
  init();
  start();
};

const init = () => {
  canvas = document.querySelector("canvas");
  context = canvas.getContext("2d");
  window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};

const start = () => {
  const particleCount = 200;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const originX = canvas.width * 0.5;
    const originY = canvas.height * 0.5;
    const color = "blue";
    const d = Math.random() * 100;
    const vel = 2;
    particles.push(new Particle(originX, originY, color, 50, d, 0.5));
  }

  particles.forEach((p) => p.animate());
};

class Particle {
  constructor(originX, originY, color, radians, distanceFromOrigin, vel) {
    this.originX = originX;
    this.originY = originY;
    this.color = color;
    this.radians = radians;
    this.distanceFromOrigin = distanceFromOrigin;
    this.x = originX;
    this.y = originY;
    this.vel = vel;
  }

  update() {
    this.radians += this.vel;
    this.x = this.x + Math.cos(this.radians) * 100;
    this.y = this.y + Math.sin(this.radians) * 100;
    this.draw();
  }

  animate() {
    context.fillStyle = `rgba(255,255,255,.5)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.update();
    requestAnimationFrame(() => this.animate());
  }

  draw() {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.fillStyle = this.color;
    context.arc(this.x, this.y, 5, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }
}

document.addEventListener("DOMContentLoaded", onReady);
