const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
