const array1=["❤","😁","🌹","💖","😜","❤","😉","💖"]



const $table=document.querySelector("#table");
$table.innerHTML=""
console.log($table);
array1.forEach(element => {
    card=document.createElement("div");
    card.textContent=element
    card.classList.add("card")
    $table.appendChild(card)
});