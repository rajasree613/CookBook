document.addEventListener('DOMContentLoaded', function () {
        const leftArrow = document.querySelector('.arrow-left');
        const rightArrow = document.querySelector('.arrow-right');
        const categoriesContainer = document.querySelector('.categories');

        leftArrow.addEventListener('click', () => {
            categoriesContainer.scrollBy({ left: -270, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            categoriesContainer.scrollBy({ left: 270, behavior: 'smooth' });
        });
    });
document.addEventListener('DOMContentLoaded', function () {
const recipeBoxes = document.querySelectorAll('.recipe-box');
const recipeCards = document.querySelectorAll('.recipe-card');
const blackSection = document.querySelector('.black-section');

recipeBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const recipeId = box.getAttribute('data-recipe');
        const recipeCard = document.getElementById(recipeId);

        recipeCards.forEach(card => {
            if (card.id === recipeId) {
                if (card.style.display === 'none' || !card.style.display) {
                    card.style.display = 'block';
                    const rect = box.getBoundingClientRect();
                    card.style.top = `${rect.bottom + window.scrollY}px`;
                    card.style.left = `${rect.left}px`;
                    blackSection.style.marginTop = `${card.offsetHeight + 40}px`; 
                } else {
                    card.style.display = 'none';
                    blackSection.style.marginTop = '20px'; 
                }
            } else {
                card.style.display = 'none';
            }
        });
    });
});
});
