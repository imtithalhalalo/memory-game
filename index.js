const cards = document.querySelectorAll('.memory-card')
const score = document.getElementById('score')
let flipped = false;
let first_card, second_card;
let num = 0
//check if they match
const match = () => {
    if (first_card.dataset.framework == second_card.dataset.framework) {
        num += 1
        score.innerText = `Your score is: ${num}`
        setTimeout(() => {
            first_card.classList.add('display-none');
            second_card.classList.add('display-none');
        }, 1000);
    } else {
        setTimeout(() => {
            first_card.classList.remove('flip');
            second_card.classList.remove('flip');
        }, 1000);
    }
}
cards.forEach(
    card => card.addEventListener('click', flip = () => {
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

