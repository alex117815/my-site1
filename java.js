var num1;
var num2;
var result = document.getElementById("result");
function press(sign){
    result.innerHTML = result.innerHTML + sign;
}
function cl(){
    result.innerHTML = "";
}
function Calc(){
    result.innerHTML = eval(result.innerHTML );
}
// function summ(){
//     num1 = document.getElementById("num1");
//     num2 = document.getElementById("num2");
//     result = document.getElementById("result");
//     result.innerHTML = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
// }
_
window.addEventListener('keydown', (event)=>{
    //alert(event.keyCode);
    switch(event.keyCode){
        case 49: press('1'); break;
        case 50: press('2'); break;
        case 51: press('3'); break;
        case 52: press('4'); break;
        case 53: press('5'); break;
        case 54: press('6'); break;
        case 55: press('7'); break;
        case 56: press('8'); break;
        case 57: press('9'); break;
        case 107: press('+'); break;
        case 109: press('-'); break;
        case 106: press('*'); break;
        case 111: press('/'); break;
        case 96: press('0'); break;
        case 8: cl1(); break;
    }
})
function cl1(){
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
}
