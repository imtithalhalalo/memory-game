const cards = document.querySelectorAll('.memory-card')
const score = document.getElementById('score')


cards.forEach(card => card.addEventListener('click', flip = () => {
    card.classList.add('flip')
}))

