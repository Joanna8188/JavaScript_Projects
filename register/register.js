'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  console.log("Click!")
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
    console.log("Click!")
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

function myFunction() {
  document.getElementById("registrationForm").reset();
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
