'use strict';
const modal = document.querySelector('.modal');
const btnopenModal = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnopenModal.length; i++) {
  btnopenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const showM = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btncloseModal.addEventListener('click', showM);
// function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
overlay.addEventListener('click', closeModel);
// function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hiddent')) closeModel();
});
