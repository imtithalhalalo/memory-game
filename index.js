const cards = document.querySelectorAll('.memory-card')
const score = document.getElementById('score')
let flipped = false;
let first_card, second_card;

//check if they match
const match = () => {
    if (first_card.dataset.framework == second_card.dataset.framework) {
        first_card.removeEventListener('click', flip);
        second_card.removeEventListener('click', flip);
    } else {
        setTimeout(() => {
            first_card.classList.remove('flip');
            second_card.classList.remove('flip');
        }, 1000);
    }
}
cards.forEach(card => card.addEventListener('click', flip = () => {
    card.classList.add('flip')
    if (!flipped) {
        flipped = true;
        first_card = card;
    } else {
        flipped = false;
        second_card = card;
        match()
    }
}))

