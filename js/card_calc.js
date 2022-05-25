const duration = Array.from(document.querySelectorAll(".optDay"));
const freeze = Array.from(document.querySelectorAll(".optFreeze"));
const training = Array.from(document.querySelectorAll(".optTrainning"));
const gym = Array.from(document.querySelectorAll(".optGym"));
const total = document.querySelector("#total");
let currUser = JSON.parse(localStorage.getItem('currUser'));
let allUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
const stockBtn = document.querySelector(".menu__link.stock");
const checkBtn = document.querySelector(".menu__link.check");
const trainningBtn = document.querySelector(".menu__link.trainning");
const usBtn = document.querySelector(".menu__link.us");
let win3 = document.querySelector('.dm-modal3');


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







/*--Длительность--*/
duration.forEach((el) => {
    el.addEventListener("click", durationUpdate);
});

function durationUpdate(e) {
    currentSet.duration = e.target.id;
    updatePrice();
}
/*--Заморозка--*/
freeze.forEach((el) => {
    el.addEventListener("click", freezeUpdate);
});

function freezeUpdate(e) {
    currentSet.freeze = e.target.id;
    updatePrice();
}
/*--перс тренировки--*/
training.forEach((el) => {
    el.addEventListener("click", trainingUpdate);
});

function trainingUpdate(e) {
    currentSet.training = e.target.id;
    updatePrice();
}
/*--зал--*/
gym.forEach((el) => {
    el.addEventListener("click", gymUpdate);
});

function gymUpdate(e) {
    currentSet.gym = e.target.id;
    updatePrice();
}


  
function updatePrice() {
    let durationPrice = currentSet.getDurationPrice();
    let freezePrice = currentSet.getFreezePrice();
    let trainingPrice = currentSet.getTrainingPrice();
    let gymPrice = currentSet.getGymPrice();
    let totalPrice = durationPrice + freezePrice + trainingPrice + gymPrice;
    let AllClearPrice = totalPrice.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    total.value = AllClearPrice + "р.";

}
const priceInfo = {
    duration: {
        null: 0,
        short_day: 15000,
        medium_day: 20750,
        long_day: 25750,
    },
    freeze: {
        null: 0,
        short_freeze: 2750,
        medium_freeze: 3500,
        long_freeze: 5700,
    },
    training: {
        null: 0,
        short_trainning: 1500,
        medium_trainning: 5500,
        long_trainning: 10750,
    },
    gym: {
        null: 0,
        short_gym: 1000,
        medium_gym: 2000,
        long_gym: 3000,
    },
};
let currentSet = {
    duration: "null",
    freeze: "null",
    training: "null",
    gym: "null",
    getDurationPrice() {
        return priceInfo.duration[this.duration]

    },
    getFreezePrice() {
        return priceInfo.freeze[this.freeze]
    },
    getTrainingPrice() {
        return priceInfo.training[this.training]
    },
    getGymPrice() {
        return priceInfo.gym[this.gym]
    },
};

function reg_card() {
    let durationPrice = currentSet.getDurationPrice();
    let freezePrice = currentSet.getFreezePrice();
    let trainingPrice = currentSet.getTrainingPrice();
    let gymPrice = currentSet.getGymPrice();

    if (durationPrice != 0 & freezePrice != 0 & trainingPrice != 0 & gymPrice != 0 & currUser.card =="-") {

        let currUser = JSON.parse(localStorage.getItem('currUser'));
        let gymPrice = currentSet.getGymPrice();
        let mygym = gymPrice / 1000
        let user = {
            id: currUser.id,
            name: currUser.name,
            email: currUser.email,
            password: currUser.password,
            age:currUser.age,
            gym:mygym,
            card:"Оформлена",
            check:currUser.check    
        }

        allUsers.push(user);
        localStorage.setItem(`users`, JSON.stringify(allUsers))
        localStorage.setItem(`currUser`, JSON.stringify(user))

        

        total.value = currUser.card;
        setTimeout(function () {
            window.location.href = '#win1';
        }, 100);
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 5000);
    }
    
    else if(currUser.card =="Оформлена"){
        alert("У вас уже есть карта")

    }
        else {
        alert("ошибка выберите все пункты");
    };
}


