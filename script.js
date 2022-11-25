class memoryCards{
    constructor(arr,card,result){
        this.card=card;
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
        card.classList.toggle("frontwards")
    }
    comparingCards(){
        if (this.card1.dataset.content===this.card2.dataset.content){
            this.rightPair()
        }else{
            this.wrongGuess()
        }
    }
    rightPair(){
        result.textContent="Nice!";
        return
    }
    wrongGuess(){
        result.textContent="You missed it !";
        return
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
const cardsToCompare=document.querySelectorAll(".frontwards");
const $frontwardsCards=document.querySelectorAll(".frontwards");
const $result=document.querySelector(".result h4");

const newGame=new memoryCards(array2,$result);


const $cards=document.querySelectorAll(".card");
$cards.forEach(el =>{
    el.addEventListener("click",()=>{
        newGame.choosingCards(el)
    })
});


