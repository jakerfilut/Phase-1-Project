const base_url = "https://rickandmortyapi.com/api"
const char_url_page = "https://rickandmortyapi.com/api/character?page="

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
const newComment = document.createElement("ul")
let difficulty;
let turnsTaken = 0;
let finalArray = [];

easyBtn.addEventListener("click", easyGame)
function easyGame() {
    difficulty = 8;
    reset()
    fetchData()
}

mediumBtn.addEventListener("click", mediumGame)
function mediumGame() {
    difficulty = 12
    reset()
    fetchData()
}
hardBtn.addEventListener("click", hardGame)
function hardGame() {
    difficulty = 15
    reset()
    fetchData()
}

function reset() {
    easyContainer.innerHTML = ""
    mediumContainer.innerHTML = ""
    hardContainer.innerHTML = ""
    turnsTaken = 0;
    turns.innerText = "Turns Taken " + `${turnsTaken}`
    finalArray = [];
}

function fetchData(){
    let page = Math.floor(Math.random() * 42) + 0;
    fetch(char_url_page + `${page}`)
        .then(res => res.json())
        .then(loopThroughChar)

    function loopThroughChar(chars) {
        for (let i = 0; i < difficulty; i++) {
            newImage = (chars.results[i].image)
            newName = (chars.results[i].id)
            let newImgObj = { imgSrc: newImage, name: newName };
            newImage2 = (chars.results[i].image)
            newName2 = (chars.results[i].id)
            let newImgObj2 = { imgSrc: newImage2, name: newName2 };
            finalArray.push(newImgObj, newImgObj2)
        }
        console.log(finalArray)
        randomizer()
    }
}

function randomizer() {
    finalArray.sort(() => Math.random() - 0.5);
    finalArray.forEach(renderCards)
    function renderCards(cards) {
        const card = document.createElement("div")
        card.className = "card"
        const face = document.createElement("img")
        face.className = "face"
        face.src = cards.imgSrc
        const back = document.createElement("div")
        back.className = "back"
        back.id = cards.name
        if (finalArray.length === 16) {
            easyContainer.append(card)
            card.append(face, back)
        } if (finalArray.length === 24) {
            mediumContainer.append(card)
            card.append(face, back)
        } if (finalArray.length === 30) {
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
                setTimeout(() => cards.parentNode.classList.remove("flipCard"), 500);
            }
            turnsTaken++
            turns.innerText = "Turns Taken " + `${turnsTaken}`
        }
    }
    if (flippedCard.length === finalArray.length) {
        document.querySelector(".bg-modal").style.display = "flex";
        winner.innerText = "Congratulations, Your score was " + `${turnsTaken}`
        form.addEventListener('submit', highscore)
        function highscore(e) {
            e.preventDefault()
            console.log({ e })
            // let newComment = document.createElement("ul")
            // let nameInput = e.target.comment.value
            // newComment.innerText = `Name: ${nameInput} Score:  ${turnsTaken}`
            console.log(newComment)
            commentList.appendChild(newComment)
            form.reset()
        }
        document.querySelector('.close').addEventListener('click', closeScores)
        function closeScores() {
            console.log("closed")
            document.querySelector(".bg-modal").style.display = "none";
            reset()
        }
    }
}
