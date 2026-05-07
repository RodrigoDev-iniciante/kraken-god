window.addEventListener('load',()=>{

    setTimeout(()=>{

        const loader = document.getElementById('loader');

        loader.style.opacity = '0';
        loader.style.transition = '1s';

        setTimeout(()=>{
            loader.remove();
        },1000);

    },2500);

});