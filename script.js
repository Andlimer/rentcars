const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active');
	navMenu.classList.toggle('active');
});

