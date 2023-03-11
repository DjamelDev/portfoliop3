const formulaire = document.querySelector("#connexion");
let email = document.getElementById("email");
let password = document.getElementById("password");



formulaire.addEventListener("submit", async function(e) {
    e.preventDefault();
    // Précision de l'utilisation
    let user = {
        email: email.value,
        password: password.value
      };
      
    //   Récup des données de l'API
      let response = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      
      let result = await response.json();

    //   Vérifier si les identifiants sont OK

    if (response.status === 200) {
        sessionStorage.setItem("token", result.token); /* Permet de stocker le token */
        document.location.href="index.html";  /* Permet de faire une redirection */
    } else if (response.status === 401 || response.status === 404){
        formulaire.email.value = "";
        formulaire.password.value = "";
        alert('Adresse mail ou mot de passe incorrect !');
    }
    });