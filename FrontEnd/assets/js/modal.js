let openModal = document.getElementById('modify-three');
let closeModal = document.querySelector('.js-modal-close');
let modal = document.getElementById('modal');
let content = [];


openModal.addEventListener('click', fncOpenModal);
closeModal.addEventListener('click', fncCloseModal);


// appendChild(content);


// Ouvre la fenêtre
function fncOpenModal(className) {
  document.getElementById('app-modal');
	document.getElementById('modal').classList.add('open');
  modal.addEventListener('click', fncCloseModal);
  modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
}

// Ferme la fenêtre
function fncCloseModal() {
  if (modal === null) return;
  document.getElementById('app-modal');
  document.getElementById('modal').classList.remove('open');
  modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
 }


const stopPropagation = function (e) {
  e.stopPropagation();
}

window.addEventListener('keydown', function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    fncCloseModal(e);
  }
})

// ----------------------------------------------------------------------

const modalFlex = document.querySelector(".modal-flex");
const connectApi = "http://localhost:5678/api/works";

  async function getWorks() {
    try {
      const response = await fetch(connectApi);
      const data = await response.json();
      
  
      for (let i in data) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        const poubelle = document.createElement("i");
        poubelle.classList.add('fa-solid', 'fa-trash-can');
        poubelle.setAttribute("data-id", data[i].id);

        figure.setAttribute("data-id", data[i].id);
        img.setAttribute("crossorigin", "anonymous");
        img.setAttribute("src", data[i].imageUrl);
        figcaption.innerHTML = "éditer";
        
  
        figure.append(poubelle);
        figure.append(img, figcaption);
        modalFlex.append(figure);

        // METHODE DELETE

        poubelle.addEventListener("click", function() {
          const id = poubelle.getAttribute("data-id");
          console.log(figure);
          figure.remove(id);
          deleteWorks(id);
          alert(`Figure supprimée avec succès !`);
        })
      
        
        function deleteWorks(id) {
          fetch(`http://localhost:5678/api/works/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'authorization': "Bearer " + sessionStorage.getItem("token"),
            },
          })
          .then(response => {
            if (response.status === 200) {
              console.log("Projet supprime avec succès");
            };
          });
        };
      }
    } catch (error) {
      console.error("Warning : " + error);
    }
  }

  
  getWorks(); /* Appel de la fonction */


// DEUXIEME MODAL

const formAddWorks = document.querySelector(".upload-edit-gallery");
const inputImages = document.querySelectorAll(".image-input");
const imgInput = document.getElementById("file-input");
const btnBack = document.getElementById("btn-back");

document.querySelector('.btn-add-photo').addEventListener("click", () => {
  document.querySelector('.modal-wrapper-add').classList.add('active');
})