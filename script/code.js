let output =document.querySelector('#output');
let action = "";
let num1=0;
let num2=0;
let isClicked=false;
let dot = document.querySelector('#dot')

function display(x){
    output.value+=x
}

dot.addEventListener('click', ()=>{
    if (!isClicked) {
        isButtonClicked(dot,true)
    }
})
function isButtonClicked(btn,ft) {
    isClicked=ft;
    btn.disabled=ft;
}

// numbers
// document.querySelector('#numbers').addEventListener('click',()=>{
    
// })

// Clear

function clear() {
    output.value = " ";
}
document.querySelector('#clear').addEventListener('click',()=> {
    clear();
})
// Backspace
document.querySelector('#backspace').addEventListener('click', ()=>{
   output.value = output.value.slice(0,-1);
   isButtonClicked(dot,false);
})

// Addition
document.querySelector('#plus').addEventListener('click', ()=>{
    
    num1 = output.value;
    action= "+";
    output.value+=action;
    isButtonClicked(dot,false);
 })
// Minus
document.querySelector('#minus').addEventListener('click', ()=>{
    num1 = output.value;
    action= "-";
    output.value+=action;
    isButtonClicked(dot,false);
 })
// Division
document.querySelector('#divide').addEventListener('click', ()=>{
    num1 = output.value;
    action= "/";
    output.value+=action;
    isButtonClicked(dot,false);
 })
// Multiplication
document.querySelector('#times').addEventListener('click', ()=>{
    num1 = output.value;
    action= "*";
    output.value+=action;
    isButtonClicked(dot,false);
 })
// Equal
document.querySelector('#equal').addEventListener('click',()=>{
    for (let index = 0; index < output.value.length; index++) {
        if (output.value[index] == "/" || output.value[index] == "+" || output.value[index] == "-" || output.value[index] == "*"  ) {
             num2= output.value.slice(index+1,output.value.length);
             console.log(num2 );
        }
         
     }
    output.value = eval(num1 + action + num2);
})

