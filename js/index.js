const btn = document.querySelector('#btn');
const light = document.querySelector('#light');
btn.addEventListener("click",function(event){
    btn.classList.toggle('active');
    light.classList.toggle('on');

    }
);
