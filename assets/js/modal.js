const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

const openBuyModal = () => {
    modal.classList.add('open');
}

const hideBuyModal = () => {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', openBuyModal)
}

modalClose.addEventListener('click', hideBuyModal);
modal.addEventListener('click', hideBuyModal);
modalContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})