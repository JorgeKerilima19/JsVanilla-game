class memoryCards{
    constructor(arr,result){
        this.arr=arr;
        this.result=result;
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
        let seconds=0;
        let minutes=0;
        function updateChronometer(){
            seconds=seconds+1;
            console.log(seconds)
            console.log(minutes)
            if (seconds > 59){
                seconds=0;
                minutes=minutes+1;
            }
            document.querySelector(".seconds").innerText=seconds
            document.querySelector(".minutes").innerText=minutes
        }
        setInterval(updateChronometer, 1000);
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

const resetButton=document.querySelector(".button");
resetButton.addEventListener("click",()=>{
    newGame.shufflingCards()
})
const $cards=document.querySelectorAll(".card");
$cards.forEach(el =>{
    el.addEventListener("click",()=>{
        const $frontwardsCards=document.querySelectorAll(".frontwards:not(.right-pair)");
        if($frontwardsCards.length>1){
            return
        }
        newGame.choosingCards(el)
        const $cardsToCompare=document.querySelectorAll(".card.frontwards:not(.right-pair)");
        newGame.comparingCards($cardsToCompare[0],$cardsToCompare[1])
    })
});
