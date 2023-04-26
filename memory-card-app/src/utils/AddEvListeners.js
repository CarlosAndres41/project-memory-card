function addListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        let cards = document.querySelectorAll('.card');
        cards = Array.from(cards);

        cards.forEach((card) => {
            card.onclick = () => {
                console.log('Card clicked');
            };
        });
    });
}

export default addListeners;
