
/* =========================
   APP.JS - MAIN HOME LOGIC (FIXED)
========================= */

/* -------------------------
   GET DATA (SAFE)
------------------------- */

let categories = JSON.parse(localStorage.getItem("categories")) || [];
let duas = JSON.parse(localStorage.getItem("duas")) || [];

/* -------------------------
   DOM ELEMENTS
------------------------- */

const categoryGrid = document.getElementById("categoryGrid");
const searchInput = document.getElementById("searchInput");
const widgetDua = document.getElementById("widgetDua");

/* =========================
   RENDER CATEGORIES
========================= */

function renderCategories(list) {

if (!categoryGrid) return;

categoryGrid.innerHTML = "";

list.forEach(cat => {

let count = duas.filter(d => d.category === cat.name).length;

categoryGrid.innerHTML += `
<div class="card category-card"
onclick="openCategory('${cat.name}')">

<div class="category-icon">
${cat.icon || "📖"}
</div>

<h3>${cat.name}</h3>

<p>${count} Duas</p>

</div>
`;

});

}

/* INITIAL LOAD SAFETY */
if (categories.length > 0) {
renderCategories(categories);
}

/* =========================
   OPEN CATEGORY (SAFE NAV)
========================= */

function openCategory(name){

if(!name) return;

window.location.href =
"duas.html?category=" + encodeURIComponent(name);

}

/* =========================
   SEARCH CATEGORIES
========================= */

if (searchInput) {

searchInput.addEventListener("input", function () {

let value = this.value.toLowerCase();

let filtered = categories.filter(cat =>
(cat.name || "").toLowerCase().includes(value)
);

renderCategories(filtered);

});

}

/* =========================
   WIDGET DUA (SAFE)
========================= */

document.addEventListener("DOMContentLoaded", function () {

const widgetDua = document.getElementById("widgetDua");

console.log("Widget element:", widgetDua);

let duas;

try {
duas = JSON.parse(localStorage.getItem("duas"));
} catch (e) {
console.error("DUAS ERROR:", e);
duas = null;
}

console.log("DUAS DATA:", duas);

// FIX EMPTY DATA ISSUE
if (!Array.isArray(duas) || duas.length === 0) {
widgetDua.innerHTML = "❌ No duas loaded";
return;
}

let widgetId = localStorage.getItem("widgetDua");

let dua = null;

if (widgetId) {
dua = duas.find(d => d.id == widgetId);
}

if (!dua) {
dua = duas[Math.floor(Math.random() * duas.length)];
}

console.log("SELECTED DUA:", dua);

if (!dua) {
widgetDua.innerHTML = "❌ No dua found";
return;
}

widgetDua.innerHTML = `
<strong>${dua.title}</strong>
<br><br>
${dua.translation}
`;

});

/* =========================
   DARK MODE
========================= */

function toggleDark(){

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

}

(function(){

if(localStorage.getItem("darkMode") === "true"){
document.body.classList.add("dark");
}

})();

/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

const menu = document.getElementById("mobileMenu");

if(!menu) return;

menu.style.display =
(menu.style.display === "block") ? "none" : "block";

}

/* =========================
   USER (SAFE)
========================= */

(function(){

try {
const user = JSON.parse(localStorage.getItem("currentUser"));

if(user){
console.log("Welcome " + (user.name || "User"));
}
} catch(e){}

})();

/* =========================
   LOGOUT
========================= */

function logout(){

localStorage.removeItem("loggedIn");
localStorage.removeItem("currentUser");

window.location.href = "login.html";

}

/* =========================
   PWA INSTALL BUTTON
========================= */

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

e.preventDefault();
deferredPrompt = e;

const btn = document.getElementById("installBtn");

if(btn){
btn.style.display = "block";
}

});

const installBtn = document.getElementById("installBtn");

if(installBtn){

installBtn.addEventListener("click", async () => {

if(!deferredPrompt) return;

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt = null;

});

}
