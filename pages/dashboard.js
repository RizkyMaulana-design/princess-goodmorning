// ===============================
// Typing Effect
// ===============================

const typing = document.getElementById("typing");

const message =
"Semoga hari ini dipenuhi senyuman, semangat, dan kebahagiaan. Jangan lupa jaga kesehatan, semoga sekolahnya lancar ya Princess 💜";

let i = 0;

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

typeWriter();

// ===============================
// Popup Morning Letter
// ===============================

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

document
.getElementById("letter")
.onclick = ()=>{

    popup.style.display="flex";

};

closePopup.onclick=()=>{

    popup.style.display="none";

};

popup.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

};

// ===============================
// Quotes
// ===============================

const quotes=[

"🌸 Semoga harimu seindah senyummu.",

"💜 Jangan lupa sarapan ya Princess.",

"✨ Tetap semangat mengejar impianmu.",

"🌷 Kamu lebih kuat dari yang kamu kira.",

"❤️ Jangan lupa tersenyum hari ini."

];

document
.getElementById("quote")
.onclick=()=>{

    const random=
    Math.floor(
        Math.random()*quotes.length
    );

    alert(quotes[random]);

};

// ===============================
// Gallery
// ===============================

document
.getElementById("gallery")
.onclick=()=>{

alert(

"📷 Gallery akan kita buat pada tahap berikutnya."

);

};

// ===============================
// Music
// ===============================

document
.getElementById("music")
.onclick=()=>{

alert(

"🎵 Nanti di sini akan dipasang lagu favorit Princess."

);

};

// ===============================
// Countdown
// ===============================

document
.getElementById("countdown")
.onclick=()=>{

const now=new Date();

const hour=now.getHours();

let text="";

if(hour<12){

text="☀️ Selamat Pagi Princess";

}

else if(hour<18){

text="🌤 Selamat Siang Princess";

}

else{

text="🌙 Selamat Malam Princess";

}

alert(text);

};

// ===============================
// Surprise
// ===============================

document
.getElementById("surprise")
.onclick=()=>{

document.body.style.transition="1s";

document.body.style.background=
"linear-gradient(180deg,#ff6ec4,#7873f5)";

setTimeout(()=>{

alert(

"💜\n\nTerima kasih sudah menjadi seseorang yang luar biasa.\n\nSemoga hari ini menjadi salah satu hari terbaikmu.\n\nKeep smiling Princess 🌸✨"

);

document.body.style.background="";

},800);

};

// ===============================
// Floating Card Effect
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`rotateX(${(y-50)/15}deg)
 rotateY(${-(x-50)/15}deg)
 scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0) scale(1)";

});

});