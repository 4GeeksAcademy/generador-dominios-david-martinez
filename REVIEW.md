# 📝 Code Review: Domain Name Generator - David Martinez

## 📊 Evaluación Detallada

### Calificación Total: 72/100 puntos

**Estado:** ⚠️ **NECESITA MEJORAS** (Nota mínima: 85/100)

---

### Criterios de Evaluación

| Criterio | Puntos | Obtenido | Comentario |
|----------|--------|----------|------------|
| **Lógica de Loops Anidados** | 25 | 25 | ✅ Excelente - Loops correctamente implementados |
| **Funcionalidad Completa** | 20 | 5 | ❌ Solo imprime en consola, no muestra en UI |
| **Estructura del Proyecto** | 15 | 8 | ⚠️ Código en archivo incorrecto |
| **Código Limpio** | 15 | 12 | ⚠️ Falta de funciones y documentación |
| **HTML/CSS** | 15 | 5 | ❌ HTML sin modificar, sin estilos personalizados |
| **Buenas Prácticas** | 10 | 7 | ⚠️ Nomenclatura mejorable, falta modularización |
| **Bonus: Extensiones** | +10 | +10 | ✅ Incluye extensiones (.com, .net, .us, .io) |
| **TOTAL** | **100** | **72** | **NECESITA MEJORAS** |

---

### Desglose de Puntos Perdidos (-28 puntos)

1. **-15 puntos** - No muestra dominios en la interfaz visual (solo console.log)
2. **-7 puntos** - Código en `app.js` (raíz) en lugar de `src/app.js`
3. **-3 puntos** - Falta de funciones para modularizar (todo en loops directos)
4. **-10 puntos** - HTML sin modificar (template por defecto) y sin CSS personalizado
5. **-3 puntos** - Nomenclatura inconsistente (let en lugar de const para arrays)

---

## ✅ Aspectos Positivos

### 1. **Excelente comprensión de loops anidados** 🎉

El uso de loops anidados es **correcto y efectivo**. El código en `app.js` (raíz) demuestra que entiendes perfectamente cómo funcionan los nested loops:

**Código original (líneas 8-17 en app.js raíz):**
```javascript
for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let ext of extensions) {
                console.log(`${p}${a}${n}${ext}`);
            }
        }
    }
}
```

**¿Por qué es excelente?**
- ✅ Cuatro niveles de loops correctamente anidados
- ✅ Uso moderno de `for...of` (no `for` tradicional con índices)
- ✅ Variables con nombres descriptivos (p, a, n, ext)
- ✅ Template literals para concatenación limpia

**Concepto clave entendido:** Loops anidados generan **todas las combinaciones posibles**:
- 2 pronombres × 2 adjetivos × 2 sustantivos × 4 extensiones = **32 dominios generados** ✅

---

### 2. **Uso correcto de template literals**

```javascript
console.log(`${p}${a}${n}${ext}`);
```

**¿Por qué es importante?**
- ✅ Forma moderna de concatenar strings
- ✅ Más legible que `p + a + n + ext`
- ✅ Patrón estándar en JavaScript moderno

---

### 3. **Incluye el bonus de extensiones**

Tu código incluye múltiples extensiones de dominio:

```javascript
let extensions = ['.com', '.net', '.us', '.io'];
```

**¡Bien hecho!** Esta funcionalidad extra suma **+10 puntos** como bonus.

---

## 🔍 Áreas de Mejora

### 1. ❌ **CRÍTICO: No muestra dominios en la interfaz visual** (-15 puntos)

**Problema:**
El proyecto solo imprime dominios en la consola del navegador (`console.log`), pero el HTML no se modifica para mostrarlos visualmente al usuario.

**Código actual (línea 13 en app.js raíz):**
```javascript
console.log(`${p}${a}${n}${ext}`);
```

**¿Por qué es un problema?**
- ❌ El usuario final no ve nada en la página (solo template por defecto)
- ❌ No cumple con el objetivo del proyecto (generador visual)
- ❌ Mala experiencia de usuario (UX)

**Código mejorado:**
```javascript
// ✅ SOLUCIÓN: Extraer en función y mostrar en el DOM

function generateDomains() {
    const domains = [];
    
    for (let pronoun of PRONOUNS) {
        for (let adjective of ADJECTIVES) {
            for (let noun of NOUNS) {
                for (let extension of EXTENSIONS) {
                    const domain = `${pronoun}${adjective}${noun}${extension}`;
                    domains.push(domain);
                }
            }
        }
    }
    
    return domains;
}

function displayDomains() {
    const domains = generateDomains();
    
    // Crear HTML para cada dominio
    const domainsHTML = domains.map(domain => 
        `<div class="domain-item">${domain}</div>`
    ).join('');
    
    // Mostrar en la página
    document.getElementById('domainList').innerHTML = domainsHTML;
    
    // También en consola para depuración
    console.log(`✅ Generated ${domains.length} domains`);
}

window.addEventListener('load', displayDomains);
```

**¿Por qué es mejor?**
- ✅ **Separación de responsabilidades**: `generateDomains()` genera, `displayDomains()` muestra
- ✅ **Funciones reutilizables**: Puedes llamar `generateDomains()` desde cualquier lugar
- ✅ **UI visual**: El usuario ve los dominios en la página
- ✅ **Mantenible**: Cambios futuros son más fáciles

**Beneficios educativos:**
- Aprendes a manipular el DOM
- Practicas el método `Array.map()` y `Array.join()`
- Entiendes la separación de lógica y presentación

---

### 2. ⚠️ **Código en el archivo incorrecto** (-7 puntos)

**Problema:**
El código funcional está en `app.js` (raíz del proyecto) en lugar de `src/app.js`.

**Ubicación actual:**
```
/generador-dominios-david-martinez/
├── app.js          ← ❌ Tu código está aquí
└── src/
    └── app.js      ← ✅ Debería estar aquí
```

**¿Por qué es importante?**
- ❌ El proyecto no seguirá la estructura esperada
- ❌ Los imports de Bootstrap y CSS están en `src/app.js` pero el código en `app.js` raíz
- ❌ Dificulta el mantenimiento y colaboración

**Solución:**
1. Mueve tu lógica de `app.js` (raíz) a `src/app.js`
2. Elimina el archivo `app.js` de la raíz

**Código correcto en `src/app.js`:**
```javascript
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Tu código de loops anidados aquí
const PRONOUNS = ['the', 'our'];
// ... resto del código
```

---

### 3. ⚠️ **HTML sin modificar** (-5 puntos)

**Problema:**
El archivo `src/index.html` todavía tiene el template por defecto con "Hello Rigo!".

**Código actual (líneas 19-29 en src/index.html):**
```html
<div class="container-fluid text-center">
  <h1 class="mt-5">Hello Rigo!</h1>
  <img src="./assets/img/rigo-baby.jpg" />
  <p class="alert alert-warning mt-4">
    If this text is <b>not</b> centered and <b>yellow</b>, you probably have
    an error
  </p>
</div>
```

**¿Por qué es un problema?**
- ❌ No refleja el propósito del proyecto (generador de dominios)
- ❌ Confunde al usuario que espera ver un generador
- ❌ Elementos innecesarios (imagen de Rigo)

**Código mejorado:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="./assets/img/4geeks.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Domain Name Generator - 4Geeks</title>
  </head>
  <body>
    <div class="container">
      <h1>🌐 Domain Name Generator</h1>
      <p class="subtitle">Find your perfect domain name!</p>
      <div id="domainList" class="domain-list">
        <!-- Los dominios se generarán aquí dinámicamente -->
      </div>
    </div>
    <script type="module" src="/app.js"></script>
  </body>
</html>
```

**¿Por qué es mejor?**
- ✅ Título claro del proyecto
- ✅ Contenedor (`#domainList`) para insertar dominios dinámicamente
- ✅ Sin elementos innecesarios (imagen de Rigo)
- ✅ HTML semántico y limpio

---

### 4. ⚠️ **CSS sin personalizar** (-5 puntos)

**Problema:**
El archivo `src/style.css` solo tiene el import de Bootstrap y un `background: white`.

**Código actual (líneas 1-5 en src/style.css):**
```css
@import "bootstrap/dist/css/bootstrap.min.css";

body{
    background: white;
}
```

**¿Por qué es insuficiente?**
- ❌ No hay estilos para mostrar los dominios de forma atractiva
- ❌ Sin estructura de grid o flex para organizar los dominios
- ❌ Sin hover effects o interactividad visual

**Código mejorado:**
```css
@import "bootstrap/dist/css/bootstrap.min.css";

body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Segoe UI', sans-serif;
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    color: #667eea;
    margin-bottom: 30px;
}

/* CSS Grid para organizar dominios */
.domain-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
}

.domain-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
}

.domain-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}
```

**¿Por qué es mejor?**
- ✅ **CSS Grid**: Organiza dominios en columnas automáticas (responsive)
- ✅ **Hover effects**: Interactividad visual al pasar el mouse
- ✅ **Diseño atractivo**: Gradientes y sombras modernas
- ✅ **Responsive**: Se adapta a pantallas pequeñas automáticamente

**Concepto clave:** `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- `auto-fill`: Crea tantas columnas como quepan
- `minmax(200px, 1fr)`: Cada columna tiene mínimo 200px, máximo 1 fracción del espacio

---

### 5. ⚠️ **Nomenclatura inconsistente** (-3 puntos)

**Problema:**
Usas `let` para definir arrays que nunca cambiarán:

**Código actual (líneas 2-5 en app.js raíz):**
```javascript
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];
```

**¿Por qué es mejorable?**
- ⚠️ `let` indica que la variable puede cambiar, pero estos arrays son constantes
- ⚠️ Nombres inconsistentes (inglés completo para algunos, abreviado para otros)

**Código mejorado:**
```javascript
// ✅ const porque no reasignaremos estos arrays
// ✅ MAYÚSCULAS para indicar que son constantes globales
// ✅ Nombres completos en inglés (convención de la industria)
const PRONOUNS = ['the', 'our'];
const ADJECTIVES = ['great', 'big'];
const NOUNS = ['jogger', 'racoon'];
const EXTENSIONS = ['.com', '.net', '.us', '.io'];
```

**¿Por qué es mejor?**
- ✅ **`const`**: Indica claramente que no cambiarán
- ✅ **MAYÚSCULAS**: Convención para constantes globales
- ✅ **Nombres descriptivos**: `ADJECTIVES` es más claro que `adj`
- ✅ **Consistencia**: Todos siguen el mismo patrón

---

### 6. ⚠️ **Falta de modularización** (-3 puntos)

**Problema:**
Todo el código está en loops directos sin funciones.

**Código actual:**
```javascript
// Todo el código está suelto
for (let p of pronoun) {
    for (let a of adj) {
        // ...
    }
}
```

**¿Por qué es mejorable?**
- ⚠️ Difícil de reutilizar
- ⚠️ No se puede testear fácilmente
- ⚠️ Si quieres generar dominios en otro lugar, tienes que copiar todo

**Código mejorado:**
```javascript
// ✅ Función reutilizable que genera dominios
function generateDomains() {
    const domains = [];
    
    for (let pronoun of PRONOUNS) {
        for (let adjective of ADJECTIVES) {
            for (let noun of NOUNS) {
                for (let extension of EXTENSIONS) {
                    domains.push(`${pronoun}${adjective}${noun}${extension}`);
                }
            }
        }
    }
    
    return domains;
}

// Ahora puedes usar la función donde quieras
const allDomains = generateDomains();
console.log(allDomains);

// O filtrar solo .com
const comDomains = generateDomains().filter(d => d.endsWith('.com'));
```

**Beneficios:**
- ✅ **Reutilizable**: Llama `generateDomains()` donde necesites
- ✅ **Testeable**: Puedes probar la función fácilmente
- ✅ **Mantenible**: Cambios en un solo lugar
- ✅ **Composable**: Puedes combinarla con otras funciones

---

## 🎯 Patrones y Anti-patrones Identificados

### Patrones Positivos Encontrados ✅

#### 1. ✅ Uso Correcto de Loops Anidados (Nested Loops)

**Tipo:** Patrón ✅

**Descripción:**
Usas correctamente loops anidados para generar todas las combinaciones posibles de arrays.

**Dónde aparece:** `app.js` (raíz, líneas 8-17)

**Código:**
```javascript
for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let ext of extensions) {
                console.log(`${p}${a}${n}${ext}`);
            }
        }
    }
}
```

**¿Por qué es importante?**
- Este es el **patrón fundamental** del ejercicio
- Demuestra comprensión de loops anidados
- Genera combinaciones exponenciales: 2×2×2×4 = **32 dominios**

**Complejidad algorítmica:** O(n⁴) - cuatro loops anidados

---

#### 2. ✅ Template Literals para Concatenación

**Tipo:** Patrón ✅

**Descripción:**
Uso moderno de template literals en lugar de concatenación con `+`.

**Dónde aparece:** `app.js` (raíz, línea 13)

**Código:**
```javascript
console.log(`${p}${a}${n}${ext}`);
```

**¿Por qué es importante?**
- ✅ Sintaxis moderna (ES6+)
- ✅ Más legible que `p + a + n + ext`
- ✅ Facilita interpolación de variables

**Alternativa antigua:**
```javascript
// ❌ Antiguo (funciona pero menos legible)
console.log(p + a + n + ext);
```

---

#### 3. ✅ For...of (Moderno) vs For Tradicional

**Tipo:** Patrón ✅

**Descripción:**
Usas `for...of` que es más moderno y legible que `for` tradicional con índices.

**Código:**
```javascript
// ✅ Tu código (moderno)
for (let p of pronoun) {
    // ...
}

// ❌ Alternativa antigua (funciona pero más verbosa)
for (let i = 0; i < pronoun.length; i++) {
    let p = pronoun[i];
    // ...
}
```

**¿Por qué es mejor?**
- ✅ Menos propenso a errores (no manejas índices)
- ✅ Más legible y claro
- ✅ Sintaxis moderna de JavaScript

---

### Anti-patrones a Mejorar ❌

#### 1. ❌ Código en Archivo Incorrecto

**Tipo:** Anti-patrón ❌

**Descripción:**
El código funcional está en `app.js` (raíz) en lugar de `src/app.js`.

**Dónde aparece:** `app.js` (raíz, todo el archivo)

**¿Por qué es un problema?**
- ❌ No sigue la estructura del proyecto
- ❌ Imports de Bootstrap están en `src/app.js` pero tu código no
- ❌ Confunde la organización del proyecto

**Solución:**
Mueve todo el código de `app.js` (raíz) a `src/app.js`:

```javascript
// ✅ src/app.js
import "bootstrap";
import "./style.css";

const PRONOUNS = ['the', 'our'];
// ... tu código aquí
```

---

#### 2. ❌ Console.log Como Única Salida (No UI Visual)

**Tipo:** Anti-patrón ❌

**Descripción:**
El proyecto solo imprime en consola sin mostrar nada en la interfaz visual.

**Dónde aparece:** `app.js` (raíz, línea 13)

**Código:**
```javascript
console.log(`${p}${a}${n}${ext}`);
```

**¿Por qué es un problema?**
- ❌ El usuario final no ve nada (mala UX)
- ❌ No cumple el objetivo del proyecto (generador visual)
- ❌ La página muestra solo el template por defecto

**Solución:**
```javascript
// ✅ Guardar en array y mostrar en DOM
function generateDomains() {
    const domains = [];
    for (let pronoun of PRONOUNS) {
        // ... loops ...
        domains.push(`${pronoun}${adjective}${noun}${extension}`);
    }
    return domains;
}

function displayDomains() {
    const domains = generateDomains();
    const html = domains.map(d => `<div class="domain-item">${d}</div>`).join('');
    document.getElementById('domainList').innerHTML = html;
}
```

---

#### 3. ❌ Nomenclatura con `let` para Constantes

**Tipo:** Anti-patrón ❌

**Descripción:**
Usas `let` para arrays que nunca se reasignan.

**Dónde aparece:** `app.js` (raíz, líneas 2-5)

**Código:**
```javascript
// ❌ let indica que puede cambiar (pero no lo hace)
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
```

**¿Por qué es un problema?**
- ❌ `let` indica que la variable puede cambiar
- ❌ No expresa la intención de que son constantes
- ❌ Puede llevar a bugs si se reasigna por error

**Solución:**
```javascript
// ✅ const indica que no cambiarán
const PRONOUNS = ['the', 'our'];
const ADJECTIVES = ['great', 'big'];
```

**Concepto relacionado:** **Immutability** - preferir `const` por defecto, `let` solo si reasignas

---

#### 4. ❌ Falta de Funciones (Código Suelto)

**Tipo:** Anti-patrón ❌

**Descripción:**
Todo el código está suelto sin funciones que lo encapsulen.

**Dónde aparece:** `app.js` (raíz, líneas 8-17)

**¿Por qué es un problema?**
- ❌ No es reutilizable
- ❌ Difícil de testear
- ❌ Se ejecuta inmediatamente al cargar (sin control)

**Solución:**
```javascript
// ✅ Extraer en funciones
function generateDomains() {
    // ... tu lógica de loops
    return domains;
}

// Llamar cuando quieras
window.addEventListener('load', () => {
    const domains = generateDomains();
    displayDomains(domains);
});
```

**Concepto relacionado:** **Modularización** y **Separación de Responsabilidades**

---

#### 5. ❌ HTML Template Sin Modificar

**Tipo:** Anti-patrón ❌

**Descripción:**
El HTML todavía tiene el contenido del template por defecto ("Hello Rigo!").

**Dónde aparece:** `src/index.html` (líneas 19-29)

**Código:**
```html
<!-- ❌ Contenido del template, no del proyecto -->
<h1 class="mt-5">Hello Rigo!</h1>
<img src="./assets/img/rigo-baby.jpg" />
```

**¿Por qué es un problema?**
- ❌ No refleja el proyecto (generador de dominios)
- ❌ Confunde al usuario
- ❌ Elementos innecesarios (imagen de Rigo)

**Solución:**
```html
<!-- ✅ HTML específico del proyecto -->
<div class="container">
  <h1>🌐 Domain Name Generator</h1>
  <div id="domainList" class="domain-list"></div>
</div>
```

---

## 💡 Sugerencias Adicionales (Opcionales)

### 1. Usar Array.map() en Lugar de Loops para HTML

**Sugerencia avanzada:**

```javascript
// En lugar de loops para crear HTML
const domainsHTML = domains.map(domain => 
    `<div class="domain-item">${domain}</div>`
).join('');

document.getElementById('domainList').innerHTML = domainsHTML;
```

**Beneficios:**
- Más funcional y declarativo
- Menos líneas de código
- Patrón común en React y frameworks modernos

**Nota:** Esta es una mejora opcional, no necesaria para aprobar.

---

### 2. Añadir Funcionalidad de Copiar al Portapapeles

**Idea para ampliar el proyecto:**

```javascript
.domain-item:hover {
    cursor: pointer;
}

// JavaScript
document.querySelectorAll('.domain-item').forEach(item => {
    item.addEventListener('click', () => {
        navigator.clipboard.writeText(item.textContent);
        alert(`Copiado: ${item.textContent}`);
    });
});
```

**Beneficios:**
- Mejora la UX
- Aprenderás sobre eventos de click
- Usarás la API del portapapeles

---

### 3. Permitir al Usuario Personalizar las Palabras

**Idea avanzada:**

```html
<input type="text" id="addPronoun" placeholder="Add pronoun">
<button onclick="addWord('PRONOUNS')">Add</button>
```

```javascript
function addWord(arrayName) {
    const input = document.getElementById('addPronoun').value;
    PRONOUNS.push(input);
    displayDomains(); // Regenerar
}
```

**Beneficios:**
- Proyecto más interactivo
- Aprenderás sobre inputs y eventos
- UX más dinámica

**Nota:** Esta es una extensión avanzada, completamente opcional.

---

## 📚 Conceptos Clave del Proyecto

### 1. Loops Anidados (Nested Loops)

**Complejidad:** O(n⁴)

**Explicación:**
Cada loop se ejecuta dentro del anterior, multiplicando iteraciones:

```javascript
for (let i of [1, 2]) {           // 2 veces
    for (let j of [1, 2, 3]) {    // 2 × 3 = 6 veces
        console.log(i, j);
    }
}
```

**En tu proyecto:**
- 2 pronombres × 2 adjetivos × 2 sustantivos × 4 extensiones = **32 combinaciones**

---

### 2. Manipulación del DOM

**Concepto:**
Modificar el HTML desde JavaScript.

**Ejemplo:**
```javascript
document.getElementById('domainList').innerHTML = '<p>Hola</p>';
```

**Métodos importantes:**
- `getElementById()` - Selecciona por ID
- `querySelector()` - Selecciona por CSS selector
- `innerHTML` - Modifica contenido HTML
- `textContent` - Modifica solo texto

---

### 3. Array Methods

**Métodos útiles:**

```javascript
// map - Transforma cada elemento
[1, 2, 3].map(n => n * 2); // [2, 4, 6]

// filter - Filtra elementos
[1, 2, 3, 4].filter(n => n > 2); // [3, 4]

// join - Convierte array a string
['a', 'b', 'c'].join(''); // "abc"
```

---

### 4. CSS Grid

**Patrón responsive:**

```css
.domain-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
}
```

**Explicación:**
- `repeat(auto-fill, ...)` - Crea tantas columnas como quepan
- `minmax(200px, 1fr)` - Mínimo 200px, máximo espacio disponible
- `gap: 15px` - Espacio entre items

---

## 🎯 Cómo Llegar a 100/100

Aplicando las correcciones sugeridas en este PR:

1. ✅ **+15 puntos** - Mostrar dominios en UI (con `displayDomains()` y CSS Grid)
2. ✅ **+7 puntos** - Mover código a `src/app.js` correctamente
3. ✅ **+3 puntos** - Extraer en función `generateDomains()`
4. ✅ **+5 puntos** - Modificar HTML para el generador (eliminar template)
5. ✅ **+5 puntos** - Agregar CSS personalizado (grid, hover effects)
6. ✅ **+3 puntos** - Usar `const` para arrays y nomenclatura en MAYÚSCULAS

**= 110/100** 🎉 (con +10 bonus de extensiones)

**Nota final aprobatoria: 100/100** ✅

---

## 🚀 Próximos Pasos

### Para aprobar este proyecto:

1. **Revisar los cambios en este PR** (archivos modificados con mejoras educativas)
2. **Entender el "por qué"** de cada mejora (lee los comentarios inline)
3. **Aplicar el patrón en futuros proyectos**:
   - Siempre muestra resultados en la UI
   - Modulariza en funciones
   - Usa const para constantes
   - Personaliza HTML/CSS según el proyecto

### Habilidades adquiridas:

- ✅ Loops anidados (nested loops)
- ✅ Template literals
- ✅ For...of loops
- ⚠️ Manipulación del DOM (pendiente mejorar)
- ⚠️ Array methods (map, join) (pendiente practicar)
- ⚠️ CSS Grid (pendiente implementar)

---

## 📖 Recursos Recomendados

### JavaScript:
- [MDN: for...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN: Array.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Template Literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

### DOM:
- [MDN: Document.getElementById()](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
- [MDN: Element.innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)

### CSS:
- [CSS Grid Guide (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN: CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)

---

## 💬 Nota Final

David, tu comprensión de **loops anidados es excelente** ✅ — la lógica fundamental del proyecto está perfectamente implementada.

Los puntos perdidos se deben principalmente a:
- **No mostrar resultados en la UI** (solo consola)
- **Organización de archivos**
- **HTML/CSS sin personalizar**

Estos son errores **fáciles de corregir** y comunes en proyectos iniciales.

**Las mejoras aplicadas en este PR** te muestran:
- Cómo estructurar el código en funciones
- Cómo manipular el DOM para mostrar resultados
- Cómo usar CSS Grid para diseño responsive

**¡Sigue así!** Tu lógica es sólida, solo necesitas enfocarte en la presentación visual de tus proyectos. 🚀

---

**Revisado por:** Erwin Aguero (Instructor 4Geeks Academy)  
**Fecha:** 23 de febrero de 2026  
**Co-Authored-By:** Warp <agent@warp.dev>
