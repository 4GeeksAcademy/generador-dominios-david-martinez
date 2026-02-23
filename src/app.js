import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// ✅ PATRÓN POSITIVO: Constantes con nombres descriptivos en mayúsculas
// Indica que son valores que no cambian durante la ejecución
const PRONOUNS = ['the', 'our'];
const ADJECTIVES = ['great', 'big'];
const NOUNS = ['jogger', 'racoon'];
const EXTENSIONS = ['.com', '.net', '.us', '.io'];

/**
 * 💡 MEJORA APLICADA: Extraer lógica en función reutilizable
 * Genera todas las combinaciones posibles de nombres de dominio
 * usando loops anidados (nested loops)
 * 
 * @returns {string[]} Array con todos los dominios generados
 */
function generateDomains() {
    const domains = [];
    
    // ✅ PATRÓN POSITIVO: Uso correcto de loops anidados
    // Cada loop itera sobre un array diferente para generar combinaciones
    for (let pronoun of PRONOUNS) {          // Loop exterior
        for (let adjective of ADJECTIVES) {  // 2do nivel
            for (let noun of NOUNS) {        // 3er nivel
                for (let extension of EXTENSIONS) {  // Loop más interior
                    // 💡 Template literals para concatenar strings de forma legible
                    const domain = `${pronoun}${adjective}${noun}${extension}`;
                    domains.push(domain);
                }
            }
        }
    }
    
    return domains;
}

/**
 * 💡 MEJORA APLICADA: Separar lógica de presentación
 * Muestra los dominios generados en la interfaz visual (no solo consola)
 */
function displayDomains() {
    const domains = generateDomains();
    
    // ⚠️ OPORTUNIDAD DE MEJORA: Crear estructura HTML para mostrar dominios
    // En lugar de solo console.log, mostramos en la página
    const domainsHTML = domains.map(domain => 
        `<div class="domain-item">${domain}</div>`
    ).join('');
    
    const header = `<h1>🌐 Domain Name Generator</h1>
                    <p class="count">Generated <strong>${domains.length}</strong> domain names:</p>`;
    
    // Insertar en el body
    document.body.innerHTML = `
        <div class="container">
            ${header}
            <div class="domain-list">
                ${domainsHTML}
            </div>
        </div>
    `;
    
    // También imprimimos en consola para depuración
    console.log(`✅ Generated ${domains.length} domains:`);
    domains.forEach(domain => console.log(domain));
}

// 💡 MEJORA: Usar addEventListener en lugar de window.onload
// Es más moderno y permite múltiples listeners
window.addEventListener('load', displayDomains);
