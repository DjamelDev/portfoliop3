const modalFlex = document.querySelector(".modal-flex");
const connectApi = "http://localhost:5678/api/works";
const form = modal.querySelector("form");

// Call avec l'API pour récupérer les projets

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
        })

        // METHODE DELETE
        
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

  // ---------------------------------------------------- Gestion de la PREVIEW --------------------------------------------------------

const containerHidden = document.querySelector(".hidden-to-preview");
const btnHidden = document.getElementById("btn-none");

  function previewImage(event) {
    const input = event.target;
    const preview = document.querySelector('.preview');
    const container = document.querySelector('.container-photo');
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        preview.src = reader.result;
      }
      reader.readAsDataURL(input.files[0]);
  
      container.classList.add('active');
      containerHidden.classList.add('none')
      btnHidden.classList.add('none');
    } else {
      preview.src = '';
      container.classList.remove('active');
    }
  }
  

// ------------------------------- Gestion des modales ----------------------------------------------------------------

// OPEN MODAL
function openModal() {
	document.getElementById('modal').classList.add('open');
}

// CLOSE MODAL
function closeModal() {
  console.log('CLOSE 1');
  document.getElementById('modal').classList.remove('open');
}

// OPEN MODAL2
function openModal2() {
	document.querySelector('.modal-wrapper-add').classList.add('active');
}

// CLOSE MODAL2
function closeModal2(returnToFirstModal=false) {
  console.log('CLOSE 2 : ',returnToFirstModal)
  document.querySelector('.modal-wrapper-add').classList.remove('active');
  form.reset();
  if(!returnToFirstModal) {
    document.getElementById('modal').classList.remove('open');
  }
}

const aside = document.querySelector('#modal');
const modal1 = document.getElementsByClassName('modal-wrapper')[0];
const modal2 = document.getElementsByClassName('modal-wrapper')[1];

aside.addEventListener('click', function(e) {
// Vérifier si le modal est ouvert et que le click a été déclenché en dehors de l'aside
if (aside.classList.contains('open') && !modal1.contains(e.target) && !modal2.contains(e.target)) {
// Si c'est le cas, fermer la modal
closeModal2();
}

});

// Récupérer les catégories dans l'API et les afficher dans mon SELECT

fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(data => {
    // Récupération du SELECT dans le DOM
    const select = document.getElementById('select-categories');

    // Parcours des catégories et création des options
    data.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.text = category.name;
      select.appendChild(option);
    });
  })
  .catch(error => console.error(error));



// Fermer la modale dès qu'on appuie sur la touche "Échap"
window.addEventListener('keydown', function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal();
    closeModal2();
  }
})


