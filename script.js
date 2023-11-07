
//const Switchtoggle = React.querySelector('input[type="checkbox"]');
const Switchtoggle = document.querySelector('#sw');
const toggleicon = document.querySelector("#toggle-icon");
const nav = document.querySelector('#nav');
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')


function switchmode(e){
    if(e.target.checked){
            console.log("Night Mode")
    }else {
            console.log("Day Mode")
    }
}

Switchtoggle.addEventListener('change', switchmode);