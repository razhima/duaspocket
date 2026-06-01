document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("favoritesList");

if (!container) {
console.error("❌ Missing favoritesList container");
return;
}

/* =========================
   SAFE LOCALSTORAGE READ
========================= */

let duas = [];

try {
duas = JSON.parse(localStorage.getItem("duas")) || [];
} catch (e) {
console.error("❌ Error parsing duas:", e);
duas = [];
}

/* =========================
   FILTER FAVORITES SAFELY
========================= */

let favorites = duas.filter(d => d && d.favorite === true);

/* =========================
   EMPTY STATE (NO BLANK PAGE)
========================= */

if (favorites.length === 0) {
container.innerHTML = `
<div class="card">
<h2>❤️ No Favorites Yet</h2>
<p>Tap the heart button on any dua to save it here.</p>
</div>
`;
return;
}

/* =========================
   RENDER FAVORITES
========================= */

container.innerHTML = favorites.map(d => {

return `
<div class="card">

<h3>${d.title || "Untitled Dua"}</h3>

<p><b>Arabic:</b></p>
<p style="direction:rtl; font-size:20px;">
${d.arabic || ""}
</p>

<p><b>Translation:</b></p>
<p>${d.translation || ""}</p>

<p><small>${d.reference || ""}</small></p>

</div>
`;

}).join("");

});
