let text = document.getElementById('text');
let balloon_2 = document.getElementById('balloon_2');
let btn = document.getElementById('btn');


window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.03 + '%';

    btn.style.top = 50 + value * -0.006 + '%';

    balloon_2.style.top = value * 2 + 'px';
    balloon.style.top = value * 3 + 'px';




});