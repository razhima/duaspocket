document.addEventListener("DOMContentLoaded", function () {

let duas = JSON.parse(localStorage.getItem("duas")) || [];

// filter only favorites
let favorites = duas.filter(d => d.favorite === true);

let container = document.getElementById("favoritesList");

// safety check (prevents blank page crash)
if (!container) {
console.error("favoritesList not found in HTML");
return;
}

// if no favorites
if (favorites.length === 0) {
container.innerHTML = `
<div class="card">
<h2>❤️ No Favorites Yet</h2>
<p>Tap the heart button on any dua to save it here.</p>
</div>
`;
return;
}

// render favorites
container.innerHTML = favorites.map(d => `
<div class="card">

<h3>${d.title}</h3>

<p><b>Arabic:</b></p>
<p style="font-size:20px; direction:rtl;">${d.arabic}</p>

<p><b>Translation:</b></p>
<p>${d.translation}</p>

<p><small>${d.reference}</small></p>

</div>
`).join("");

});
