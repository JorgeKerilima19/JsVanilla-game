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

