// Je place mes variables en haut de page
const galleryGrid = document.querySelector(".gallery");
const worksApi = "http://localhost:5678/api/works";
let filtersShow = document.querySelectorAll(".filter-list div");
const figures = [];
const all = document.querySelector("#all");

//=======================================================================

async function getWorks() {
  try {
    const response = await fetch(worksApi);
    const data = await response.json();

    for (let i in data) {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");

      figure.setAttribute("data-category-id", data[i].category.id);
      figure.setAttribute("data-id", data[i].id);
      figure.setAttribute("class", "works");
      img.setAttribute("src", data[i].imageUrl);
      img.setAttribute("alt", data[i].title);
      img.setAttribute("crossorigin", "anonymous");
      figcaption.innerHTML = data[i].title;

      figure.append(img, figcaption);
      figures.push(figure);
      galleryGrid.append(figure);
    }
  } catch (error) {
    console.error("Warning : " + error);
  }
}

getWorks(); /* Appel de la fonction */

for (let filter of filtersShow) {
  filter.addEventListener("click", function () {
    for (let filter of filtersShow) {
      filter.classList.remove("active");
    }
    filter.classList.add("active");


  for (let figure of figures) {
    if (
      figure.getAttribute(
        "data-category-id") === filter.getAttribute("data-category-id")
    ) {
      figure.style.display = "block";
    } else if (filter === all) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  }});
}





console.log(sessionStorage);
