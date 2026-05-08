window.addEventListener('mousemove',(e)=>{

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.backgroundPosition = `${x*10}px ${y*10}px`;

});