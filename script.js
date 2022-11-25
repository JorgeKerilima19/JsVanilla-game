const array1=["❤","😁","🌹","💖","😜","😃","😉"]

const array2=array1.concat(array1)

const $table=document.querySelector("#table");
function shufflingCards(){
    let result= array2.sort(function(){
        return 0.5 -Math.random();
    });
    return result;
}
const sortedCards=shufflingCards();
$table.innerHTML=""
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

const $cardContent=document.querySelectorAll(".card");
$cardContent.forEach(el=>{
    el.addEventListener("click",()=>{
        const $frontwardsCards=document.querySelectorAll(".frontwards");
        if($frontwardsCards.length>1){
            return;
        }
        el.classList.toggle("frontwards");
        const cardsToCompare=document.querySelectorAll(".frontwards")
        if (cardsToCompare.length>1){
            if (cardsToCompare[0].dataset.content===cardsToCompare[1].dataset.content){
                console.log("NICE")
            }else{
                console.log("ERROR")
            }
        }
    });
});

results=document.createElement("fragment")

document.body.appendChild(results)