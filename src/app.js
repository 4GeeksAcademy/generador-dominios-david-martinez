import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io'];

  let domainListElement = document.querySelector("#domain-list");
  let allDomainsHTML = ""; // Variable para acumular el código HTML

  // Bucles anidados 
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extensions) {
          let domainName = p + a + n + e;
          console.log(domainName); // Sigue saliendo en consola
          
          // Creo un elemento de lista para cada dominio
          allDomainsHTML += `<li class="list-group-item">${domainName}</li>`;
        }
      }
    }
  }

  // Inyecto todo el HTML acumulado en el <ul>
  domainListElement.innerHTML = allDomainsHTML;
};