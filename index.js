//code
const base_url = "https://rickandmortyapi.com/api"
const char_url = "https://rickandmortyapi.com/api/character"

fetch(char_url)
    .then(res => res.json())
    .then(loopThroughChar)

function loopThroughChar(chars) {
    console.log(chars)
    chars.results.forEach(renderChar)
}

function renderChar(char) {
   console.log(char.image)

}