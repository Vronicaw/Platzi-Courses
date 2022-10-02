let playerAttack
let enemyAttack
let result
let playerLives = 3
let enemyLives = 3
let finalResult

function startGame() {
  //Elementos de HTML ocultos al inicio del juego
  let sectionChooseAttack = document.getElementById("choose-attack")
  sectionChooseAttack.style.display = "none"
  let sectionRestartGame = document.getElementById("restart")
  sectionRestartGame.style.display = "none"

  //Elementos que se cargan al iniciar el juego
  let buttonWarrior = document.getElementById("button-warrior")
  buttonWarrior.addEventListener("click", selectWarrior)

  let buttonFire = document.getElementById("button-fire")
  buttonFire.addEventListener("click", fireAttack)
  let buttonWater = document.getElementById("button-water")
  buttonWater.addEventListener("click", waterAttack)
  let buttonEarth = document.getElementById("button-earth")
  buttonEarth.addEventListener("click", earthAttack)

  let buttonRestart = document.getElementById("restart-button")
  buttonRestart.addEventListener("click", restartGame)
}

// SELECCIÓN DEL GUERRERO DEL JUGADOR
function selectWarrior() {
  // Elementos HTML que se ocultan o muestran
  let sectionChooseAttack = document.getElementById("choose-attack")
  sectionChooseAttack.style.display = "flex"
  let sectionChooseWarrior = document.getElementById("choose-warrior")
  sectionChooseWarrior.style.display = "none"

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

// SELECCIÓN ALEATORIA GUERRERO DEL PC
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

// SELECCIÓN DE ATAQE DEL JUGADOR
function fireAttack() {
  playerAttack = "Fire"
  randomEnemyAttack()
}
function waterAttack() {
  playerAttack = "Water"
  randomEnemyAttack()
}
function earthAttack() {
  playerAttack = "Earth"
  randomEnemyAttack()
}

// SELECCIÓN ALEATORIA DE ATAQUE DEL PC
function randomEnemyAttack() {
  let randomAttack = aleatorio(1,3)

  if (randomAttack == 1) {
    enemyAttack = "Fire"
  } else if (randomAttack == 2) {
    enemyAttack = "Water"
  } else {
    enemyAttack = "Earth"
  }

  combat()
}

// COMBATE
function combat() {
  let spanPlayerLives = document.getElementById("player-lives")
  let spanEnemyLives = document.getElementById("enemy-lives")

  if(playerAttack == enemyAttack) {
    createMessage("Tie 🧐")
  } else if(playerAttack == "Fire" && enemyAttack == "Earth") {
    createMessage("You win! 🎊")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else if(playerAttack == "Water" && enemyAttack == "Fire") {
    createMessage("You win! 🎊")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else if(playerAttack == "Earth" && enemyAttack == "Water") {
    createMessage("You win! 🎊")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else {
    createMessage("You lose 😔")
    playerLives--
    spanPlayerLives.innerHTML = playerLives
  }

  checkLives()
}

// REVISIÓN DE LAS VIDAS Y MENSAJES
function checkLives() {
  if (enemyLives == 0) {
    createFinalMessage("Congrats, you won! 🎊")
  } else if (playerLives == 0) {
    createFinalMessage("I'm sorry, you lost 😔")
  }
}

function createMessage(resultado) {
  let sectionMessages = document.getElementById("resultado")
  let playerNotif = document.getElementById("playerattack")
  let enemyNotif = document.getElementById("enemyattack")

  let playerNotification = document.createElement("p")
  let enemyNotification = document.createElement("p")

  sectionMessages.innerHTML = resultado
  playerNotif.innerHTML = playerAttack
  enemyNotif.innerHTML = enemyAttack

  playerNotif.appendChild(playerNotification)
  enemyNotif.appendChild(enemyNotification)
}

function createFinalMessage(finalResult) {
  // Elementos HTML que se ocultan o muestran
  let sectionRestartGame = document.getElementById("restart")
  sectionRestartGame.style.display = "block"
  
  let sectionMessages = document.getElementById("resultado")

  sectionMessages.innerHTML = finalResult

  // DESHABILITAR BOTONES
  let buttonFire = document.getElementById("button-fire")
  buttonFire.disabled = true
  let buttonWater = document.getElementById("button-water")
  buttonWater.disabled = true
  let buttonEarth = document.getElementById("button-earth")
  buttonEarth.disabled = true
}

// REINICIAR EL JUEGO
function restartGame() {
  location.reload()
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)