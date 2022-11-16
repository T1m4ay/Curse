const toggle = document.getElementById('toggleDark');
const c2 = document.getElementById('c2')
const body = document.querySelector('body');
const c1 = document.getElementById('c1');

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
            c2.style.background = 'white';
            c2.style.transition = '2s';
            c1.style.background = '#FFFFFF';
            c1.style.transition = '2s';
            document.querySelector('i').classList.remove('fa-moon-o');
            document.querySelector('i').classList.add('fa-sun-o')
        }
        else{
            document.querySelector('body').classList.remove('dark');
            body.style.background = '#292929';
            body.style.color = '#d0d0d0';
            c2.style.background = '#292929';
            c1.style.background = '#292929';

            document.querySelector('i').classList.remove('fa-sun-o');
            document.querySelector('i').classList.add('fa-moon-o');
        }
    }
    catch (err){}
}
addDark();



const openbp = document.getElementById('logi');
const closebp = document.getElementById('close');
const bp = document.getElementById('bp');

openbp.addEventListener('click', function (){
    bp.classList.add('open')
})

closebp.addEventListener('click', function (){
    bp.classList.remove('open')
})