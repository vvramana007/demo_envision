// Background Canvas: animated starfield
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let width = window.innerWidth, height = window.innerHeight;
canvas.width = width; canvas.height = height;
let stars = Array(250).fill().map(()=>({
  x: Math.random()*width,
  y: Math.random()*height,
  r: Math.random()*2+1,
  dx: Math.random()*0.5+0.1,
  dy: Math.random()*0.5+0.1
}));
function drawStars() {
  ctx.clearRect(0,0,width,height);
  for(const s of stars){
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,2*Math.PI);
    ctx.fillStyle = "#42e9fa";
    ctx.shadowColor = "#289cff";
    ctx.shadowBlur = 17;
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    s.x += s.dx * (Math.random()-0.5);
    s.y += s.dy * (Math.random()-0.5);
    if(s.x > width || s.x < 0) s.x = Math.random()*width;
    if(s.y > height || s.y < 0) s.y = Math.random()*height;
  }
}
function animateStars() { drawStars(); requestAnimationFrame(animateStars); }
animateStars();
window.addEventListener('resize',()=>{
  width = window.innerWidth; height = window.innerHeight;
  canvas.width = width; canvas.height = height;
});
