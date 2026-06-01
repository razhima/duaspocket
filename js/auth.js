/* =========================
   AUTH.JS
========================= */

// Create default admin account

(function(){

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const adminExists =
users.find(
u => u.email === "admin@duaspocket.com"
);

if(!adminExists){

users.push({

id:1,
name:"Administrator",
email:"admin@duaspocket.com",
password:"admin123",
role:"admin"

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

}

})();

/* =========================
   SIGNUP
========================= */

const signupForm =
document.getElementById(
"signupForm"
);

if(signupForm){

signupForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("name")
.value.trim();

const email =
document.getElementById("email")
.value.trim();

const password =
document.getElementById("password")
.value;

const confirmPassword =
document.getElementById(
"confirmPassword"
).value;

if(
name === "" ||
email === "" ||
password === ""
){
alert("Please fill all fields.");
return;
}

if(password.length < 6){

alert(
"Password must be at least 6 characters."
);

return;

}

if(password !== confirmPassword){

alert(
"Passwords do not match."
);

return;

}

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const existing =
users.find(
u => u.email === email
);

if(existing){

alert(
"Email already exists."
);

return;

}

const user = {

id:Date.now(),
name:name,
email:email,
password:password,
role:"user"

};

users.push(user);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert(
"Account created successfully."
);

window.location.href =
"login.html";

});

}

/* =========================
   LOGIN
========================= */

const loginForm =
document.getElementById(
"loginForm"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("email")
.value.trim();

const password =
document.getElementById("password")
.value;

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const user =
users.find(
u =>
u.email === email &&
u.password === password
);

if(!user){

alert(
"Invalid email or password."
);

return;

}

localStorage.setItem(
"loggedIn",
"true"
);

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

alert(
"Welcome " + user.name
);

window.location.href =
"index.html";

});

}

/* =========================
   LOGOUT
========================= */

function logout(){

if(
confirm("Logout?")
){

localStorage.removeItem(
"loggedIn"
);

localStorage.removeItem(
"currentUser"
);

window.location.href =
"login.html";

}

}

/* =========================
   SESSION CHECK
========================= */

function isLoggedIn(){

return (
localStorage.getItem(
"loggedIn"
) === "true"
);

}

/* =========================
   CURRENT USER
========================= */

function getCurrentUser(){

return JSON.parse(
localStorage.getItem(
"currentUser"
)
);

}

/* =========================
   UPDATE PROFILE
========================= */

function updateProfile(
newName
){

let user =
getCurrentUser();

if(!user) return;

let users =
JSON.parse(
localStorage.getItem(
"users"
)
);

const index =
users.findIndex(
u => u.id === user.id
);

if(index !== -1){

users[index].name =
newName;

localStorage.setItem(
"users",
JSON.stringify(users)
);

localStorage.setItem(
"currentUser",
JSON.stringify(
users[index]
)
);

}

}

/* =========================
   CHANGE PASSWORD
========================= */

function changePassword(
oldPass,
newPass
){

let user =
getCurrentUser();

if(!user) return false;

let users =
JSON.parse(
localStorage.getItem(
"users"
)
);

const index =
users.findIndex(
u => u.id === user.id
);

if(index === -1){

return false;

}

if(
users[index].password !==
oldPass
){

return false;

}

users[index].password =
newPass;

localStorage.setItem(
"users",
JSON.stringify(users)
);

return true;

}