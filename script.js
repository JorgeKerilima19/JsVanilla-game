const emojiArray=["💖","🌹","😎","🙌"];
const contentToLoad=emojiArray.concat(emojiArray);


class memoryGame{
    constructor(array){
        this.array=array
        this.totalMoves=0;
        this.movesController=document.querySelector(".moves");
    }
    startGame(){
        const $table=document.querySelector("#table");
        this.totalMoves=0;
        this.array=this.shuffleCards(this.array);
        this.array.forEach(element => {
            let card=document.createElement("div");
            let cardContent=document.createElement("div");
            cardContent.textContent=element;
            card.classList.add("card");
            card.dataset.content=element
            cardContent.classList.add("card-content");
            $table.appendChild(card);
            card.appendChild(cardContent);
        });
    }
    shuffleCards(array){
        let result= array.sort(function(){
            return 0.5 -Math.random();
        });
        return result;
    }
    flipCards(card){
        const pairOfCards=document.querySelectorAll(".frontwards");
        if(pairOfCards.length>1){
            return
        }
        card.classList.toggle("frontwards")
        this.totalMoves++;
        this.movesController.innerText=this.totalMoves;
    }
}

function gameReady(){
    const newGame =new memoryGame(contentToLoad);
    const mainSite=document.querySelectorAll(".main-site");
    newGame.startGame(contentToLoad);
    mainSite.forEach(el=>{
        el.addEventListener("click",()=>{
            el.classList.add("visible");
        });
    });
    const cards=document.querySelectorAll(".card");
    cards.forEach(card=>{
        card.addEventListener("click",()=>{
            newGame.flipCards(card);
        });
    });
    //const resetButton=document.querySelectorAll(".button")
    // resetButton.forEach(button=>{
    //     button.addEventListener("click",()=>{
    //         newGame.startGame(contentToLoad);
    //         console.log(cards)
    //     });
    // }); //pending to solve
}

if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",gameReady())
}else{
    gameReady();
}










