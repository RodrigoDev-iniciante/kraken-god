const hoverAudio = new Audio('assets/hover.mp3');

hoverAudio.volume = 0.1;

const buttons = document.querySelectorAll('button');

buttons.forEach(button=>{

  button.addEventListener('mouseenter',()=>{

    hoverAudio.currentTime = 0;

    hoverAudio.play();

  });

});