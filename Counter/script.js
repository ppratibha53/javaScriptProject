let CounterDisplayElm = document.querySelector('.counter-display');
let CounterMinusElem = document.querySelector('.counter-minus');
let CounterPlusElem = document.querySelector('.counter-plus');


let count = 0;

updateDisplay();

CounterPlusElem.addEventListener('click',()=>{
 count ++;
 updateDisplay();
});

CounterMinusElem.addEventListener('click',()=>{
    count --;
    updateDisplay();
});
function updateDisplay(){
    CounterDisplayElm.innerHTML = count;
};


