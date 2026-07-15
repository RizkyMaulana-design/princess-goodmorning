const title = document.getElementById("typing");
const text = document.getElementById("typing2");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const titleText = "Welcome Princess Sandrina 💜";
const subText = "Preparing today's happiness...\nPlease wait a moment ✨";

let i = 0;

// ======================
// Typing Judul
// ======================

function typingTitle(){

    if(i < titleText.length){

        title.innerHTML += titleText.charAt(i);

        i++;

        setTimeout(typingTitle,70);

    }else{

        typingText();

    }

}

// ======================
// Typing Text
// ======================

let j=0;

function typingText(){

    if(j < subText.length){

        if(subText.charAt(j)=="\n"){

            text.innerHTML+="<br>";

        }else{

            text.innerHTML+=subText.charAt(j);

        }

        j++;

        setTimeout(typingText,35);

    }else{

        startLoading();

    }

}

// ======================
// Progress Bar
// ======================

function startLoading(){

    let load=0;

    const timer=setInterval(()=>{

        load++;

        percent.innerHTML=load+"%";

        bar.style.width=load+"%";

        if(load>=100){

            clearInterval(timer);

            finishLoading();

        }

    },45);

}

// ======================
// Finish Animation
// ======================

function finishLoading(){

    document.body.style.transition="2s";

    document.body.style.transform="scale(1.08)";

    document.body.style.opacity="0";

    setTimeout(()=>{

        location.href="dashboard.html";

    },1800);

}

// ======================

typingTitle();