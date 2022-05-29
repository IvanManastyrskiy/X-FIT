let signinBg = document.querySelector('.signin__bg')
let signinModal = document.querySelector('.signin__modal')
let openSignin = document.querySelectorAll('.signIn__btn')
let closeSignin = document.querySelector('.signin__navigation-close')
let users = JSON.parse(localStorage.getItem('users'));
let isLoginTrue = false;

openSignin.forEach((elem) => {
    elem.addEventListener('click', function (event) {

        event.preventDefault()
        signinBg.classList.add('active')
        signinModal.classList.add('active')
        signupBg.classList.remove('active')
        signupModal.classList.remove('active')

    })
})

closeSignin.addEventListener('click', function () {
    signinBg.classList.remove('active')
    signinModal.classList.remove('active')
})


let signinBtn = document.querySelector('.btn__form-signin')
let isError = false
const setError = (element, message) => {
    let inputControl = document.querySelector('.button');
    console.log(inputControl)
    const errorDisplay = inputControl.querySelector('.error');
    console.log(errorDisplay)

    errorDisplay.textContent = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.textContent = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


signinBtn.addEventListener('click', function(e){
    e.preventDefault()
    let username = document.getElementById('username_signin').value;
    let password = document.getElementById('password__signin').value;
    if(users !== null){
    users.forEach((users) => {
        if (users.name == username){
            
            if (users.password == password){
                setError(password, '');
                localStorage.setItem(`currUser`, JSON.stringify(users));
                window.location = '/myCabinet.html'
            } else{
                setError(password, 'Неверные Данные');
            }
        } else{
            setError(username, 'Неверные Данные');
        }
    })
    }
    else{setError(username, 'Неверные Данные');}

})



let reglog = document.querySelector('.reglog__btns')
let acc = document.querySelector('.account__btns')
function examination() {
    if (localStorage.getItem('currUser') !== null) {
        reglog.classList.add('active')
        acc.classList.add('active')



    }
}
examination();