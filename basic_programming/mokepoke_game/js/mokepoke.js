let playerAttack

function startGame() {
  let buttonWarrior = document.getElementById("button-warrior")
buttonWarrior.addEventListener("click", selectWarrior)

let buttonFire = document.getElementById("button-fire")
buttonFire.addEventListener("click", fireAttack)
let buttonWater = document.getElementById("button-water")
buttonWater.addEventListener("click", waterAttack)
let buttonEarth = document.getElementById("button-earth")
buttonEarth.addEventListener("click", earthAttack)
}

// SELECCIÓN DEL GUERRERO DEL JUGADOR
function selectWarrior() {
  let inputCadom = document.getElementById("cadom")
  let inputGentor = document.getElementById("gentor")
  let inputHaggis = document.getElementById("haggis")
  let spanWarriorPlayer = document.getElementById("warrior-player")

  if (inputCadom.checked) {
    spanWarriorPlayer.innerHTML = "Cadom"
  } else if (inputGentor.checked) {
    spanWarriorPlayer.innerHTML = "Gentor"
  } else if (inputHaggis.checked) {
    spanWarriorPlayer.innerHTML = "Haggis"
  } else {
    alert("You need to choose a warrior")
  }

  randomEnemyWarrior()
}

//SELECCIÓN ALEATORIA GUERRERO DEL PC
function randomEnemyWarrior() {
  let randomAttack = aleatorio(1,3)
  let spanWarriorEnemy = document.getElementById("warrior-enemy")

  if (randomAttack == 1) {
    spanWarriorEnemy.innerHTML = "Cadom"
  } else if (randomAttack == 2) {
    spanWarriorEnemy.innerHTML = "Gentor"
  } else {
    spanWarriorEnemy.innerHTML = "Haggis"
  }
}

function fireAttack() {
  playerAttack = "FIRE"
  alert(playerAttack)
}
function waterAttack() {
  playerAttack = "WATER"
  alert(playerAttack)
}
function earthAttack() {
  playerAttack = "EARTH"
  alert(playerAttack)
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)