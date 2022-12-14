const sectionChooseAttack = document.getElementById("choose-attack")
const sectionRestartGame = document.getElementById("restart")
const buttonWarrior = document.getElementById("button-warrior")
const buttonRestart = document.getElementById("restart-button")

const sectionChooseWarrior = document.getElementById("choose-warrior")

const spanWarriorPlayer = document.getElementById("warrior-player")
const spanWarriorEnemy = document.getElementById("warrior-enemy")
const spanPlayerLives = document.getElementById("player-lives")
const spanEnemyLives = document.getElementById("enemy-lives")

const sectionMessages = document.getElementById("resultado")
const playerNotif = document.getElementById("playerattack")
const enemyNotif = document.getElementById("enemyattack")
const cardsContainer = document.getElementById("cardsContainer")
const attackContainer = document.getElementById("attackContainer")

let mokepokes = []
let playerAttack
let enemyAttack
let mokepokeOption
let inputCadom
let inputGentor
let inputHaggis
let warriorPlayer
let mokepokeAttacks
let buttonFire
let buttonWater
let buttonEarth
let playerLives = 3
let enemyLives = 3

// Clases para crear objetos
class Mokepoke {
  constructor(name, picture, life) {
    this.name = name
    this.picture = picture
    this.life = life
    this.attacks = []
  }
}

let cadom = new Mokepoke("Cadom", "./img/warrior1.png", 5)
let gentor = new Mokepoke("Gentor", "./img/Warrior2.png", 5)
let haggis = new Mokepoke("Haggis", "./img/warrior.png", 5)

cadom.attacks.push(
  {nombre: "💧", id: "water"},
  {nombre: "💧", id: "water"},
  {nombre: "💧", id: "water"},
  {nombre: "🔥", id: "fire"},
  {nombre: "⛰️", id: "earth"},
)

gentor.attacks.push(
  {nombre: "⛰️", id: "earth"},
  {nombre: "⛰️", id: "earth"},
  {nombre: "⛰️", id: "earth"},
  {nombre: "🔥", id: "fire"},
  {nombre: "💧", id: "water"},
)

haggis.attacks.push(
  {nombre: "🔥", id: "fire"},
  {nombre: "🔥", id: "fire"},
  {nombre: "🔥", id: "fire"},
  {nombre: "💧", id: "water"},
  {nombre: "⛰️", id: "earth"},
)

mokepokes.push(cadom,gentor,haggis)


function startGame() {
  //Elementos de HTML ocultos al inicio del juego
  
  sectionChooseAttack.style.display = "none"
  sectionRestartGame.style.display = "none"

  mokepokes.forEach((Mokepoke) => {
    mokepokeOption = `
    <input type="radio" name="warriors" id=${Mokepoke.name} />
          <label for=${Mokepoke.name} class="mokepoke-card">
            <p>${Mokepoke.name}</p>
            <img src=${Mokepoke.picture} alt=${Mokepoke.name}>
          </label>
    `
    cardsContainer.innerHTML += mokepokeOption

    inputCadom = document.getElementById("Cadom")
    inputGentor = document.getElementById("Gentor")
    inputHaggis = document.getElementById("Haggis")
  })

  //Elementos que se cargan al iniciar el juego
  buttonWarrior.addEventListener("click", selectWarrior)
  
  buttonRestart.addEventListener("click", restartGame)
}

// SELECCIÓN DEL GUERRERO DEL JUGADOR
function selectWarrior() {
  // Elementos HTML que se ocultan o muestran
  sectionChooseWarrior.style.display = "none"
  sectionChooseAttack.style.display = "flex"

  if (inputCadom.checked) {
    spanWarriorPlayer.innerHTML = inputCadom.id
    warriorPlayer = inputCadom.id
  } else if (inputGentor.checked) {
    spanWarriorPlayer.innerHTML = inputGentor.id
    warriorPlayer = inputGentor.id
  } else if (inputHaggis.checked) {
    spanWarriorPlayer.innerHTML = inputHaggis.id
    warriorPlayer = inputHaggis.id
  } else {
    alert("You need to choose a warrior")
    location.reload()
  }

  extractAttacks(warriorPlayer)
  randomEnemyWarrior()
}

function extractAttacks(warriorPlayer) {
  let attacks
  for (let i = 0; i < mokepokes.length; i++) {
    if (warriorPlayer === mokepokes[i].name) {
      attacks = mokepokes[i].attacks
    }
  }
  showAttacks(attacks)
}

function showAttacks(attacks) {
  attacks.forEach((attack) => {
    mokepokeAttacks = `
    <button id=${attack.nombre} class="attack-buttons">${attack.nombre}</button>
    `
    attackContainer.innerHTML += mokepokeAttacks
  })

  buttonFire = document.getElementById("🔥")
  buttonWater = document.getElementById("💧")
  buttonEarth = document.getElementById("⛰️")

  buttonFire.addEventListener("click", fireAttack)
  buttonWater.addEventListener("click", waterAttack)
  buttonEarth.addEventListener("click", earthAttack)
}


// SELECCIÓN ALEATORIA GUERRERO DEL PC
function randomEnemyWarrior() {
  let randomEnemy = aleatorio(0, mokepokes.length -1)

  spanWarriorEnemy.innerHTML = mokepokes[randomEnemy].name
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
  let playerNotification = document.createElement("p")
  let enemyNotification = document.createElement("p")

  sectionMessages.innerHTML = resultado
  playerNotification.innerHTML = playerAttack
  enemyNotification.innerHTML = enemyAttack

  playerNotif.appendChild(playerNotification)
  enemyNotif.appendChild(enemyNotification)
}

function createFinalMessage(finalResult) {
  // Elementos HTML que se ocultan o muestran
  sectionMessages.innerHTML = finalResult

  // DESHABILITAR BOTONES
  buttonFire.disabled = true
  buttonWater.disabled = true
  buttonEarth.disabled = true
  
  sectionRestartGame.style.display = "block"
}

// REINICIAR EL JUEGO
function restartGame() {
  location.reload()
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)