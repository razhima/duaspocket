/* =========================
   DUAS.JS - CATEGORY DUA LIST
========================= */

/* -------------------------
   GET CATEGORY FROM URL
------------------------- */

const params =
new URLSearchParams(window.location.search);

const category =
params.get("category");

/* -------------------------
   LOAD DATA
------------------------- */

let duas =
JSON.parse(localStorage.getItem("duas")) || [];

/* -------------------------
   DOM ELEMENTS
------------------------- */

const list =
document.getElementById("duaList");

const searchInput =
document.getElementById("duaSearch");

const title =
document.getElementById("categoryTitle");

/* -------------------------
   SET CATEGORY TITLE
------------------------- */

if(title){
title.innerText = category || "Duas";
}

/* -------------------------
   FILTER BY CATEGORY
------------------------- */

let filtered =
duas.filter(d => d.category === category);

/* =========================
   RENDER DUAS
========================= */

function renderDuas(data){

if(!list) return;

list.innerHTML = "";

if(data.length === 0){

list.innerHTML = `
<div class="card">
<h3>No duas found</h3>
<p>Try another category or search.</p>
</div>
`;

return;

}

data.forEach(dua => {

list.innerHTML += `
<div class="card dua-item">

<h3>${dua.title}</h3>

<p>
${dua.translation.length > 120
? dua.translation.substring(0,120) + "..."
: dua.translation}
</p>

<div class="actions">

<button class="btn"
onclick="openDua(${dua.id})">

📖 Read

</button>

<button class="btn"
onclick="toggleFavorite(${dua.id})">

${dua.favorite ? "❤️" : "🤍"}

</button>

<button class="btn"
onclick="setWidget(${dua.id})">

📌 Widget

</button>

</div>

</div>
`;

});

}

renderDuas(filtered);

/* =========================
   OPEN DUA DETAIL
========================= */

function openDua(id){

window.location.href =
"detail.html?id=" + id;

}

/* =========================
   FAVORITE TOGGLE
========================= */

function toggleFavorite(id){

let all =
JSON.parse(localStorage.getItem("duas")) || [];

let dua =
all.find(d => d.id == id);

if(!dua) return;

dua.favorite = !dua.favorite;

localStorage.setItem("duas", JSON.stringify(all));

filtered =
all.filter(d => d.category === category);

renderDuas(filtered);

}

/* =========================
   SET WIDGET DUA
========================= */

function setWidget(id){

localStorage.setItem("widgetDua", id);

alert("Dua set as widget!");

}

/* =========================
   SEARCH FUNCTION
========================= */

if(searchInput){

searchInput.addEventListener("input", function(){

const value =
this.value.toLowerCase();

const results =
filtered.filter(dua =>

dua.title.toLowerCase().includes(value) ||

dua.translation.toLowerCase().includes(value)

);

renderDuas(results);

});

}

/* =========================
   REFRESH DATA FUNCTION (SAFE SYNC)
========================= */

function refreshData(){

let all =
JSON.parse(localStorage.getItem("duas")) || [];

filtered =
all.filter(d => d.category === category);

renderDuas(filtered);

}