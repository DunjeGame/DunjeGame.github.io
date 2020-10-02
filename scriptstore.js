console.log("ScriptStore");
document.addEventListener("click", someFunction);
function someFunction(event) {
  console.log(event.target.id);
  if (event.target.id == 'privacy') {console.log("Click sur privacy");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'titre5') {console.log("Click sur titre5");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'support') {console.log("Click sur privacy");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'titre4') {console.log("Click sur titre5");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  console.log(event.target.id);
}

console.log("Premiere fonction OK");