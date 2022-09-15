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

// SELECCIÓN ALEATORIA DE ATAQUE DEL PC
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

// COMBATE
function combat() {
  let spanPlayerLives = document.getElementById("player-lives")
  let spanEnemyLives = document.getElementById("enemy-lives")

  if(playerAttack == enemyAttack) {
    createMessage("TIE")
  } else if(playerAttack == "FIRE" && enemyAttack == "EARTH") {
    createMessage("YOU WON")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else if(playerAttack == "WATER" && enemyAttack == "FIRE") {
    createMessage("YOU WON")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else if(playerAttack == "EARTH" && enemyAttack == "WATER") {
    createMessage("YOU WON")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else {
    createMessage("YOU LOSE")
    playerLives--
    spanPlayerLives.innerHTML = playerLives
  }

  checkLives()
}

// REVISIÓN DE LAS VIDAS Y MENSAJES
function checkLives() {
  if (enemyLives == 0) {
    createFinalMessage("CONGRATS, YOU WON! 🎊")
  } else if (playerLives == 0) {
    createFinalMessage("I'M SORRY, YOU LOSE 😔")
  }
}

function createMessage(result) {
  let sectionMessages = document.getElementById("messages")

  let paragraph = document.createElement("p")
  paragraph.innerHTML = "Your warrior attacked with " + playerAttack + ". Your enemy's warrior attacked with " + enemyAttack + " - " + result

  sectionMessages.appendChild(paragraph)
}

function createFinalMessage(finalResult) {
  // Elementos HTML que se ocultan o muestran
  let sectionRestartGame = document.getElementById("restart")
  sectionRestartGame.style.display = "block"
  
  let sectionMessages = document.getElementById("messages")

  let paragraph = document.createElement("p")
  paragraph.innerHTML = finalResult

  sectionMessages.appendChild(paragraph)

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