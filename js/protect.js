const isLoggedIn =
localStorage.getItem(
"loggedIn"
);

if(
!isLoggedIn
){

window.location =
"login.html";

}