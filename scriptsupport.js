console.log("ScriptSupport");
document.addEventListener("click", someFunction);
function someFunction(event) {
  console.log(event.target.id);
  if (event.target.id == 'privacy') {console.log("Click sur privacy");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'titre5') {console.log("Click sur titre5");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'store') {console.log("Click sur store");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'titre3') {console.log("Click sur titre3");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  console.log(event.target.id);
}
document.addEventListener("touchstart", touchFunction);
function touchFunction(event) {
  console.log("function touchFunction");
  console.log(event.target.id);
  if (event.target.id == 'privacy') {console.log("Click sur privacy");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'titre5') {console.log("Click sur titre5");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'store') {console.log("Click sur store");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'titre3') {console.log("Click sur titre3");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  console.log(event.target.id);
}

console.log("Premiere fonction OK");
