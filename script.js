class memoryCards{
    constructor(arr,result){
        this.arr=arr;
        this.result=result;
        this.moves=0;
    }
    startGame(){
        const $cards=document.querySelectorAll(".card");
        $cards.forEach(el =>{
            el.addEventListener("click",()=>{
                const $frontwardsCards=document.querySelectorAll(".frontwards:not(.right-pair)");
                if($frontwardsCards.length>1){
                    return
                }
                this.choosingCards(el)
                const $cardsToCompare=document.querySelectorAll(".card.frontwards:not(.right-pair)");
                this.comparingCards($cardsToCompare[0],$cardsToCompare[1]);
                this.movesUpdate();
            })
        });
    }
    shufflingCards(){
        let result= array2.sort(function(){
            return 0.5 -Math.random();
        });
        return result;
    }
    choosingCards(card){
        card.classList.add("frontwards");
    }
    comparingCards(card1,card2){
        if(card1.dataset.content===card2.dataset.content){
            this.rightPair(card1,card2)
        }else{
            this.wrongGuess(card1,card2)
        }
    }
    rightPair(card1,card2){
        card1.classList.add("right-pair");
        card2.classList.add("right-pair");
        this.result.textContent="Nice!";

    }
    wrongGuess(card1,card2){
        let Arr=[card1,card2]
        Arr.forEach(el=>{
            el.classList.add("error");
        })
        this.result.textContent="You missed it !";
        setTimeout(() => {
            Arr.forEach(el=>{
                el.classList.remove("error");
                el.classList.remove("frontwards");
            })
            this.result.textContent="Try again";
        }, 1000);
    }
    startCounting(){
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
    movesUpdate(){
        this.moves++;
        let textMoves;
        textMoves=this.moves 
        this.moves<10? textMoves="0"+this.moves:false;
        document.querySelector(".moves").innerText=textMoves;
    }
}
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
const $result=document.querySelector(".result h4");
const newGame=new memoryCards(array2,$result);
newGame.startCounting()

newGame.startGame()
const resetButton=document.querySelector(".button");
resetButton.addEventListener("click",()=>{
    newGame.startGame()
})