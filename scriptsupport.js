console.log("ScriptSupport");
document.addEventListener("click", someFunction);
function someFunction(event) {
  console.log(event.target.id);
  if (event.target.id == 'privacy') {console.log("Click sur privacy");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'titre5') {console.log("Click sur titre5");window.location.href = "https://dunjegame.github.io/PrivacyPolicy.html";return;}
  if (event.target.id == 'store') {console.log("Click sur store");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'titre3') {console.log("Click sur titre3");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'appli1') {console.log("Click sur appli1");window.location.href = "https://dunjegame.github.io/GameStore.html#4inarow";return;}
  if (event.target.id == 'appli2') {console.log("Click sur appli2");window.location.href = "https://dunjegame.github.io/GameStore.html#seabattle";return;}
  if (event.target.id == 'appli3') {console.log("Click sur appli3");window.location.href = "https://dunjegame.github.io/GameStore.html#warcardgame";return;}
  if (event.target.id == 'appli4') {console.log("Click sur appli4");window.location.href = "https://dunjegame.github.io/GameStore.html#snakesandladders";return;}
  if (event.target.id == 'appli5') {console.log("Click sur appli5");window.location.href = "https://dunjegame.github.io/GameStore.html#ludohorserace";return;}
  if (event.target.id == 'appli6') {console.log("Click sur appli6");window.location.href = "https://dunjegame.github.io/GameStore.html#thegameofthegoose";return;}
  if (event.target.id == 'appli7') {console.log("Click sur appli7");window.location.href = "https://dunjegame.github.io/GameStore.html#colorcode";return;}
  if (event.target.id == 'appli8') {console.log("Click sur appli8");window.location.href = "https://dunjegame.github.io/GameStore.html#captainmemo";return;}
  if (event.target.id == 'appli9') {console.log("Click sur appli9");window.location.href = "https://dunjegame.github.io/GameStore.html#tictactoe3D";return;}
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
  if (event.target.id == 'appli1') {console.log("Click sur appli1");window.location.href = "https://dunjegame.github.io/GameStore.html#4inarow";return;}
  if (event.target.id == 'appli2') {console.log("Click sur appli2");window.location.href = "https://dunjegame.github.io/GameStore.html#seabattle";return;}
  if (event.target.id == 'appli3') {console.log("Click sur appli3");window.location.href = "https://dunjegame.github.io/GameStore.html#warcardgame";return;}
  if (event.target.id == 'appli4') {console.log("Click sur appli4");window.location.href = "https://dunjegame.github.io/GameStore.html#snakesandladders";return;}
  if (event.target.id == 'appli5') {console.log("Click sur appli5");window.location.href = "https://dunjegame.github.io/GameStore.html#ludohorserace";return;}
  if (event.target.id == 'appli6') {console.log("Click sur appli6");window.location.href = "https://dunjegame.github.io/GameStore.html#thegameofthegoose";return;}
  if (event.target.id == 'appli7') {console.log("Click sur appli7");window.location.href = "https://dunjegame.github.io/GameStore.html#colorcode";return;}
  if (event.target.id == 'appli8') {console.log("Click sur appli8");window.location.href = "https://dunjegame.github.io/GameStore.html#captainmemo";return;}
  if (event.target.id == 'appli9') {console.log("Click sur appli9");window.location.href = "https://dunjegame.github.io/GameStore.html#tictactoe3D";return;}
  console.log(event.target.id);
}

console.log("Premiere fonction OK");
