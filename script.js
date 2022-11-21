const array=["❤","😁","🌹","💖","😜","❤","😉","💖"]
console.log(array)
copiesArray=[];
let newArray=array.slice()
for (let i=0;i<array.length;i++){
    if(newArray.includes(array[i],1)){
        console.log(array[i])
    }
    else{
        console.log("Not here")
    }
    newArray.shift()
}

array.forEach(el => {
    if(array.includes(el,0)){
        console.log(el,".")
    }else{
        console.log("111")
    }
    array.shift()
});