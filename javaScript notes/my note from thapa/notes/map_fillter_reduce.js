

//Differnce bettween map and filter
var finum = [5,36,48,51,74,26,8,6]

let arryo = finum.map((item,index,arrey) => {
        return item > 5
});


let arry = finum.filter((item,index,arrey) => {
        return item > 5
});

// thia console log will show the resultz
console.log(arryo);
console.log(arry);



// this chainng method of map,fillter,reduce,
let arr = [2,3,4,6,8];

let mularr = arr.map((item)=>{
    return item*2;
}).filter((item,index,ar)=>{
    return item > 10;
}).reduce((avg,item)=>{
    return (avg *= item)/2;
});