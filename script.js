const array1=["❤","😁","🌹","💖","😜","😃","😉"]
const array2=array1.concat(array1)

const $table=document.querySelector("#table");
$table.innerHTML=""
function shufflingCards(){
    let result= array2.sort(function(){
        return 0.5 -Math.random();
    });
    return result;
}
const sortedCards=shufflingCards();
sortedCards.forEach(element => {
    card=document.createElement("div");
    cardContent=document.createElement("div");
    cardContent.textContent=element;
    card.classList.add("card");
    card.dataset.content=element
    cardContent.classList.add("card-content");
    $table.appendChild(card)
    card.appendChild(cardContent)
});

class newGame{
    constructor(time, cards){
        this.time=time;
        this.cards=cards;
        this.minutesController=document.querySelector(".minutes");
        this.secondsController=document.querySelector(".seconds");
        this.movesController=document.querySelector(".moves");
    }
    startGame(){
        this.cardToCheck=null;
        this.minutesController=0;
        this.secondsController=0;
        this.movesController=0;
        this.cardsToCompare=[];
        this.busy=true;
    }
    // startCounting(){
    //     let seconds=10;
    //     let minutes=0;
    //     let secondsText;
    //     let minutesText;
    //     let chronometer;
    //     function updateChronometer(){
    //         seconds--;
    //         if (seconds < 0){
    //             seconds=59;
    //             minutes--;
    //         }
    //         if(minutes<0){
    //             seconds=0;
    //             minutes=0;
    //             clearInterval(chronometer)
    //         }
    //         secondsText=seconds;
    //         minutesText=minutes;
    //         seconds<10? secondsText="0"+seconds:false
    //         minutes<10? minutesText="0"+minutes:false
    //         document.querySelector(".seconds").innerText=secondsText
    //         document.querySelector(".minutes").innerText=minutesText
    //     }
    //     chronometer=setInterval(updateChronometer, 1000);
    // }
    // movesUpdate(){
    //     this.moves++;
    //     let textMoves;
    //     textMoves=this.moves 
    //     this.moves<10? textMoves="0"+this.moves:false;
    //     document.querySelector(".moves").innerText=textMoves;
    // }

}



