// ==========================================
// Relationship Timer
// ==========================================

const startDate = new Date("2025-06-17T00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateTimer,1000);

updateTimer();


// ==========================================
// Typing Love Letter
// ==========================================

const message = `

HAPPY GIRLFRIENDS DAY MY BETU ❤️

I LOVE YOU SOOO MUCHHHH...

You are not only my girlfriend,

You are my Buddy,

My Friend,

My Care Taker,

My Child,

My Mother,

My Best Friend,

My Everything 🫂💕

I am so glad that God gave me

the prettiest lady in the whole galaxy.

Thank you for being with a nerd guy like me.

Thank you for loving me every single time.

Remember...

Our fights only make us stronger.

I promise...

One day I will marry you officially. 💍❤️

YOUR JAY LOVES YOU VERY MUCH 💗

J💕S ALWAYS

`;

let i = 0;

function typing(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typing,40);

    }

}

typing();


// ==========================================
// Floating Hearts
// ==========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-30px";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="110vh";

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6500);

}

setInterval(createHeart,600);


// ==========================================
// Open Button
// ==========================================

document.getElementById("startBtn").onclick=function(){

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

};


// ==========================================
// Surprise Button
// ==========================================

document.getElementById("surpriseBtn").onclick=function(){

    confetti();

    alert("❤️ I LOVE YOU SUHANI ❤️\n\nForever & Always 💍");

};


// ==========================================
// Simple Confetti
// ==========================================

function confetti(){

    for(let i=0;i<200;i++){

        let piece=document.createElement("div");

        piece.style.position="fixed";

        piece.style.width="10px";

        piece.style.height="10px";

        piece.style.background=
        `hsl(${Math.random()*360},100%,70%)`;

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.zIndex="9999";

        piece.style.transition="4s linear";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.style.top="110vh";

            piece.style.transform=
            `rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}


// ==========================================
// Fade Animation
// ==========================================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1000,

fill:"forwards"

});

}

});

});

sections.forEach(section=>{

observer.observe(section);

});
// ==========================
// Cursor Sparkles
// ==========================

document.addEventListener("mousemove",(e)=>{

let s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1000);

});


// ==========================
// Moon Secret
// ==========================

document.querySelector(".moon").onclick=function(){

alert("🌙\n\nIn every universe...\nI'd still choose you ❤️");

};


// ==========================
// Surprise Button
// ==========================

document.getElementById("surpriseBtn").onclick=function(){

confetti();

setTimeout(()=>{

document.getElementById("proposal").style.display="flex";

},1500);

};


// ==========================
// Close Popup
// ==========================

function closeProposal(){

document.getElementById("proposal").style.display="none";

confetti();

}


// ==========================
// Falling Roses
// ==========================

function rose(){

let r=document.createElement("div");

r.innerHTML="🌹";

r.style.position="fixed";

r.style.left=Math.random()*100+"vw";

r.style.top="-50px";

r.style.fontSize=(20+Math.random()*20)+"px";

r.style.transition="7s linear";

r.style.zIndex="999";

document.body.appendChild(r);

setTimeout(()=>{

r.style.top="110vh";

r.style.transform="rotate(720deg)";

},50);

setTimeout(()=>{

r.remove();

},7000);

}

setInterval(rose,1200);