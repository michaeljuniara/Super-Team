// Saat kursor masuk ke salah satu <li>
document.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'; // Hanya <li> yang di-hover yang berubah
    }
});

// Saat kursor keluar dari <li> tersebut
document.addEventListener('mouseout', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.style.color = ''; // Kembalikan ke warna asal di CSS
    }
});
