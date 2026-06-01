/* =========================
   PWA.JS - PROGRESSIVE WEB APP SETUP
========================= */

/* =========================
   SERVICE WORKER REGISTRATION
========================= */

if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker
.register("./service-worker.js")
.then(reg => {

console.log("Service Worker registered:", reg.scope);

})
.catch(err => {

console.log("Service Worker failed:", err);

});

});

}

/* =========================
   INSTALL PROMPT HANDLING
========================= */

let deferredPrompt = null;

const installBtn =
document.getElementById("installBtn");

/* -------------------------
   BEFORE INSTALL PROMPT
------------------------- */

window.addEventListener("beforeinstallprompt", (e) => {

e.preventDefault();

deferredPrompt = e;

if (installBtn) {
installBtn.style.display = "block";
installBtn.innerText = "📲 Install App";
}

});

/* -------------------------
   INSTALL BUTTON CLICK
------------------------- */

if (installBtn) {

installBtn.addEventListener("click", async () => {

if (!deferredPrompt) {
alert("Install not available right now.");
return;
}

deferredPrompt.prompt();

const choice = await deferredPrompt.userChoice;

if (choice.outcome === "accepted") {
console.log("User installed app");
} else {
console.log("User dismissed install");
}

deferredPrompt = null;

if (installBtn) {
installBtn.innerText = "Installed ✓";
installBtn.disabled = true;
}

});

}

/* =========================
   APP INSTALLED EVENT
========================= */

window.addEventListener("appinstalled", () => {

console.log("PWA installed successfully");

if (installBtn) {
installBtn.innerText = "Installed ✓";
installBtn.disabled = true;
}

deferredPrompt = null;

});

/* =========================
   OFFLINE DETECTION (OPTIONAL UI FEEDBACK)
========================= */

window.addEventListener("online", () => {

console.log("Back online");

});

window.addEventListener("offline", () => {

console.log("You are offline");

});

/* =========================
   OPTIONAL: FORCE CACHE REFRESH (DEV USE)
========================= */

function clearPWACache(){

if ("caches" in window) {

caches.keys().then(names => {

names.forEach(name => {
caches.delete(name);
});

console.log("Cache cleared");

});

}

}