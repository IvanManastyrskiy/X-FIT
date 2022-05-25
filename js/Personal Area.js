const AgeOut = document.querySelector("#Age");
const GymOut = document.querySelector("#gymNum");
const CardOut = document.querySelector("#CardRegistration");
const NameOut = document.querySelector("#myName");
const LogwOut = document.querySelector("#login");
const PasswOut = document.querySelector("#password");
const CheckOut = document.querySelector("#checkUp");
const cardBtn = document.querySelector(".menu__link.card");
const stockBtn = document.querySelector(".menu__link.stock");
const checkBtn = document.querySelector(".menu__link.check");
const trainningBtn = document.querySelector(".menu__link.trainning");
const usBtn = document.querySelector(".menu__link.us");


let name = JSON.parse(localStorage.currUser).name
let age = JSON.parse(localStorage.currUser).age
let login = JSON.parse(localStorage.currUser).email
let password = JSON.parse(localStorage.currUser).password
let gym = JSON.parse(localStorage.currUser).gym
let card = JSON.parse(localStorage.currUser).card
let check = JSON.parse(localStorage.currUser).check
let win3 = document.querySelector('.dm-modal3');
NameOut.value = name
CardOut.value = card
AgeOut.value = age
GymOut.value = gym
CheckOut.value = check


cardBtn.addEventListener('click',function(){
    window.location.href = '/clubs-cart-registration.html';
})
stockBtn.addEventListener('click',function(){
    setTimeout(function () {
        win3.classList.add('active')
   
    }, 10);
    setTimeout(function () {
        win3.classList.remove('active')
    }, 4000);
})
checkBtn.addEventListener('click',function(){
    if(localStorage.getItem('currUser') !== null  & JSON.parse(localStorage.currUser).card == "Оформлена"){
        
        window.location = '/check-up.html'
    }
    else {
        alert("карта не оформлена")
    }
})
trainningBtn.addEventListener('click',function(){
    setTimeout(function () {
        win3.classList.add('active')
   
    }, 10);
    setTimeout(function () {
        win3.classList.remove('active')
    }, 4000);
})
usBtn.addEventListener('click',function(){
    setTimeout(function () {
        win3.classList.add('active')
   
    }, 10);
    setTimeout(function () {
        win3.classList.remove('active')
    }, 4000);
})
// const gay = document.querySelector('.gay')
// gay.addEventListener('change',function(){
//     console.log(gay.value)
//     document.getElementById('avatar').src=gay.value

// })