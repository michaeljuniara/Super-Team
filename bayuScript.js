let target = document.getElementById("target");

target.addEventListener("click", e =>{
    let positionX = Math.random() * 20;
    let positionY = Math.random() * 20;
    target.style.left = `${positionX}vw`;
    target.style.top = `${positionY}vh`;
});