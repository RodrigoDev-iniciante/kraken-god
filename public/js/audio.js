const audio = new Audio('assets/ambient.mp3');

audio.volume = 0.2;
audio.loop = true;

window.addEventListener('click',()=>{

    audio.play();

},{once:true});