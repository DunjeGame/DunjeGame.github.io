console.log("ScriptPrivacyPolicy");
document.addEventListener("click", someFunction);
function someFunction(event) {
  console.log(event.target.id);
  if (event.target.id == 'support') {console.log("Click sur support");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'titre4') {console.log("Click sur titre4");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'store') {console.log("Click sur privacy");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'titre3') {console.log("Click sur titre5");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  console.log(event.target.id);
}

console.log("Premiere fonction OK");