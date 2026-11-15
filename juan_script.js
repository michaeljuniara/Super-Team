function tampilkanPesan() {
    alert("Halo! Selamat datang di profil gweh!");
}

function ubahTema() {
    document.body.classList.toggle("dark-mode");

    let tombol = document.getElementById("tombolTema");

    if (document.body.classList.contains("dark-mode")) {
        tombol.innerHTML = "Light Mode";
    } else {
        tombol.innerHTML = "Dark Mode";
    }
}