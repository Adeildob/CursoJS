var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();
console.log(`Agora são extamente ${hora}h:${minutos}m:${segundos}s`);
if (hora <= 4) {
  console.log("Boa madrugada!");
} else if (hora > 4 && hora <= 12) {
  console.log("Bom dia!");
} else if (hora > 12 && hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
