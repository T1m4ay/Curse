const toggle = document.getElementById('logo');
const body = document.querySelector('body');

toggle.addEventListener("click", function (){
    if (localStorage.getItem('theme') === 'dark'){
        localStorage.removeItem('theme');
    }
    else (
        localStorage.setItem('theme', 'dark')
    )
    addDark();
})

function addDark(){
    try{
        if (localStorage.getItem('theme') === 'dark'){
            document.querySelector('body').classList.add('dark');
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
            document.querySelector('i').classList.remove('fa-moon-o');
            document.querySelector('i').classList.add('fa-sun-o')
        }
        else{
            document.querySelector('body').classList.remove('dark');
            body.style.background = '#292929';
            body.style.color = '#d0d0d0';

            document.querySelector('i').classList.remove('fa-sun-o');
            document.querySelector('i').classList.add('fa-moon-o');
        }
    }
    catch (err){}
}
addDark();

const log = document.getElementById('logining');
const login = document.getElementById('login');
const clos = document.getElementById('close')

log.addEventListener('click',function() {
    login.classList.add('on')
})
clos.addEventListener('click',function() {
    login.classList.remove('on')
})