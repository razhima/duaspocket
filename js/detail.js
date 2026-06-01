/* =========================
   DETAIL.JS - DUA DETAIL VIEW
========================= */

/* -------------------------
   GET DUA ID FROM URL
------------------------- */

const params =
new URLSearchParams(window.location.search);

const id = params.get("id");

/* -------------------------
   LOAD DUAS
------------------------- */

let duas =
JSON.parse(localStorage.getItem("duas")) || [];

let dua =
duas.find(d => d.id == id);

/* -------------------------
   CONTAINER
------------------------- */

const container =
document.getElementById("duaDetail");

if(!container){

console.error("Missing #duaDetail element");
}

/* -------------------------
   HANDLE NOT FOUND
------------------------- */

if(!dua){

container.innerHTML = `
<div class="card">
<h2>Dua not found</h2>
<p>The selected dua does not exist.</p>
<a href="index.html" class="btn">Go Home</a>
</div>
`;

throw new Error("Dua not found");

}

/* -------------------------
   FONT CONTROL STATE
------------------------- */

let fontSize = 34;

/* -------------------------
   RENDER DUA
------------------------- */

function renderDua(){

container.innerHTML = `
<div class="card">

<h2>${dua.title}</h2>

<div id="arabicText"
style="
font-size:${fontSize}px;
line-height:2;
text-align:right;
direction:rtl;
font-family:'Traditional Arabic', serif;
">

${dua.arabic}

</div>

<br>

<h3>Translation</h3>
<p>${dua.translation}</p>

<br>

<h3>Reference</h3>
<p>${dua.reference}</p>

<br>

<div class="actions">

<button class="btn" onclick="copyDua()">
📋 Copy
</button>

<button class="btn" onclick="shareDua()">
📤 Share
</button>

<button class="btn" onclick="increaseFont()">
A+
</button>

<button class="btn" onclick="decreaseFont()">
A-
</button>

<button class="btn" onclick="toggleFavorite()">
${dua.favorite ? "❤️ Saved" : "🤍 Favorite"}
</button>

</div>

</div>
`;
}

renderDua();

/* =========================
   COPY DUA
========================= */

function copyDua(){

const text =
`${dua.arabic}

${dua.translation}

(${dua.reference})`;

navigator.clipboard.writeText(text);

alert("Dua copied to clipboard.");

}

/* =========================
   SHARE DUA
========================= */

function shareDua(){

const text =
`${dua.title}\n\n${dua.translation}`;

if(navigator.share){

navigator.share({
title: dua.title,
text: text
});

}else{

alert("Sharing not supported on this device.");

}

}

/* =========================
   FONT SIZE CONTROLS
========================= */

function increaseFont(){

fontSize += 2;
renderDua();

}

function decreaseFont(){

fontSize -= 2;

if(fontSize < 20){
fontSize = 20;
}

renderDua();

}

/* =========================
   FAVORITE TOGGLE
========================= */

function toggleFavorite(id){

let duas = JSON.parse(localStorage.getItem("duas")) || [];

let dua = duas.find(d => d.id === id);

if (!dua) return;

dua.favorite = !dua.favorite;

localStorage.setItem("duas", JSON.stringify(duas));

alert("Favorite updated ❤️");

}
/* =========================
   OPTIONAL: AUTO SAVE VIEWED DUA (WIDGET)
========================= */

localStorage.setItem("lastViewedDua", dua.id);
