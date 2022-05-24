let card = document.querySelector('.card');
let stock = document.querySelector('.stock');
let check = document.querySelector('.check');
let trainning = document.querySelector('.trainning');
let us = document.querySelector('.us');
let buycard = document.querySelector('.content-info__btn');
let choose = document.querySelector('.our__services-blocks');
let gyms = document.querySelector('.our__clubs_line-block');
let win2 = document.querySelector('.dm-modal2');
let win3 = document.querySelector('.dm-modal3');




card.addEventListener('click', function () {
    if (localStorage.getItem('currUser') !== null) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win2.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win2.classList.remove('active')
        }, 4000);
    }
})

stock.addEventListener('click', function () {
    if (localStorage.getItem('currUser') == 1) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win3.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win3.classList.remove('active')
        }, 4000);
    }
})

check.addEventListener('click', function () {
    if (localStorage.getItem('currUser') == null  ) {

        setTimeout(function () {
            win2.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win2.classList.remove('active')
        }, 4000);

        
    }
   
    else if(localStorage.getItem('currUser') !== null  & JSON.parse(localStorage.currUser).card == "Оформлена"){
        
        window.location = '/check-up.html'
    }
    else {
        alert("карта не оформлена")
    }
})

trainning.addEventListener('click', function () {
    if (localStorage.getItem('currUser') == 1) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win3.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win3.classList.remove('active')
        }, 4000);
    }
})

us.addEventListener('click', function () {
    if (localStorage.getItem('currUser') == 1) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win3.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win3.classList.remove('active')
        }, 4000);
    }
})


buycard.addEventListener('click', function () {
    if (localStorage.getItem('currUser') !== null) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win2.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win2.classList.remove('active')
        }, 4000);
    }
})
choose.addEventListener('click', function () {
    if (localStorage.getItem('currUser') !== null) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win2.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win2.classList.remove('active')
        }, 4000);
    }
})
gyms.addEventListener('click', function () {
    if (localStorage.getItem('currUser') !== null) {

        window.location = '/clubs-cart-registration.html'


    }
    else {
        setTimeout(function () {
            win2.classList.add('active')
       
        }, 10);
        setTimeout(function () {
            win2.classList.remove('active')
        }, 4000);
    }
})
