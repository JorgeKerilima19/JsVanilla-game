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
        if(card1===card2){
            console.log(card1)
            console.log(card2)
            this.rightPair()
        }else{
            console.log(card1)
            console.log(card2)
            this.wrongGuess()
        }
    }
    rightPair(){
        this.result.textContent="Nice!";

    }
    wrongGuess(){
        this.result.textContent="You missed it !";

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

const $cards=document.querySelectorAll(".card");
$cards.forEach(el =>{
    el.addEventListener("click",()=>{
        const $frontwardsCards=document.querySelectorAll(".frontwards");
        if($frontwardsCards.length>1){
            return
        }
        newGame.choosingCards(el)
        const $cardsToCompare=document.querySelectorAll(".card.frontwards");
        newGame.comparingCards($cardsToCompare[0].dataset.content,$cardsToCompare[1].dataset.content)
    })
});
