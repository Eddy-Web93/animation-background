let circle = document.getElementById("circle");
let body = document.getElementById("body")
window.addEventListener("mousemove", (event) => {
    var x = event.clientX
    var y = event.clientY
    var mouseX = x / 4;
    var mouseY = y / 3;
    circle.style.transform = `translate(${x}px, ${y}px)`;
    body.style.background= `rgba(20,${mouseX + 118}, ${mouseY + 120}, 1)`
    var bubbles = document.querySelectorAll(".bubble");
    
    bubbles.forEach(bubble => {
        bubble.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
});

window.addEventListener("click", ()=>{
    circle.style.display = "flex";

    setTimeout(()=>{
        circle.style.display = "none";
    }, 5500)
});