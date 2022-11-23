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
$cardContent.forEach(el=>{
    el.addEventListener("click",()=>{
        const $frontwardsCards=document.querySelectorAll(".frontwards");
        if($frontwardsCards.length>1){
            return;
        }
        // let fc=document.querySelectorAll(".frontwards");
        // if (fc.length<2){
        //     return
        // }
        el.classList.toggle("frontwards");
        const cardx=document.querySelector(".frontwards")
        if (cardx.length>1){
            console.log(cardx)
        }
    });
});
