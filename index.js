const cards = document.querySelectorAll('.memory-card')
const score = document.getElementById('score')
let flipped = false;
let first_card, second_card;

cards.forEach(card => card.addEventListener('click', flip = () => {
    card.classList.add('flip')
    if (!flipped) {
        flipped = true;
        first_card = card;
    } else {
        flipped = false;
        second_card = card;
    }
}))

