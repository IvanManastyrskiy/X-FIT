let LogOut = document.querySelector("#login");
let PassOut = document.querySelector("#password");


var isPasswordShow = true;
let openEye = document.querySelector('.openEye')
let controlEye = document.querySelector('.controlEye')
let controlEyeO = document.querySelector('.controlEyeO')

openEye.addEventListener("click", function () {
    if (isPasswordShow) {
        controlEye.classList.add('active')
        controlEyeO.classList.add('active')
        let login = JSON.parse(localStorage.currUser).email
        let password = JSON.parse(localStorage.currUser).password
        LogOut.value = login
        PassOut.value = password
        isPasswordShow = false;
    }
    else {
        controlEye.classList.remove('active')
        controlEyeO.classList.remove('active')
        let login = JSON.parse(localStorage.currUser).email
        let password = JSON.parse(localStorage.currUser).password
        LogOut.value = "•••••••••••"
        PassOut.value = "•••••••••••"
        isPasswordShow = true;
    }
});