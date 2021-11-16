const base_url = "https://rickandmortyapi.com/api"
const char_url = "https://rickandmortyapi.com/api/character"
const rickSanchez = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
const mortySmith = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
const summerSmith = "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
const bethSmith = "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
const jerrySmith = "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
const adjudicatorRick = "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
const birdPerson = "https://rickandmortyapi.com/api/character/avatar/47.jpeg"
const mrPoopy = "https://rickandmortyapi.com/api/character/avatar/244.jpeg"

const card = document.querySelectorAll(".card")
const easyBtn = document.getElementById("easyBtn")
const mediumBtn = document.getElementById("mediumBtn")
const hardBtn = document.getElementById("hardBtn")
const easyContainer = document.getElementById("easyContainer")
const mediumContainer = document.getElementById("mediumContainer")
const hardContainer = document.getElementById("hardContainer")
const turns = document.getElementById("turns")
const flippedCard = document.getElementsByClassName("card flipCard disabled")
const modal = document.getElementById("modal")
const winner = document.getElementById("winner")
const form = document.getElementById("form")
const commentList = document.getElementById("commentList")
let difficulty;

let turnsTaken = 0;

fetch(char_url)
    .then(res => res.json())
    .then(loopThroughChar)

function loopThroughChar(chars) {

    chars.results.forEach(renderChar)
}

function renderChar(char) {
}

// const easy16 = [
//     { imgSrc: rickSanchez, name: "rick-sanchez" },
//     { imgSrc: mortySmith, name: "morty-smith" },
//     { imgSrc: summerSmith, name: "summer-smith" },
//     { imgSrc: bethSmith, name: "beth-smith" },
//     { imgSrc: jerrySmith, name: "jerry-smith" },
//     { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
//     { imgSrc: birdPerson, name: "bird-preson" },
//     { imgSrc: mrPoopy, name: "mr-poopy" },
//     { imgSrc: rickSanchez, name: "rick-sanchez" },
//     { imgSrc: mortySmith, name: "morty-smith" },
//     { imgSrc: summerSmith, name: "summer-smith" },
//     { imgSrc: bethSmith, name: "beth-smith" },
//     { imgSrc: jerrySmith, name: "jerry-smith" },
//     { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
//     { imgSrc: birdPerson, name: "bird-preson" },
//     { imgSrc: mrPoopy, name: "mr-poopy" }
// ]

const easy16 = [
    { imgSrc: rickSanchez, name: "rick-sanchez" },

    { imgSrc: rickSanchez, name: "rick-sanchez" },

]

const medium30 = [
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" }
]
const hard42 = [
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" }
]

easyBtn.addEventListener("click", easyGame)
function easyGame() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    difficulty = easy16;
    randomizer()
}

mediumBtn.addEventListener("click", mediumGame)
function mediumGame() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    difficulty = medium30;
    randomizer()
}
hardBtn.addEventListener("click", hardGame)
function hardGame() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    difficulty = hard42;
    randomizer()

}

function randomizer() {
    let cardData = difficulty
    cardData.sort(() => Math.random() - 0.5);
    cardData.forEach(renderCards)
    function renderCards(cards) {
        const card = document.createElement("div")
        card.className = "card"
        const face = document.createElement("img")
        face.className = "face"
        face.src = cards.imgSrc
        const back = document.createElement("div")
        back.className = "back"
        back.id = cards.name
        if (difficulty.length === 2) {
            //change back to 16 after testing
            easyContainer.append(card)
            card.append(face, back)
        } if (difficulty.length === 30) {
            mediumContainer.append(card)
            card.append(face, back)
        } if (difficulty.length === 42) {
            hardContainer.append(card)
            card.append(face, back)
        }
        card.addEventListener('click', flipCard)
        function flipCard(e) {
            card.classList.toggle('flipCard')
            checkFlippedCards(e);
        }
    }
}

function checkFlippedCards(e) {
    const clickedCard = e.target
    clickedCard.parentNode.classList.add("disabled")

    clickedCard.classList.add("turnedOver")
    const flippedCardsCheck = document.querySelectorAll(".turnedOver")
    if (flippedCardsCheck.length === 2) {
        if (flippedCardsCheck[0].getAttribute("id") === flippedCardsCheck[1].getAttribute("id")) {
            flippedCardsCheck.forEach(removeTurnOver)
            function removeTurnOver(cards) {
                cards.classList.remove("turnedOver")
                cards.parentNode.classList.add("disabled")
                console.log(flippedCard.length)
            }
            turnsTaken++
            turns.innerText = "Turns Taken " + `${turnsTaken}`
        } else {
            flippedCardsCheck.forEach(flipBackCards)
            function flipBackCards(cards) {

                cards.classList.remove("turnedOver")
                cards.parentNode.classList.remove("disabled")
                setTimeout(() => cards.parentNode.classList.remove("flipCard"), 750);
            }
            turnsTaken++
            turns.innerText = "Turns Taken " + `${turnsTaken}`
        }
    }
    if (flippedCard.length === difficulty.length) {
        document.querySelector(".bg-modal").style.display = "flex";
        winner.innerText = "Congratulations, Your score was " + `${turnsTaken}`
        form.addEventListener("submit", highscore)
        function highscore(e) {
            e.preventDefault()
            let newComment = document.createElement("ul")
            let nameInput = e.target.comment.value
            newComment.textContent = `Name: ${nameInput}Score:  ${turnsTaken}`
            commentList.append(newComment)
            form.reset()
        }
        document.querySelector('.close').addEventListener('click', closeScores)
        function closeScores(){
            console.log("closed")
            document.querySelector(".bg-modal").style.display = "none";
        }

    }
}
