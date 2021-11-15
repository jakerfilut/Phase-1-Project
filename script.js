//code
const base_url = "https://rickandmortyapi.com/api"
const char_url = "https://rickandmortyapi.com/api/character"
const rickSanchez = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
const mortySmith = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
const summerSmith = "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
const bethSmith = "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
const jerrySmith = "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
const adjudicatorRick = "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
const birdPerson = "https://rickandmortyapi.com/api/character/avatar/47.jpeg"

const card = document.getElementById("card")
const easyBtn = document.getElementById("easyBtn")
const mediumBtn = document.getElementById("mediumBtn")
const hardBtn = document.getElementById("hardBtn")
const easyContainer = document.getElementById("easyContainer")
const mediumContainer = document.getElementById("mediumContainer")
const hardContainer = document.getElementById("hardContainer")

easyBtn.addEventListener("click", easyGame)
function easyGame(){
    hardContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    easyContainer.innerHTML = ""
    easyContainer.innerHTML = 
    `<div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>`

}

mediumBtn.addEventListener("click", mediumGame)
function mediumGame(){
    hardContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = 
    `<div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>`
}

hardBtn.addEventListener("click", hardGame)
function hardGame(){
    hardContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    easyContainer.innerHTML = ""
    hardContainer.innerHTML = 
    `<div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>
    <div class="card" id="card"></div>`
}


fetch(char_url)
    .then(res => res.json())
    .then(loopThroughChar)

function loopThroughChar(chars) {
    //console.log(chars)
    chars.results.forEach(renderChar)
   
}

function renderChar(char) {
  //console.log(char.image)
  
}
card.addEventListener("click", flipCard)
function flipCard(){
    console.log("clicked")
}
