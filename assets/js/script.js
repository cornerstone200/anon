'use strict';

//modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

//modal function

const modalCloseFunc = function () {
    modal.classList.add('closed')
}

//modal eventlistener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc)




// notification toast variables

const notificationToast = document.querySelector('[data-toast]');
const toastClosebtn = document.querySelector('[data-toast-close]');


// notification toast eventlistener

toastClosebtn.addEventListener('click', function () {
    notificationToast.classList.add('closed'); 
});

/// mobile menu variable
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('menu-close-btn');
console.log('menu-close-btn')

for (
    let i = 0; 1 < mobileMenuOpenBtn, length;i++
){
    //mobile menu function
    function mobileMenuCloseFunc() {
        console.log('menu-close-btn')
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }
    mobileMenuOpenBtn[i].addEventListener
        ('click', function () {
            mobileMenu[i].classList.add('active');
            overlay.classList.add('active')
        });
    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
    }
    mobileMenuClosebtn.addEventListener('click', function () {
        mobileMenuCloseBtn.classList.add('closed'); 
    });
    

