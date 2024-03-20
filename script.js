const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')

function showCard() {
    cards.forEach(card => {
        card.classList.remove('active')
        this.classList.add('active')
    })

    handleBgColor(this)
}

const handleBgColor = card => {
    const car = card.getAttribute('data-car')
    body.setAttribute('data-bg', car)
}

cards.forEach(card => card.addEventListener('click',showCard))