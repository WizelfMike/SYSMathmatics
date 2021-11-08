const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

context.beginpath();
context.fillStyle = "Yellow";
context.moveTo(20, 20);
context.lineTo(300, 300);
context.lineTo(580, 20);
context.closePath();
context.stroke();
context.fillStyle();