
//const Switchtoggle = React.querySelector('input[type="checkbox"]');
const Switchtoggle = document.querySelector('#sw');
const toggleicon = document.querySelector("#toggle-icon");
const nav = document.querySelector('#nav');
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')


function switchmode(e){
    if(e.target.checked){
            NightMode();
            ImageMode('nigth');
            document.documentElement.setAttribute('data-theme','dark')
    }else {
            DayMode();
            ImageMode('day');
            document.documentElement.setAttribute('data-theme','light')
    }
}

Switchtoggle.addEventListener('change', switchmode);

function NightMode(){
        toggleicon.children[0].textContent = "โหมดกลางคืน ";
        toggleicon.children[1].classList.replace('fa-sun', 'fa-moon')
        nav.style.backgroundColor = "#041353"
        ImageMode('nigth')
}

function DayMode(){
        toggleicon.children[0].textContent = "โหมดกลางวัน ";
        toggleicon.children[1].classList.replace('fa-moon', 'fa-sun')
        nav.style.backgroundColor = "#3053ee"
        ImageMode('day')
}
function ImageMode(x){
        img1.src =`Img/web-${x}.svg `
        img2.src =`Img/mobile-${x}.svg `
        img3.src =`Img/net_${x}.svg `
}
