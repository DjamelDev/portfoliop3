let openModal = document.getElementById('modify-three');
let closeModal = document.getElementById('js-modal-close');

openModal.addEventListener('click', fncOpenModal);
closeModal.addEventListener('click', fncCloseModal);

// Ouvre la fenêtre
function fncCloseModal() {
  document.getElementById('app-modal');
  document.getElementById('modal').classList.remove('open');
}

// Ferme la fenêtre
function fncOpenModal() {
  document.getElementById('app-modal');
	document.getElementById('modal').classList.add('open');
}

const galleryGrid = document.querySelector(".gallery");
const worksApi = "http://localhost:5678/api/works";

//=======================================================================