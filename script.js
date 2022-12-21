const emojiArray=["💖","🌹","😎","🙌"];
const contentToLoad=emojiArray.concat(emojiArray);


class memoryGame{
    constructor(array){
        this.array=array
        this.totalMoves=0;
        this.movesController=document.querySelector(".moves");
        this.minutes=document.querySelector(".minutes");
        this.seconds=document.querySelector(".seconds");
    }
    startGame(){
        this.totalMoves=0;
        this.movesController.innerText=0;
        this.minutes.innerText="00";
        this.seconds.innerText="00";
        this.displayTable();
        // this.startCounting();
    }
    displayTable(){
        const $table=document.querySelector("#table");
        $table.textContent=""
        let newArray=this.shuffleCards(this.array);
        newArray.forEach(element => {
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
    shuffleCards(){
        let result= this.array.sort(function(){
            return Math.random() -0.5;
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
    startCounting(timeSeconds){
        let seconds=10;
        let minutes=0;
        let secondsText;
        let minutesText;
        let chronometer;
        function updateChronometer(){
            seconds--;
            if (seconds < 0){
                seconds=59;
                minutes--;
            }
            if(minutes<0){
                seconds=0;
                minutes=0;
                clearInterval(chronometer)
            }
            secondsText=seconds;
            minutesText=minutes;
            seconds<10? secondsText="0"+seconds:false
            minutes<10? minutesText="0"+minutes:false
            document.querySelector(".seconds").innerText=secondsText
            document.querySelector(".minutes").innerText=minutesText
        }
        chronometer=setInterval(updateChronometer, 1000);
    }
}

function gameReady(){
    const mainSite=document.querySelectorAll(".main-site");
    newGame.startGame();
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
    
}
const newGame=new memoryGame(contentToLoad)
const resetButton=document.querySelectorAll(".button");
resetButton.forEach(button=>{
    button.addEventListener("click",()=>{
        gameReady();
    });
});

if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",gameReady())
}else{
    gameReady();
}










