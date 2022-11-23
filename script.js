const array1=["❤","😁","🌹","💖","😜",,"😉"]

const array2=array1.concat(array1)

const $table=document.querySelector("#table");
function shufflingCards(){
    let result= array2.sort(function(){
        return 1 -Math.random();
    });
    return result;
}
const sortedCards=shufflingCards();
$table.innerHTML=""
sortedCards.forEach(element => {
    card=document.createElement("div");
    cardContent=document.createElement("div");
    cardContent.textContent=element;
    card.classList.add("card");
    cardContent.classList.add("card-content");
    cardContent.dataset.content=element
    $table.appendChild(card)
    card.appendChild(cardContent)
});

const $cardContent=document.querySelectorAll(".card");
const $frontwardsCards=document.querySelectorAll(".frontwards")
$cardContent.forEach(el=>{
    el.addEventListener("click",()=>{
        console.log("X");
        el.classList.toggle("frontwards");
        console.log($frontwardsCards)
    });
})
