/* =========================
   APP.JS - MAIN HOME LOGIC
========================= */

/* -------------------------
   GET DATA
------------------------- */

let categories =
JSON.parse(localStorage.getItem("categories")) || [];

let duas =
JSON.parse(localStorage.getItem("duas")) || [];

/* -------------------------
   DOM ELEMENTS
------------------------- */

const categoryGrid =
document.getElementById("categoryGrid");

const searchInput =
document.getElementById("searchInput");

const widgetDua =
document.getElementById("widgetDua");

/* =========================
   LOAD CATEGORIES
========================= */

function renderCategories(list){

if(!categoryGrid) return;

categoryGrid.innerHTML = "";

list.forEach(cat => {

const count =
duas.filter(d => d.category === cat.name).length;

categoryGrid.innerHTML += `
<div class="card category-card"
onclick="openCategory('${cat.name}')">

<div class="category-icon">
${cat.icon}
</div>

<h3>${cat.name}</h3>

<p>${count} Duas</p>

</div>
`;

});

}

renderCategories(categories);

/* =========================
   OPEN CATEGORY
========================= */

function openCategory(name){

window.location.href =
"duas.html?category=" + encodeURIComponent(name);

}

/* =========================
   SEARCH CATEGORIES
========================= */

if(searchInput){

searchInput.addEventListener("input", function(){

const value =
this.value.toLowerCase();

const filtered =
categories.filter(cat =>
cat.name.toLowerCase().includes(value)
);

renderCategories(filtered);

});

}

/* =========================
   WIDGET DUA (HOME CARD)
========================= */

function loadWidget(){

if(!widgetDua) return;

const widgetId =
localStorage.getItem("widgetDua");

if(widgetId){

const dua =
duas.find(d => d.id == widgetId);

if(dua){

widgetDua.innerHTML = `
<strong>${dua.title}</strong>
<br><br>
${dua.translation}
`;

return;

}

}

// fallback random dua

if(duas.length > 0){

const random =
duas[Math.floor(Math.random() * duas.length)];

widgetDua.innerHTML = `
<strong>${random.title}</strong>
<br><br>
${random.translation}
`;

}

}

loadWidget();

/* =========================
   DARK MODE TOGGLE
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

const menu =
document.getElementById("mobileMenu");

if(!menu) return;

menu.style.display =
(menu.style.display === "block") ? "none" : "block";

}

/* =========================
   USER GREETING (OPTIONAL)
========================= */

(function(){

const user =
JSON.parse(localStorage.getItem("currentUser"));

if(user){

console.log("Welcome " + user.name);

}

})();

/* =========================
   LOGOUT (SAFE CALL)
========================= */

function logout(){

localStorage.removeItem("loggedIn");
localStorage.removeItem("currentUser");

window.location.href = "login.html";

}

/* =========================
   PWA INSTALL BUTTON HOOK
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

const installBtn =
document.getElementById("installBtn");

if(installBtn){

installBtn.addEventListener("click", async () => {

if(!deferredPrompt) return;

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt = null;

});

}