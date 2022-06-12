const gridDisplay = document.getElementById("grid")
const resultDisplay = document.getElementById("result")
let chosenCards = []
let chosenCardsId = []
let wonCards = []
const comment = document.getElementById("comment")

let memoryArray = [
    {
        name: "red",
        color: "red"
    },
    {
        name: "blue",
        color: "blue"
    },
    {
        name: "yellow",
        color: "yellow"
    },
    {
        name: "green",
        color: "green"
    },
    {
        name: "orange",
        color: "orange"
    },
    {
        name: "purple",
        color: "purple"
    },
    {
        name: "red",
        color: "red"
    },
    {
        name: "blue",
        color: "blue"
    },
    {
        name: "yellow",
        color: "yellow"
    },
    {
        name: "green",
        color: "green"
    },
    {
        name: "orange",
        color: "orange"
    },
    {
        name: "purple",
        color: "purple"
    }
    
]



memoryArray.sort(()=> 0.5 - Math.random())//This shuffles the colors in the array every time the location is reloaded

createMemoryBoard()

//This creates the board dynamically  
function createMemoryBoard(){
    for (let i = 0; i < memoryArray.length; i++) {
        let card = document.createElement("div")
        card.setAttribute("data-id", i)
        card.style.backgroundColor = "white"
        gridDisplay.appendChild(card)
        card.addEventListener("click", flipCard)
    }
}

//This function reveals the color of the card every time it is clicked
function flipCard(){
    comment.innerHTML = ""
    let cardName = this.getAttribute("data-id")
    chosenCards.push(memoryArray[cardName].name)
    chosenCardsId.push(cardName)
    this.style.backgroundColor = memoryArray[cardName].color
    if(chosenCards.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

//This function cross checks the cards for a match
function checkForMatch(){
    const cards = document.querySelectorAll("div")
    const firstCard = chosenCardsId[0]
    const secondCard = chosenCardsId[1]
    comment.style.color = "red"

    if (firstCard == secondCard) {//this checks for when the same card is clicked twice
        cards[firstCard].style.backgroundColor = "white"
        cards[secondCard].style.backgroundColor = "white"
        comment.innerHTML = "Same Card Clicked!!!"
    } else if (chosenCards[0] === chosenCards[1]) {//This checks for when two cards has the same color
        comment.innerHTML = "You Have A Match!!!"
        cards[firstCard].style.backgroundColor = "black"
        cards[secondCard].style.backgroundColor = "black"
        cards[firstCard].removeEventListener("click", flipCard)
        cards[secondCard].removeEventListener("click", flipCard)
        wonCards.push(chosenCards)
    }
    else{//this for when there is no match
        cards[firstCard].style.backgroundColor = "white"
        cards[secondCard].style.backgroundColor = "white"
        comment.innerHTML = "Sorry No Matches Found!!!"
    }
    chosenCards = []
    chosenCardsId = []
    resultDisplay.innerHTML = wonCards.length

    if (wonCards.length === memoryArray.length/2){//This display a message for when all cards are matched 
        resultDisplay.innerHTML = ("Congrats You Have Won!!!")
        resultDisplay.style.color = "red"
    }
}


