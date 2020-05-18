const humberger = document.querySelector('.navbar .humberger-klik input');
const nav = document.querySelector('.navbar ul');

humberger.addEventListener('click', function () {
	nav.classList.toggle('slide');
})
