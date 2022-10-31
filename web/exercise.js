const fruits = ["Banana", "Orange", "Apple", "Mango"];
const meats = ["Mutton", "Chicken", "Pork", "Beef"]
// document.getElementById("demo").innerHTML = fruits.toString();
meats.splice(4, 0, "Goose");
fruits.unshift("Lemon");
fruits.sort();
document.getElementById("demo").innerHTML = fruits.concat(meats);

const nArray = [1,10,200,25,0,76];
document.querySelector("#demo2").innerHTML+= nArray;

document.querySelector("#numericSort").addEventListener("click", ()=> {
    document.querySelector("#demo2").innerHTML = nArray.sort();
})

document.querySelector("#alphabetSort").addEventListener("click", ()=> {
    document.querySelector("#demo2").innerHTML = 
    nArray.sort(function(a,b){return a - b});
})

let txt = '';
const arrayIteration = ((value, index, array) => {
    txt += value + "<br>"
})
fruits.forEach(arrayIteration);
document.querySelector("#aIteration").innerHTML = txt;

