const canvas = document.createElement('canvas');

document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;

const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = [];

for(let i=0;i<120;i++){

  particles.push({

    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*3

  });

}

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{

    ctx.beginPath();

    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

    ctx.fillStyle='rgba(255,0,0,0.5)';

    ctx.fill();

    p.y += 0.5;

    if(p.y > canvas.height){

      p.y = 0;

    }

  });

  requestAnimationFrame(animate);

}

animate();