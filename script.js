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

const card = document.querySelectorAll(".card")

fetch(char_url)
    .then(res => res.json())
    .then(loopThroughChar)

function loopThroughChar(chars) {
    //console.log(chars)
    chars.results.forEach(renderChar)
   
}

function renderChar(char) {
  //console.log(char.image)
  card.forEach(card => card.addEventListener("click", flipCard))
}

function flipCard(){
    console.log("clicked")
}
