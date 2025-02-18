let CounterDisplayElm = document.querySelector('.counter-display');
let CounterMinusElem = document.querySelector('.counter-minus');
let CounterPlusElem = document.querySelector('.counter-plus');
let Counterreset = document.querySelector('.counter-reset');


let count = 0;

updateDisplay();

CounterPlusElem.addEventListener('click',()=>{
 count ++;
 updateDisplay();
 changeBackgroundColor();
});

CounterMinusElem.addEventListener('click',()=>{
    count --;
    updateDisplay();
    changeBackgroundColor();
});
Counterreset.addEventListener('click', ()=>{
    CounterDisplayElm.innerHTML  = 0
})
function updateDisplay(){
    CounterDisplayElm.innerHTML = count;
};



function changeBackgroundColor(){
    if (CounterDisplayElm.innerHTML>0){
        CounterDisplayElm.style.color = "green";

    } else if(CounterDisplayElm.innerHTML<0){
        CounterDisplayElm.style.color = " red";
    } 
  
}


