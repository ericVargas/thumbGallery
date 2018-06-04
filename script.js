const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

//// ES6
//const [current, imgs] = [
//    document.querySelector('#current'), document.querySelectorAll('.imgs img')
//];

imgs.forEach(img => img.addEventListener('click', (e) => (current.src = e.target.src))
);