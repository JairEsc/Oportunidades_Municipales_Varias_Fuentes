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
    const themeLink = item.querySelector('a');
    const subList = item.querySelector('.sub-list');

    if (themeLink && subList) {
        // Add click listener to the theme link
        themeLink.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation(); // Stop propagation for the theme link click

            subList.classList.toggle('active');
            item.classList.toggle('active');
        });

        // Add a click listener to the sub-list itself
        subList.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop propagation for clicks within the sub-list
        });
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
    card.addEventListener('click', function() {
        const wasActive = this.classList.contains('active');

        // First, remove 'active' from all cards
        cards_fuentes.forEach(otherCard => {
            otherCard.classList.remove('active');
            // Optionally, remove any specific active height here if you're setting it dynamically
            otherCard.style.removeProperty('height');
        });

        // If the clicked card was NOT active, activate it
        if (!wasActive) {
            this.classList.add('active');
            // You might want to set a different height for the active card here
            // e.g., this.style.height = 'auto'; or this.style.height = '300px';
        }

        // After updating active states, check if any card is now active
        const anyCardActive = Array.from(cards_fuentes).some(card => card.classList.contains('active'));

        // If no card is active, set the default height on all cards
        if (!anyCardActive) {
            setDefaultHeightOnAllCards();
        } else {
            // If there's an active card, ensure other cards don't have the default height
            // unless you explicitly want them to. This part depends on your CSS.
            // If your CSS handles non-active card height, you might not need to do anything here.
        }
    });
});

// Optionally, set the default height when the page loads
document.addEventListener('DOMContentLoaded', setDefaultHeightOnAllCards);