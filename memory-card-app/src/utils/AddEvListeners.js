function addListeners() {
    let cards = document.querySelectorAll('.card');
    cards = Array.from(cards);

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            console.log('Card clicked');
        });
    });
}

export default addListeners;
