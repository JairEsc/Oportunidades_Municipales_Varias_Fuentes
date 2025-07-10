

let data_indicadores_tendencia_negativa;

const promesa_temas_tendencia_negativa = new Promise((resolve, reject) => {
    fetch("Mapas_Alternos/Temas_usados_indicadores_tend_negativa.csv")
    .then(response => {
        if (!response.ok) { // Verifica si la respuesta fue exitosa (código 200)
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.text(); // Llama a .text() como función y retorna la promesa
    })
    .then(data => {
        data_indicadores_tendencia_negativa = data; // Asigna los datos a tu variable global
        resolve(data); // Resuelve la promesa con los datos cargados
    })
});
const promesa_temas_webscrapping = new Promise((resolve, reject) => {
    fetch("Mapas_Alternos/Temas_usados_webscrapping.csv")
    .then(response => {
        if (!response.ok) { // Verifica si la respuesta fue exitosa (código 200)
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.text(); // Llama a .text() como función y retorna la promesa
    })
    .then(data => {
        data_indicadores_tendencia_negativa = data; // Asigna los datos a tu variable global
        resolve(data); // Resuelve la promesa con los datos cargados
    })
});
let temas=[]
let indicadores=[]
promesa_temas_tendencia_negativa.then(data => {
    const menu = document.getElementById('temas_indicadores_tend_negativa');
    // Limpiamos el contenido existente si lo hubiera, para evitar duplicados en recargas.
    menu.innerHTML = ''; 

    // Objeto para agrupar los indicadores por tema principal
    const temasConIndicadores = {}; 

    // Dividir los datos del CSV por línea y procesar cada fila
    const rows = data.trim().split("\n"); // .trim() para eliminar líneas vacías al final

    rows.forEach((row, index) => {
        // Omitir la primera fila si es un encabezado
        if (index === 0) { // Ajusta esta condición si tu CSV tiene encabezados
            return; 
        }

        const parts = row.split(",").map(part => part.trim().replace(/^"|"$/g, '')); // Limpiar comillas y espacios
        console.log(parts)
        if (parts.length === 2) {
            const temaPrincipal = parts[0];
            const indicador = parts[1];

            if (!temasConIndicadores[temaPrincipal]) {
                temasConIndicadores[temaPrincipal] = []; // Inicializa un array para el tema si no existe
            }
            temasConIndicadores[temaPrincipal].push(indicador); // Agrega el indicador al tema
        }
    });

    // Ahora que tenemos los datos estructurados, construimos el DOM
    for (const temaPrincipal in temasConIndicadores) {
        if (temasConIndicadores.hasOwnProperty(temaPrincipal)) {
            const indicadores = temasConIndicadores[temaPrincipal];
            console.log(indicadores)
            // Crear el elemento li principal (has-submenu)
            const liPadre = document.createElement('li');
            liPadre.classList.add('has-submenu'); // <--- ¡Así se agrega la clase correctamente!

            // Crear el enlace para el tema principal
            const aPrincipal = document.createElement('a');
            aPrincipal.href = "#"; // O la URL que corresponda
            aPrincipal.innerHTML = temaPrincipal;
            liPadre.appendChild(aPrincipal);

            // Crear la lista ul para los sub-elementos (indicadores)
            const ulSublista = document.createElement('ul');
            ulSublista.classList.add('sub-list'); // <--- ¡Así se agrega la clase correctamente!

            // Agregar cada indicador como un li dentro de la sub-lista
            indicadores.forEach(indicador => {
                const liIndicador = document.createElement('li');
                const aIndicador = document.createElement('a');
                aIndicador.href = "#"; // O la URL que corresponda
                aIndicador.innerHTML = indicador;
                liIndicador.appendChild(aIndicador);
                ulSublista.appendChild(liIndicador);
            });

            // Añadir la sub-lista al li principal
            liPadre.appendChild(ulSublista);

            // Añadir el li principal al menú
            menu.appendChild(liPadre);
        }
    }
})
.catch(error => {
    console.error("Hubo un error al procesar el menú:", error);
});

promesa_temas_webscrapping.then(data => {
    const menu = document.getElementById('temas_webscrapping');
    // Limpiamos el contenido existente si lo hubiera, para evitar duplicados en recargas.
    menu.innerHTML = ''; 

    // Objeto para agrupar los indicadores por tema principal
    const temasConIndicadores = {}; 

    // Dividir los datos del CSV por línea y procesar cada fila
    const rows = data.trim().split("\n"); // .trim() para eliminar líneas vacías al final

    rows.forEach((row, index) => {
        // Omitir la primera fila si es un encabezado
        if (index === 0 ) { // Ajusta esta condición si tu CSV tiene encabezados
            return; 
        }

        const parts = row.split(",").map(part => part.trim().replace(/^"|"$/g, '')); // Limpiar comillas y espacios
        console.log(parts)
        if (parts.length === 2) {
            const temaPrincipal = parts[0];
            const indicador = parts[1];

            if (!temasConIndicadores[temaPrincipal]) {
                temasConIndicadores[temaPrincipal] = []; // Inicializa un array para el tema si no existe
            }
            temasConIndicadores[temaPrincipal].push(indicador); // Agrega el indicador al tema
        }
    });

    // Ahora que tenemos los datos estructurados, construimos el DOM
    for (const temaPrincipal in temasConIndicadores) {
        if (temasConIndicadores.hasOwnProperty(temaPrincipal)) {
            const indicadores = temasConIndicadores[temaPrincipal];
            console.log(indicadores)
            // Crear el elemento li principal (has-submenu)
            const liPadre = document.createElement('li');
            liPadre.classList.add('has-submenu'); // <--- ¡Así se agrega la clase correctamente!

            // Crear el enlace para el tema principal
            const aPrincipal = document.createElement('a');
            aPrincipal.href = "#"; // O la URL que corresponda
            aPrincipal.innerHTML = temaPrincipal;
            liPadre.appendChild(aPrincipal);

            // Crear la lista ul para los sub-elementos (indicadores)
            const ulSublista = document.createElement('ul');
            ulSublista.classList.add('sub-list'); // <--- ¡Así se agrega la clase correctamente!

            // Agregar cada indicador como un li dentro de la sub-lista
            indicadores.forEach(indicador => {
                const liIndicador = document.createElement('li');
                const aIndicador = document.createElement('a');
                aIndicador.href = "#"; // O la URL que corresponda
                aIndicador.innerHTML = indicador;
                liIndicador.appendChild(aIndicador);
                ulSublista.appendChild(liIndicador);
            });

            // Añadir la sub-lista al li principal
            liPadre.appendChild(ulSublista);

            // Añadir el li principal al menú
            menu.appendChild(liPadre);
        }
    }
})
.catch(error => {
    console.error("Hubo un error al procesar el menú:", error);
});




Promise.all([promesa_temas_tendencia_negativa,
     promesa_temas_webscrapping]).then((values) => {
        const cards = document.getElementsByClassName('card-problemas');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
        const titleElement = this.querySelector('.title-problemas');
        if (titleElement) {
            console.log("Título de la tarjeta:", titleElement.textContent);
            const mapaIframe=document.getElementById('mapasIframe')
            const mapaIframe2=document.getElementById('mapasIframe2')
            const mapaIframe3=document.getElementById('mapasIframe3')
            const mapaIframe4=document.getElementById('mapasIframe4')
            switch (titleElement.textContent) {
                case 'Indicadores en Tendencia Negativa':
                    //mapaIframe.src='Mapas_Alternos/Indicadores_tendencia_negativa.html'
                    mapaIframe.style.display='block'
                    mapaIframe2.style.display='none'
                    mapaIframe3.style.display='none'
                    mapaIframe4.style.display='none'
                    break;
            
                case 'Percepción Pública':
                    //mapaIframe.src='Mapas_Alternos/Indicadores_tendencia_negativa.html'
                    mapaIframe.style.display='none'
                    mapaIframe2.style.display='block'
                    mapaIframe3.style.display='none'
                    mapaIframe4.style.display='none'
                    break;
            
                case 'Incidencia Delictiva':
                    //mapaIframe.src='Mapas_Alternos/Indicadores_tendencia_negativa.html'
                    mapaIframe.style.display='none'
                    mapaIframe2.style.display='none'
                    mapaIframe3.style.display='block'
                    mapaIframe4.style.display='none'
                    break;
            
                case 'Percepción mediática':
                    //mapaIframe.src='Mapas_Alternos/Indicadores_tendencia_negativa.html'
                    mapaIframe.style.display='none'
                    mapaIframe2.style.display='none'
                    mapaIframe3.style.display='none'
                    mapaIframe4.style.display='block'
                    break;
            
                default:
                    //mapaIframe.src='Mapas_Alternos/Oportunidades_Problemáticas_Hidalgo300625.html'
                    mapaIframe.style.display='none'
                    mapaIframe2.style.display='none'
                    mapaIframe3.style.display='none'
                    mapaIframe4.style.display='none'
                    break;
            }
            
        }
    });
}

const mainListItems = document.querySelectorAll('.main-list > li.has-submenu');

// Iterate over each main list item
mainListItems.forEach(item => {
    const themeLink = item.querySelector('li.has-submenu');
    const subList = item.querySelector('.sub-list');
    item.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation(); // Stop propagation for the theme link click

        subList.classList.toggle('active');
        item.classList.toggle('active');
    });

    // Add a click listener to the sub-list itself
    subList.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation for clicks within the sub-list
    });
    if (themeLink && subList) {
        // Add click listener to the theme link
        
    }
});

const cards_fuentes = document.querySelectorAll('.card-problemas');

// Define the default height you want to set
const defaultCardHeight = '150px'; // You can adjust this value as needed

// Function to set default height on all cards
function setDefaultHeightOnAllCards() {
    cards_fuentes.forEach(card => {
        card.style.height = defaultCardHeight;
    });
}

// Iterate over each card to add the event listener
cards_fuentes.forEach(card => {
    // Get the content-problemas div within this card
    const contentDiv = card.querySelector('.content-problemas');

    if (contentDiv) {
        // Add a click listener to the content-problemas div
        // This will stop propagation if a click occurs inside this specific div
        contentDiv.addEventListener('click', function(event) {
            event.stopPropagation();
            // console.log("Click inside content-problemas, stopping propagation.");
            // You can add specific logic here for clicks *inside* content-problemas
            // without affecting the card's active state.
        });
    }

    card.addEventListener('click', function() {
        const wasActive = this.classList.contains('active');

        // First, remove 'active' from all cards and reset their content height
        cards_fuentes.forEach(otherCard => {
            otherCard.classList.remove('active');
            otherCard.style.removeProperty('height'); // Remove dynamic height if set
            const otherContentDiv = otherCard.querySelector('.content-problemas');
            if (otherContentDiv) {
                otherContentDiv.style.height = '1px'; // Collapse content div for inactive cards
            }
        });

        // If the clicked card was NOT active, activate it
        if (!wasActive) {
            this.classList.add('active');
            // Allow the content-problemas div to expand for the active card
            if (contentDiv) {
                contentDiv.style.height = ''; // Or 'auto' to let content dictate height
            }
        }

        // After updating active states, check if any card is now active
        const anyCardActive = Array.from(cards_fuentes).some(card => card.classList.contains('active'));

        // If no card is active, set the default height on all cards
        if (!anyCardActive) {
            setDefaultHeightOnAllCards();
        }
        // If a card is active, the individual card's height and content height are handled above.
    });
});

// Set the default height when the page loads
document.addEventListener('DOMContentLoaded', setDefaultHeightOnAllCards);

    setTimeout(document.getElementsByClassName('card-problemas')[0].click(),300)
  console.log(values);
});