
let num1=document.querySelector("#num1")
let num2=document.querySelector("#num2")
let add=document.querySelector("#add")
let subtract=document.querySelector("#subtract")
let multiply=document.querySelector("#multiply")
let divide=document.querySelector("#divide")
let displayResult=document.querySelector("#displayResult")

add.addEventListener("click", function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayResult.innerHTML=addTwoNumbers(num_1, num_2);
})


subtract.addEventListener("click", function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayResult.innerHTML=subtractTwoNumbers(num_1, num_2);
})

multiply.addEventListener("click", function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayResult.innerHTML=multiplyTwoNumbers(num_1, num_2);
})

divide.addEventListener("click", function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayResult.innerHTML=divideTwoNumbers(num_1, num_2);
})

function addTwoNumbers(a,b) {
 let sum=a+b;
 return sum;
}

function subtractTwoNumbers(a,b){
    let subtract=a-b;
    return subtract;
}

function multiplyTwoNumbers(a,b){
    let product=a*b;
    return product;
}

function divideTwoNumbers(a,b){
    let qoutient=a/b;
    return qoutient ;
}