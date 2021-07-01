let signA = document.querySelector('.sub-a');
let logA = document.querySelector('.log-a');
let signUp = document.querySelector('.sign-up');
let login = document.querySelector('.login');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');

signA.addEventListener('click', () =>{
    signUp.style.top = 'auto';
    login.style.top = '-100%'
    login.style.transition = '1s'
    login.style.transition = '1s'
})
logA.addEventListener('click', () =>{
    login.style.top = 'auto';
    signUp.style.top = '-100%'
    login.style.transition = '1s'
    login.style.transition = '1s'
})
btn.addEventListener('click', function() {
    alert('OK ! THANK YOU')
})
btn1.addEventListener('click', function() {
    alert('OK ! THANK YOU')
})

