// Import stylesheets
import './style.css';

var canvas = null;
var context = null;

const onReady = () => {
  initCanvas();
};

const initCanvas = () => {
  canvas = document.querySelector('canvas');
  context = canvas.getContext('2d');
  window.addEventListener('resize', onWindowResize);
  onWindowResize();
};

const onWindowResize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};

document.addEventListener('DOMContentLoaded', onReady);
