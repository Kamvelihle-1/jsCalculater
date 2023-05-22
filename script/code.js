let output =document.querySelector('#output');
let action = "";
let num1=0;
let num2=0;
let isClicked=false;
let dot = document.querySelector('#dot')
let op="";
let cl=false;

function display(x){
   
    if (cl) {
        clear();
        cl=false;
    }else{
        output.value+=x;
        isButtonClicked(op,false);
    }

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


// Clear

function clear() {
    output.value = " ";
    isButtonClicked(dot,false);
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
    op = document.querySelector('#plus');
    num1 = output.value;
    action= "+";
    output.value+=action;
    isButtonClicked(dot,false);
    if (!isClicked) {
        isButtonClicked(op,true)
    }
 })
// Minus
document.querySelector('#minus').addEventListener('click', ()=>{
    op=document.querySelector('#minus');
    num1 = output.value;
    action= "-";
    output.value+=action;
    isButtonClicked(dot,false);
    if (!isClicked) {
        isButtonClicked(op,true)
    }
 })
// Division
document.querySelector('#divide').addEventListener('click', ()=>{
    op=document.querySelector('#divide')
    num1 = output.value;
    action= "/";
    output.value+=action;
    isButtonClicked(dot,false);
    if (!isClicked) {
        isButtonClicked(op,true)
    }
 })
// Multiplication
document.querySelector('#times').addEventListener('click', ()=>{
    op=document.querySelector('#times')
    num1 = output.value;
    action= "*";
    output.value+=action;
    isButtonClicked(dot,false);
   
    if (!isClicked) {
        isButtonClicked(op,true)
    }
 })
// Equal
document.querySelector('#equal').addEventListener('click',()=>{
    cl=true;
    for (let index = 0; index < output.value.length; index++) {
        if (output.value[index] == "/" || output.value[index] == "+" || output.value[index] == "-" || output.value[index] == "*"  ) {
             num2= output.value.slice(index+1,output.value.length);
             console.log(num2 );
        }
         
     }
    output.value = eval(num1 + action + num2).toFixed(2);
})

