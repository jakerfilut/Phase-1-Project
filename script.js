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


let turnsTaken = 0;

//Maybe create an array of all the images. Then do a for each to populate the cards.

const easy16 = [
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
    { imgSrc: mrPoopy, name: "mr-poopy" }
]

const medium25 = [
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
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" },
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" }
]
const hard36 = [
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
    { imgSrc: bethSmith, name: "beth-smith" },
    { imgSrc: jerrySmith, name: "jerry-smith" },
    { imgSrc: adjudicatorRick, name: "adjucicator-rick" },
    { imgSrc: birdPerson, name: "bird-preson" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: mrPoopy, name: "mr-poopy" },
    { imgSrc: rickSanchez, name: "rick-sanchez" },
    { imgSrc: mortySmith, name: "morty-smith" },
    { imgSrc: summerSmith, name: "summer-smith" }
]

easyBtn.addEventListener("click", easyGame)
function easyGame() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    randomizerEasy()
}

mediumBtn.addEventListener("click", mediumGame)
function mediumGame() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    randomizerMedium()
}
hardBtn.addEventListener("click", hardGame)
function hardGame() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    randomizerHard()

}


function randomizerEasy() {
    let cardData = easy16
    cardData.sort(() => Math.random() - 0.5);
    //console.log(cardData)
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

        easyContainer.append(card)
        card.append(face, back)

        card.addEventListener('click', flipCard)
        function flipCard(e) {
            //console.log("Clicked")
            card.classList.toggle('flipCard')
            // console.log(e.target)
            checkFlippedCards(e);
        }
    }
}

function randomizerMedium() {
    let cardData = medium25
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData)
    cardData.forEach(renderCards)
    function renderCards(cards) {
        const card = document.createElement("div")
        card.className = "card"
        const face = document.createElement("img")
        face.className = "face"
        face.src = cards.imgSrc
        const back = document.createElement("div")
        back.className = "back"

        mediumContainer.append(card)
        card.append(face, back)

        card.addEventListener('click', flipCard)
        function flipCard() {
            console.log("Clicked")
            card.classList.toggle('flipCard')
        }
    }
}

function randomizerHard() {
    let cardData = hard36
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData)
    cardData.forEach(renderCards)
    function renderCards(cards) {
        const card = document.createElement("div")
        card.className = "card"
        const face = document.createElement("img")
        face.className = "face"
        face.src = cards.imgSrc
        const back = document.createElement("div")
        back.className = "back"

        hardContainer.append(card)
        card.append(face, back)

        card.addEventListener('click', flipCard)
        function flipCard() {
            //console.log("Clicked")
            card.classList.toggle('flipCard')
        }
    }
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

// const checkFlippedCards = (e) => {
//     console.log(e)
//     const clickedCard = e.target
// }

function checkFlippedCards(e) {
    const clickedCard = e.target
    clickedCard.parentNode.classList.add("disabled")

    clickedCard.classList.add("turnedOver")
    const flippedCardsCheck = document.querySelectorAll(".turnedOver")
    //console.log(clickedCard.parentNode)
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
    if (flippedCard.length === easy16.length) {
        console.log("You Win")
    }
}




    // clickedCard.classList.add('flipped')
