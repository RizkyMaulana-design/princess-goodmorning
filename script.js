const next = document.getElementById("next");

next.addEventListener("click", () => {

    // Disable tombol
    next.disabled = true;

    next.innerHTML = "💜 Membuka Kejutan...";

    // Efek klik tombol
    next.style.transform = "scale(.95)";

    // Card
    const card = document.querySelector(".glass");

    // Foto
    const photo = document.querySelector(".photoBox img");

    // Background Aurora
    const glow = document.querySelector(".gradient");

    // Semua text
    const text = document.querySelector(".textBox");

    // Judul
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");

    // Animasi
    card.style.transition = "1.8s";
    photo.style.transition = "2s";
    glow.style.transition = "2s";
    text.style.transition = "1.5s";
    title.style.transition = "1.5s";
    subtitle.style.transition = "1.5s";

    glow.style.transform = "scale(2.5)";
    glow.style.opacity = "1";

    photo.style.transform = "scale(1.15)";

    title.style.opacity = "0";
    subtitle.style.opacity = "0";
    text.style.opacity = "0";

    setTimeout(()=>{

        card.style.transform = "scale(1.05)";
        card.style.opacity = "0";

    },800);

    setTimeout(()=>{

        document.body.style.transition="2s";
        document.body.style.background="#000";

    },1500);

    setTimeout(()=>{

        location.href="pages/loading.html";

    },2600);

});