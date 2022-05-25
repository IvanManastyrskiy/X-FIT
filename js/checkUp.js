const genetics = document.querySelector('.genetics')
const bioniq = document.querySelector('.bioniq')
const checkme = document.querySelector('.checkme')
let currUser = JSON.parse(localStorage.getItem('currUser'));
let allUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

const stockBtn = document.querySelector(".menu__link.stock");
const trainningBtn = document.querySelector(".menu__link.trainning");
const usBtn = document.querySelector(".menu__link.us");
let win3 = document.querySelector('.dm-modal3');
let win4 = document.querySelector('.dm-modal4');



stockBtn.addEventListener('click', function () {
    setTimeout(function () {
        win3.classList.add('active')

    }, 10);
    setTimeout(function () {
        win3.classList.remove('active')
    }, 4000);
})
trainningBtn.addEventListener('click', function () {
    setTimeout(function () {
        win3.classList.add('active')

    }, 10);
    setTimeout(function () {
        win3.classList.remove('active')
    }, 4000);
})
usBtn.addEventListener('click', function () {
    setTimeout(function () {
        win3.classList.add('active')

    }, 10);
    setTimeout(function () {
        win3.classList.remove('active')
    }, 4000);
})













genetics.addEventListener('click', function () {
    if (currUser.check == "-") {
        let user = {
            id: currUser.id,
            name: currUser.name,
            email: currUser.email,
            password: currUser.password,
            age: currUser.age,
            gym: currUser.gym,
            card: currUser.card,
            check: "Genetics",
        }

        allUsers.push(user);
        localStorage.setItem(`users`, JSON.stringify(allUsers))
        localStorage.setItem(`currUser`, JSON.stringify(user))
        setTimeout(function () {
            window.location.href = '#win1';
        }, 1);
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 4000);
    }

    else {
  
        setTimeout(function () {
            win4.classList.add('active')
    
        }, 10);
        setTimeout(function () {
            win4.classList.remove('active')
        }, 4000);
        
    }

})
checkme.addEventListener('click', function () {
    if (currUser.check == "-") {
        let user = {
            id: currUser.id,
            name: currUser.name,
            email: currUser.email,
            password: currUser.password,
            age: currUser.age,
            gym: currUser.gym,
            card: currUser.card,
            check: "CheckMe",
        }

        allUsers.push(user);
        localStorage.setItem(`users`, JSON.stringify(allUsers))
        localStorage.setItem(`currUser`, JSON.stringify(user))
        setTimeout(function () {
            window.location.href = '#win1';
        }, 1);
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 4000);
    }
    else {
        setTimeout(function () {
            win4.classList.add('active')
    
        }, 10);
        setTimeout(function () {
            win4.classList.remove('active')
        }, 4000);
    }

})
bioniq.addEventListener('click', function () {
    if (currUser.check == "-") {
        let user = {
            id: currUser.id,
            name: currUser.name,
            email: currUser.email,
            password: currUser.password,
            age: currUser.age,
            gym: currUser.gym,
            card: currUser.card,
            check: "Bioniq",
        }

        allUsers.push(user);
        localStorage.setItem(`users`, JSON.stringify(allUsers))
        localStorage.setItem(`currUser`, JSON.stringify(user))
        
        setTimeout(function () {
            window.location.href = '#win1';
        }, 1);
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 4000);
    }
    else {
        setTimeout(function () {
            win4.classList.add('active')
    
        }, 10);
        setTimeout(function () {
            win4.classList.remove('active')
        }, 4000);
    }

})