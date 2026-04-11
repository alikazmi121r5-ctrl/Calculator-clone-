let screens=document.querySelector("#screen-body");
let clear=document.querySelector("#clear");
let modulus=document.querySelector("#modulus");
let divide=document.querySelector("#divide");
let power=document.querySelector("#power");
let multiply=document.querySelector("#multiply");
let subtract=document.querySelector("#subtract");
let addition=document.querySelector("#addition");
let dot=document.querySelector("#dot");
let equal=document.querySelector("#equal");
let num_buttons=document.querySelectorAll(".num-but");


num_buttons.forEach((but)=> {
    but.addEventListener("click",()=>{
        console.log(but.textContent);
        screens.textContent+=but.textContent;
       
    });
});

clear.addEventListener("click",()=>{
    screens.textContent="";
});

modulus.addEventListener("click",()=>{
    screens.textContent+=modulus.textContent;
});

divide.addEventListener("click",()=>{
    screens.textContent+=divide.textContent;
});

multiply.addEventListener("click",()=>{
    screens.textContent+=multiply.textContent;
});

addition.addEventListener("click",()=>{
    screens.textContent+=addition.textContent;
});

subtract.addEventListener("click",()=>{
    screens.textContent+=subtract.textContent;
});

dot.addEventListener("click",()=>{
    screens.textContent+=dot.textContent;
});




equal.addEventListener("click",()=>{
   try{ let result=eval(screens.textContent);
    screens.textContent=result;}
    catch{
        screens.textContent="error";
    }
});

power.addEventListener("click",()=>{

    screens.textContent=screens.textContent.slice(0,-1);
});