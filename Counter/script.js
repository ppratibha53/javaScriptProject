let CounterDisplayElm = document.querySelector('.counter-display');
let CounterMinusElem = document.querySelector('.counter-minus');
let CounterPlusElem = document.querySelector('.counter-plus');
let CounterColor = document.querySelector('.container');
let Counterreset  = document.querySelector('.counter-reset');


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

Counterreset.addEventListener('click',()=>{
    CounterDisplayElm.innerHTML = 0;
});


function changeBackgroundColor() {
    if (CounterDisplayElm.innerHTML === 0) {
        CounterColor.style.backgroundColor = "black";
    } else if (CounterDisplayElm.innerHTML > 0) {
        // Increasing and positive
        CounterColor.style.backgroundColor = "green";
    } else if (CounterDisplayElm.innerHTML< 0 ) {
        // Decreasing and negative
        CounterColor.style.backgroundColor = "red";
    } 
}


