const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myArray = [];

let background = new GraphBackground();

canvas.width = width;
canvas.height = height;

background.draw();

let point = new Point(500,500,50, "yellow", true);

point.draw();
