const textarea = document.getElementById("entry");

// Load saved diary
textarea.value = localStorage.getItem("diary") || "";

function saveEntry() {
  localStorage.setItem("diary", textarea.value);
  alert("Saved 🌸");
}

// Install button
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
  deferredPrompt.prompt();
  deferredPrompt = null;
  installBtn.hidden = true;
});
