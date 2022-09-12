let playerAttack
let enemyAttack
let result

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

//SELECCIÓN ALEATORIA GUERRERO DEL PC Y ATAQUES
function randomEnemyWarrior() {
  let randomEnemy = aleatorio(1,3)
  let spanWarriorEnemy = document.getElementById("warrior-enemy")

  if (randomEnemy == 1) {
    spanWarriorEnemy.innerHTML = "Cadom"
  } else if (randomEnemy == 2) {
    spanWarriorEnemy.innerHTML = "Gentor"
  } else {
    spanWarriorEnemy.innerHTML = "Haggis"
  }
}

function fireAttack() {
  playerAttack = "FIRE"
  randomEnemyAttack()
}
function waterAttack() {
  playerAttack = "WATER"
  randomEnemyAttack()
}
function earthAttack() {
  playerAttack = "EARTH"
  randomEnemyAttack()
}

function randomEnemyAttack() {
  let randomAttack = aleatorio(1,3)

  if (randomAttack == 1) {
    enemyAttack = "FIRE"
  } else if (randomAttack == 2) {
    enemyAttack = "WATER"
  } else {
    enemyAttack = "EARTH"
  }

  combat()
}

function combat() {
  if(playerAttack == enemyAttack) {
    createMessage("TIE")
  } else if(playerAttack == "FIRE" && enemyAttack == "EARTH") {
    createMessage("YOU WON")
  } else if(playerAttack == "WATER" && enemyAttack == "FIRE") {
    createMessage("YOU WON")
  } else if(playerAttack == "EARTH" && enemyAttack == "WATER") {
    createMessage("YOU WON")
  } else {
    createMessage("YOU LOSE")
  }
}

function createMessage(result) {
  let sectionMessages = document.getElementById("messages")

  let paragraph = document.createElement("p")
  paragraph.innerHTML = "Your warrior attacked with " + playerAttack + ". Your enemy's warrior attacked with " + enemyAttack + " - " + result

  sectionMessages.appendChild(paragraph)
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)