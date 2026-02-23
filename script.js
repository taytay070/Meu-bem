function criarCoracao(){
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "20px";
    heart.style.animation = "cair 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(criarCoracao,300);
window.addEventListener("load", ()=>{
    document.body.classList.add("loaded");
});
document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click", function(e){

        const destino = this.getAttribute("href");

        if(destino){
            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(()=>{
                window.location.href = destino;
            },600);
        }
    });
});

const musica = document.getElementById("musica");

if(musica){
    musica.volume = 0.2;
}