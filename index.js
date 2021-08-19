var canvas = null;
var context = null;

const onReady = () => {
  init();
  renderCanvas();
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

const renderCanvas = () => {
  const particle = new Particle(100, 100, "#f1c", 20, 15);
  drawParticles([particle]);
};

const drawParticles = (particles) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    drawParticle(particles[i]);
  }
  requestAnimationFrame(() => drawParticles(particles));
};

const drawParticle = (particle) => {
  onParticleDraw(particle);

  context.beginPath();
  context.moveTo(particle.x, particle.y);
  context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  context.fillStyle = particle.color;
  context.fill();
};

const onParticleDraw = (particle) => {
  const originX = canvas.width / 2;
  const originY = canvas.height / 2;

  const x = Math.abs(particle.x - originX);
  const y = Math.abs(particle.y - originY);

  const revRadius = Math.sqrt(x * x, y * y);

  if (particle.x > revRadius || particle.x < canvas.width / 2) {
    particle.speed = -1 * particle.speed;
  }

  particle.x += particle.speed;
  particle.y = revRadius * Math.sin(particle.x);
};

class Particle {
  constructor(x, y, color, radius, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.speed = speed;
  }
}

document.addEventListener("DOMContentLoaded", onReady);
