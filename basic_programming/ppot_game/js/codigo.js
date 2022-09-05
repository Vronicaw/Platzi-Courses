function aleatorio(min, max) {
  return Math.floor(Math.random() * ( max - min + 1) + min)
}
// La fórmula de arriba es solo para obtener un número aleatorio DENTRO de un intervalo

function eleccion(jugada) {
  let resultado = ""
  if(jugada == 1) {
      resultado = "Piedra 🪨"
  } else if(jugada == 2) {
      resultado = "Papel 📄"
  } else if(jugada == 3) {
      resultado = "Tijera ✂️"
  } else {
      resultado = "MAL ELEGIDO"
  }
  return resultado
}
// Doble == es para comparar/igualar, un solo = es de asignación 

let player = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1,3)
  player = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera")
  alert("PC elige " + eleccion(pc))
  alert("Tú eliges " + eleccion(player))

  // COMBATE //
  if(pc == player) {
    alert("EMPATE")
  } else if(player == 1 && pc == 3 || player == 2 && pc == 1 || player == 3 && pc == 2) {
    alert("GANASTE")
    triunfos++
  } else {
    alert("PERDISTE")
    perdidas++
  }
  // Escribir ++ después de una variable, es como decir que variable = variable + 1. Solo funciona si es para sumarle 1
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")