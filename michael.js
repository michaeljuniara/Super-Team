document.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'red';
    }
});

document.addEventListener('mouseout', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.style.color = '';
    }
});

const popup = document.getElementById('popup');
const isiPopup = document.getElementById('isi-popup');
const tombolTutup = document.getElementById('tutup-popup');

document.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const teks = event.target.textContent;
        popup.style.display = 'flex';

        // === BAGIAN YANG PERLU DIISI ===
        if (teks.includes('Berolahraga')) {
            isiPopup.innerHTML = '<video src="IMG_0569.mp4" controls autoplay style="max-width: 90vw; max-height: 90vh;"></video>';
        }
        else if (teks.includes('Menonton Anime')) {
            isiPopup.innerHTML = '<img src="IMG_0082.JPG" style="max-width: 90vw; max-height: 90vh;">';
        }
        else if (teks.includes('Bermain Game')) {
            isiPopup.innerHTML = '<img src="IMG_2459.jpg" style="max-width: 90vw; max-height: 90vh;"> <img src="Screenshot 2026-11-15 181131.jpg" style="max-width: 90vw; max-height: 90vh;">';
        }
        else if (teks.includes('Calisthenic')) {
            isiPopup.innerHTML = '<video src="IMG_1259.mp4" controls autoplay style="max-width: 90vw; max-height: 90vh;"></video>';
        }
        else if (teks.includes('Penggendong Handal')) {
            isiPopup.innerHTML = '<img src="YHYT4502.JPG" style="max-width: 90vw; max-height: 90vh;"><img src="IMG_1166.JPG" style="max-width: 90vw; max-height: 90vh;">';
        }
    }
});

tombolTutup.addEventListener('click', function () {
    popup.style.display = 'none';
    isiPopup.innerHTML = '';
});