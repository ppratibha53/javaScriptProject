let CounterDisplayElm = document.querySelector('.counter-display');
let CounterMinusElem = document.querySelector('.counter-minus');
let CounterPlusElem = document.querySelector('.counter-plus');


let count = 0;

updateDisplay();

CounterPlusElem.addEventListener('click',()=>{
 count ++;
 updateDisplay();
 changeBackgroundColor()
});

CounterMinusElem.addEventListener('click',()=>{
    count --;
    updateDisplay();
    changeBackgroundColor()
});
function updateDisplay(){
    CounterDisplayElm.innerHTML = count;
};


