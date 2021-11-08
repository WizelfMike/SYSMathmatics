const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(100,100,30,"yellow");

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    point.x += 1;
    point.y += 2;
    point.radius += 2;
    point.draw();
}