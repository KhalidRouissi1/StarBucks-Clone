const btn = document.querySelector('#hambrgeur-button');
let shower = document.querySelector('.mobile-menu');
function navToggle(){
    btn.classList.toggle('open')
    shower.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll');
 
}



btn.addEventListener('click',navToggle)

