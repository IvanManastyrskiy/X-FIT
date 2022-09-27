
let btnSignOut = document.querySelector('.exit__btn')

if (btnSignOut) {
  btnSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.location.href = 'index.html';
    localStorage.removeItem('currUser');


  })
}