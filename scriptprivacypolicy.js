console.log("ScriptPrivacyPolicy");
if ("ontouchstart" in document.documentElement)
{
  alert("handy")
console.log("your device is a touch screen device.");
document.write("your device is a touch screen device.");
}
else
{
 console.log("your device is a touch screen device.");
 document.write("your device is NOT a touch device");
}
document.addEventListener("click", someFunction);
function someFunction(event) {
  console.log("function someFunction");
  console.log(event.target.id);
  if (event.target.id == 'support') {console.log("Click sur support");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'titre4') {console.log("Click sur titre4");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'store') {console.log("Click sur store	");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'titre3') {console.log("Click sur titre3");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  console.log(event.target.id);
}
document.addEventListener("touchstart", touchFunction);
function touchFunction(event) {
  console.log("function touchFunction");
  console.log(event.target.id);
  if (event.target.id == 'support') {console.log("Click sur support");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'titre4') {console.log("Click sur titre4");window.location.href = "https://dunjegame.github.io/Support.html";return;}
  if (event.target.id == 'store') {console.log("Click sur store	");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  if (event.target.id == 'titre3') {console.log("Click sur titre3");window.location.href = "https://dunjegame.github.io/GameStore.html";return;}
  console.log(event.target.id);
}

console.log("Premiere fonction OK");
