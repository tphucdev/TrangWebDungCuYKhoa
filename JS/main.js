
const modalIconUser = document.querySelector('.header__navbar-action__icon-user');
const modalHidenUser = document.querySelector('.header__navbar-action__icon-user-ul');
const main = document.querySelector('body');

modalIconUser.onclick = function(e) {
    modalHidenUser.classList.toggle('show');
    e.stopPropagation();
}

main.onclick = function(e) {
    modalHidenUser.classList.remove('show');
}

modalHidenUser.onclick =function(e) {
    e.stopPropagation();
}