const array1=["❤","😁","🌹","💖","😜",,"😉"]

const array2=array1.concat(array1)

const $table=document.querySelector("#table");
$table.innerHTML=""
array2.forEach(element => {
    card=document.createElement("div");
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
        console.log("X");
        el.classList.toggle("frontwards");
    });
})

function shufflingCards(){
    let result= Math.floor(Math.random()*10) + 1;
}