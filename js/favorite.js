const list =
document.getElementById(
"favoritesList"
);

const duas =
JSON.parse(
localStorage.getItem(
"duas"
));

const favorites =
duas.filter(
d=>d.favorite
);

if(favorites.length===0){

list.innerHTML=`

<div class="card">

No favorites yet.

</div>

`;

}else{

favorites.forEach(dua=>{

list.innerHTML += `

<div class="card">

<h3>

${dua.title}

</h3>

<p>

${dua.translation}

</p>

<br>

<a
href="
detail.html?id=${dua.id}
"
class="btn">

Read

</a>

</div>

`;

});

}