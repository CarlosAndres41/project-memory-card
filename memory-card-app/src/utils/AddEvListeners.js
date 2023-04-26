import shuffleDivs from './shuffleDivs';

function addListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        let cards = document.querySelectorAll('.card');
        cards = Array.from(cards);

        cards.forEach((card) => {
            card.onclick = shuffleDivs;
        });
    });
}

export default addListeners;
