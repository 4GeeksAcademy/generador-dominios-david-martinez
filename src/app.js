import "bootstrap";
import "./style.css";

window.onload = function() {
  const pronouns = ['the', 'our'];
  const adjs = ['great', 'big'];
  const nouns = ['jogger', 'racoon'];
  const extensions = ['.com', '.net', '.us', '.io'];

  const domainListElement = document.querySelector("#domain-list");
  const countElement = document.querySelector("#count");
  
  // Array para almacenar todas las combinaciones
  let allDomains = [];

  // Generación de dominios con bucles anidados
  for (let p of pronouns) {
    for (let a of adjs) {
      for (let n of nouns) {
        for (let e of extensions) {
          allDomains.push(`${p}${a}${n}${e}`);
        }
      }
    }
  }

  // Renderizado en el HTML actualizado para el layout grid
  domainListElement.innerHTML = allDomains
    .map(domain => `<div class="domain-item">${domain}</div>`)
    .join("");

  // contador dinámico
  countElement.innerHTML = `Generated <strong>${allDomains.length}</strong> domain names:`;

  // Log en consola para verificar 
  console.log("Dominios generados:", allDomains);
};