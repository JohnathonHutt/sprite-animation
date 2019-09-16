//jshint esversion:6

const alienImage = new Image();
alienImage.src = "images/alien.png";

alienImage.onload = function() {
  init();
};

// function Sprite(img, h, w, scale, currFrame, frames, canvasX, canvasY) {
//   this.img = img,
//   this.h = h,
//   this.w = w,
//   this.scale = scale,
//   this.currFrame,
//   this.frames = frames,
//   this.canvasX = canvasX,
//   this.canvasY = canvasY,
//   this.scaledW = w * scale,
//   this.scaleH = h * scale,
//   this.drawFrame = function() {
//     ctx.drawImage(this.img, this.currFrame*this.w, 0, this.w, this.h, this.canvasX, this.canvasY, this.scaledW, this.scaledH);
//   }
// }

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let counter = 0;
let frameRate = 60/4;
let frame = 1;

const scale = 2;
const w = 32;
const h = 32;
const scaledW = scale * w;
const scaledH = scale * h;

function drawFrame(frame, canvasX, canvasY) {
    ctx.drawImage(alienImage, frame*w, 0, w, h, canvasX, canvasY, scaledW, scaledH);
}

function init() {
  counter += 1;
  if (counter%frameRate === 0) {
     if (frame === 9) {
       frame = 0;
     } else {
       frame += 1;
     }
   }
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawFrame(frame, 0, 0);

   requestAnimationFrame(init);
}
