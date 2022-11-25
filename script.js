class memoryCards{
    constructor(arr,card1,card2,result){
        this.arr=arr
        this.card1=card1;
        this.card2=card2;
        this.result=result;
    }
    shufflingCards(){
        let result= array2.sort(function(){
            return 0.5 -Math.random();
        });
        return result;
    }
    choosingCards(){
        this.card1.toggle("frontwards");
        this.card2.toggle("frontwards");
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
// function shufflingCards(){
//     let result= array2.sort(function(){
//         return 0.5 -Math.random();
//     });
//     return result;
// }



const $cardContent=document.querySelectorAll(".card");
const $frontwardsCards=document.querySelectorAll(".frontwards");
const cardsToCompare=document.querySelectorAll(".frontwards");
const $result=document.querySelector(".result h4")
// $cardContent.forEach(el=>{
//     el.addEventListener("click",()=>{
//         const $frontwardsCards=document.querySelectorAll(".frontwards");
//         if($frontwardsCards.length>1){
//             return;
//         }
//         el.classList.toggle("frontwards");
//         const cardsToCompare=document.querySelectorAll(".frontwards")
//         if (cardsToCompare.length>1){
//             if (cardsToCompare[0].dataset.content===cardsToCompare[1].dataset.content){
//                 $result.textContent="Nice!"
//             }else{
//                 $result.textContent="You missed it !"
//             }
//         }
//     });
// });


const newGame=new memoryCards(array2,cardsToCompare[0],cardsToCompare[1],$result);

const sortedCards=newGame.shufflingCards();
sortedCards.forEach(element => {
    card=document.createElement("div");
    card.dataset.content=element
    cardContent=document.createElement("div");
    cardContent.textContent=element;
    card.classList.add("card");
    cardContent.classList.add("card-content");
    $table.appendChild(card)
    card.appendChild(cardContent)
});


