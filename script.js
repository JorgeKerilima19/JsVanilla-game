const emojiArray=["💖","🌹","😎","🙌"];
const contentToLoad=emojiArray.concat(emojiArray);


class memoryGame{
    constructor(array,totalTime){
        this.array=array
        this.totalMoves=0;
        this.movesController=document.querySelector(".moves");
        this.totalTime=totalTime;
        this.totalMinutes=document.querySelector(".minutes");
        this.totalSeconds=document.querySelector(".seconds");
    }
    startGame(){
        this.totalMoves=0;
        this.movesController.innerText=0;
        this.totalMinutes.innerText="00";
        this.totalSeconds.innerText="00";
        this.displayTable();
        this.startCount=this.startCounting()
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
    startCounting(){
        this.totalSeconds=this.totalTime%60;
        this.totalMinutes=Math.floor((this.totalTime/60)%60);
        return setInterval(()=>{
        this.totalSeconds--;
        if (this.totalSeconds<0){
            this.totalSeconds=59;
            this.totalMinutes--;
        }
        if(this.totalMinutes<0){
            this.totalSeconds=0;
            this.totalMinutes=0;
            clearInterval(this.startCount)
        }
        let secondsInText=this.totalSeconds;
        let minutesInText=this.totalMinutes;
        this.totalSeconds<10? secondsInText="0"+this.totalSeconds:false;
        this.totalMinutes<10? minutesInText="0"+this.totalMinutes:false;
        document.querySelector(".seconds").innerText=secondsInText;
        document.querySelector(".minutes").innerText=minutesInText;
        }, 1000);
    }
    updateChronometer(){
        
        // secondsInText=seconds;
        // MinutesInText=minutes;
        // seconds<10? secondsInText="0"+seconds:false;
        // minutes<10? MinutesInText="0"+minutes:false;
        // secondsToDisplay.innerText=secondsInText;
        // minutesToDisplay.innerText=MinutesInText;
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
const newGame=new memoryGame(contentToLoad,5)
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










