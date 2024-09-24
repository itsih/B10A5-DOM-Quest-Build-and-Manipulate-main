

const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    // Toggle between two colors (e.g., red and blue)
    if (button.style.backgroundColor === '#b4f461') {
        button.style.backgroundColor = 'gray';
    } else {
        button.style.backgroundColor = '#b4f461';
    }
});
