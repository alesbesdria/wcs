const img = document.getElementById('skull');
let scale = 1; 

img.style.transition = 'transform 0.1s ease-out';

document.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
        scale = Math.max(0.5, scale - 0.1);
    } else {
        scale += 0.1;
    }

    img.style.transform = `scale(${scale})`;
});
