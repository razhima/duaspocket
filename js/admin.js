/* =========================
   ADMIN.JS - FULL DASHBOARD LOGIC
========================= */

/* -------------------------
   LOAD DATA
------------------------- */

let duas =
JSON.parse(localStorage.getItem("duas")) || [];

let categories =
JSON.parse(localStorage.getItem("categories")) || [];

/* -------------------------
   DASHBOARD STATS
------------------------- */

const totalDuasEl =
document.getElementById("totalDuas");

const totalCategoriesEl =
document.getElementById("totalCategories");

function updateStats(){

if(totalDuasEl){
totalDuasEl.innerText = duas.length;
}

if(totalCategoriesEl){
totalCategoriesEl.innerText = categories.length;
}

}

updateStats();

/* =========================
   POPULATE CATEGORY DROPDOWN
========================= */

const categorySelect =
document.getElementById("category");

function loadCategoryOptions(){

if(!categorySelect) return;

categorySelect.innerHTML = "";

categories.forEach(cat => {

categorySelect.innerHTML += `
<option value="${cat.name}">
${cat.name}
</option>
`;

});

}

loadCategoryOptions();

/* =========================
   ADD NEW DUA
========================= */

const duaForm =
document.getElementById("duaForm");

if(duaForm){

duaForm.addEventListener("submit", function(e){

e.preventDefault();

const title =
document.getElementById("title").value;

const category =
document.getElementById("category").value;

const arabic =
document.getElementById("arabic").value;

const translation =
document.getElementById("translation").value;

const reference =
document.getElementById("reference").value;

const newDua = {

id: Date.now(),
title,
category,
arabic,
translation,
reference,
favorite: false

};

duas.push(newDua);

localStorage.setItem("duas", JSON.stringify(duas));

alert("Dua added successfully!");

location.reload();

});

}

/* =========================
   ADD NEW CATEGORY
========================= */

const categoryForm =
document.getElementById("categoryForm");

if(categoryForm){

categoryForm.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("newCategory").value.trim();

if(!name) return;

categories.push({

id: Date.now(),
name,
icon: "📖"

});

localStorage.setItem("categories", JSON.stringify(categories));

alert("Category added!");

location.reload();

});

}

/* =========================
   RENDER CATEGORIES LIST
========================= */

const categoryList =
document.getElementById("categoryList");

function renderCategories(){

if(!categoryList) return;

categoryList.innerHTML = "";

categories.forEach(cat => {

categoryList.innerHTML += `
<div class="card">

<strong>${cat.name}</strong>

<button class="btn"
onclick="deleteCategory(${cat.id})"
style="float:right;">

Delete

</button>

</div>
`;

});

}

renderCategories();

/* =========================
   DELETE CATEGORY
========================= */

function deleteCategory(id){

if(!confirm("Delete this category?")) return;

categories =
categories.filter(c => c.id !== id);

localStorage.setItem("categories", JSON.stringify(categories));

location.reload();

}

/* =========================
   RENDER ALL DUAS
========================= */

const adminDuas =
document.getElementById("adminDuas");

function renderDuas(){

if(!adminDuas) return;

adminDuas.innerHTML = "";

duas.forEach(dua => {

adminDuas.innerHTML += `
<div class="card">

<h3>${dua.title}</h3>

<p><strong>${dua.category}</strong></p>

<p>${dua.translation}</p>

<div class="admin-actions">

<button class="btn"
onclick="editDua(${dua.id})">

Edit

</button>

<button class="btn"
onclick="deleteDua(${dua.id})">

Delete

</button>

</div>

</div>
`;

});

}

renderDuas();

/* =========================
   DELETE DUA
========================= */

function deleteDua(id){

if(!confirm("Delete this dua?")) return;

duas = duas.filter(d => d.id !== id);

localStorage.setItem("duas", JSON.stringify(duas));

location.reload();

}

/* =========================
   EDIT DUA (SIMPLE VERSION)
========================= */

function editDua(id){

let dua = duas.find(d => d.id === id);

if(!dua) return;

const newTitle =
prompt("Edit Title", dua.title);

const newTranslation =
prompt("Edit Translation", dua.translation);

const newReference =
prompt("Edit Reference", dua.reference);

if(newTitle){

dua.title = newTitle;
}

if(newTranslation){

dua.translation = newTranslation;
}

if(newReference){

dua.reference = newReference;
}

localStorage.setItem("duas", JSON.stringify(duas));

alert("Dua updated!");

location.reload();

}