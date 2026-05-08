const text = 'A guild mais dominante do servidor';

const subtitle = document.querySelector('.subtitle');

let i = 0;

subtitle.innerHTML = '';

function type(){

  if(i < text.length){

    subtitle.innerHTML += text.charAt(i);

    i++;

    setTimeout(type,40);

  }

}

type();