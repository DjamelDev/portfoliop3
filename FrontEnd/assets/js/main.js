if (sessionStorage.token != undefined) {
  let login = document.getElementById("login");
  login.style.display = "none";

  let logout = document.getElementById("logout");
  logout.style.display = "inline";

  let navBlack = document.getElementById("nav-top");
  navBlack.style.display = "flex";

  let modifyOne = document.getElementById("modify-one");
  modifyOne.style.display = "flex";

  let modifyTwo = document.getElementById("modify-two");
  modifyTwo.style.display = "flex";

  let modifyThree = document.getElementById("modify-three");
  modifyThree.style.display = "flex";

  let filters = document.querySelector(".filter-list");
  filters.style.display = "none";


// MODAL

  logout.onclick = function () {
    // La méthode clear supprime tous les éléments de l'objet
    sessionStorage.clear();
    console.log(sessionStorage);

    login.style.display = "inline";
    logout.style.display = "none";
    navBlack.style.display = "none";
    modifyOne.style.display = "none";
    modifyTwo.style.display = "none";
    modifyThree.style.display = "none";
    filters.style.display = "flex";
  };
};