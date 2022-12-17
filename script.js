const emojiArray=["💖","🌹","😎"];
const contentToLoad=emojiArray.concat(emojiArray);

const $table=document.querySelector("#table");
$table.innerHTML=""

function displayTable(){
    contentToLoad.forEach(element => {
        card=document.createElement("div");
        cardContent=document.createElement("div");
        cardContent.textContent=element;
        card.classList.add("card");
        card.dataset.content=element
        cardContent.classList.add("card-content");
        $table.appendChild(card)
        card.appendChild(cardContent)
    })
}

class memoryGame{
    constructor(array){
        this.array=array
        this.totalMoves=0;
        this.movesController=document.querySelector(".moves");
    }
    startGame(){
        this.totalMoves=0;
    }
    flipCards(card){
        const pairOfCards=document.querySelectorAll(".frontwards");
        if(pairOfCards.length>1){
            return
        }
        card.classList.add("frontwards")
        this.totalMoves++;
        this.movesController.innerText=this.totalMoves;
    }
    ableToFlip(){
    }
}

function gameReady(){
    const cards=document.querySelectorAll(".card");
    const newGame =new memoryGame(contentToLoad);
    cards.forEach(card=>{
        card.addEventListener("click",()=>{
            newGame.flipCards(card)
        });
    });
}


if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",displayTable())
}else{
    displayTable();
    gameReady();
}










