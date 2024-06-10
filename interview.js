var x = 5;
console.log(x, y);
var y = 6;

function hosting(){
    console.log(x);
    var x = 10;
}

hosting();

// reverse string:
let str = "Cooper"
let element = ""
for (let i = str.length - 1; i >= 0 ; i--) {
    element += str[i];    
}

console.log(element);

let arry = ["C","o","o","p","e","r"]
let ele = ""
for (let i = 0; i < arry.length; i++) {
    ele += arry[i];   
}
console.log(ele);

console.log(str.split("").reverse().join());


let nums = [1, 2, 3, 4];

let newnums = nums.map((num, i) => {
  return num + num + i
})

console.log(newnums);

// reverse array in for loop
let number = [1,2,3,4,5]
let eles = []
for (let i = number.length - 1; i >= 0 ; i--) {
    eles.push(number[i]);    
}
console.log(eles);

// reverse array in map


let reversearry = []
number.map((value) => {
     reversearry.unshift(value)
})
console.log(reversearry);

// reverse array in map2
let reversearry2 = number.map((value, i) => {
   return number[number.length-i-1]
})
console.log(reversearry2);

console.log(number.slice(0,number.length).reverse());

// remove duplicate array:

let fruits = ["mango", "apple", "pineapple", "mango", "kiwi", "stawberry", "apple"]
console.log(fruits);

function removeduplindex(){
    let removedduplicates = []
    fruits.map((element,index) => {
    if(fruits.indexOf(element) == index){
        removedduplicates.push(element)
    }
})
    console.log(removedduplicates);
}
removeduplindex()

function removeduplincludes(){
    let removedduplicates = []
    fruits.map((element,index) => {
    if(!removedduplicates.includes(element)){
        removedduplicates.push(element)
        
    }
    console.log(removedduplicates);
})
    
}

removeduplincludes()


let display = function sum(sum){
    return sum + sum
}

