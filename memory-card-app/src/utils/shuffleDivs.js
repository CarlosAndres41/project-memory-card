function shuffleDivs() {
    let container = document.querySelector('.gameboard');

    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[(Math.random() * i) | 0]);
    }
}

export default shuffleDivs;
