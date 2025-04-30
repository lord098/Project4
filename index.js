let num1=document.getElementById("1");
let num2=document.getElementById("2");
let btn1=document.getElementById("add");
let btn2=document.getElementById("sub");
let btn3=document.getElementById("multi");
let btn4=document.getElementById("divi");
let h2=document.getElementById("ans");
let clearbtn=document.getElementById("clear")
btn1.addEventListener("click",()=>{
    let result=parseInt(num1.value) + parseInt(num2.value);
    h2.innerText=result;
})
btn2.addEventListener("click",()=>{
    let result=parseInt(num1.value) - parseInt(num2.value);
    h2.innerText=result;
})
btn3.addEventListener("click",()=>{
    let result=parseInt(num1.value) * parseInt(num2.value);
    h2.innerText=result;
})
btn4.addEventListener("click",()=>{
    let result=parseInt(num1.value) / parseInt(num2.value);
    h2.innerText=result;
})
clearbtn.addEventListener("click",()=>{
    console.log((num1.value=null));
    console.log((num2.value=null));
    h2.innerText=null
})



