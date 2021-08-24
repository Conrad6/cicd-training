var canvas = null;
var context = null;

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

const start = () => {};

document.addEventListener("DOMContentLoaded", onReady);
