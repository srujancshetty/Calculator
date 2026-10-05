const display = document.getElementById('display');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const divide = document.getElementById('divide');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const multiply = document.getElementById('multiply');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const subtract = document.getElementById('subtract');
const btn0 = document.getElementById('btn0');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

btn0.addEventListener('click', () =>{
    display.value += '0';
});
btn1.addEventListener('click', () =>{
    display.value += '1';
});
btn2.addEventListener('click', () =>{
    display.value += '2';
});
btn3.addEventListener('click', () =>{
    display.value += '3';
});
btn4.addEventListener('click', () =>{
    display.value += '4';
});
btn5.addEventListener('click', () =>{
    display.value += '5';
});
btn6.addEventListener('click', () =>{
    display.value += '6';
});
btn7.addEventListener('click', () =>{
    display.value += '7';
});
btn8.addEventListener('click', () =>{
    display.value += '8';
});
btn9.addEventListener('click', () =>{
    display.value += '9';
});
divide.addEventListener('click', () =>{
    display.value += '/';
});
multiply.addEventListener('click', () =>{
    display.value += '*';
});
subtract.addEventListener('click', () =>{
    display.value += '-';
});
add.addEventListener('click', () =>{
    display.value += '+';
});
clear.addEventListener('click', () =>{
    display.value = '';
});
equal.addEventListener('click', () =>{
    display.value = eval(display.value);
});



