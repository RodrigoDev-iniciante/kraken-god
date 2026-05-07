window.addEventListener('mousemove',(e)=>{

    const hero = document.querySelector('.hero');

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

});