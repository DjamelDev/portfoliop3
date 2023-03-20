// let modal = null;

// const openModal = function(e) {
//     e.preventDefault();
//     const target = document.querySelector(e.target.getAttribute('href'));
//     target.style.display = null;
//     target.removeAttribute('aria-hidden')
//     modal = target
//     modal.addEventListener('click', closeModal)
//     modal.querySelector('.btn-close').addEventListener('click', closeModal)
// }

// const closeModal = function (e) {
//     if (modal === null) return 
//     e.preventDefault();
//     modal.style.display = 'none';
//     modal.setAttribute('aria-hidden', 'true');
//     modal = target
//     modal.removeEventListener('click', closeModal)
//     modal = null;
// }

// document.querySelectorAll('.modal-js').forEach(a => {
//     a.addEventListener('click', openModal);
// })


let buttonSpan = document.querySelector('span.modal-js');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.btn-close');


buttonSpan.addEventListener("click", function(){
  modal.style.display = "flex";
  modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
});

closeModal.addEventListener("click", function() {
  if (modal === null ) return modal;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.querySelector('.btn-close').removeEventListener('click', closeModal);
  modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
  modal = null;
})