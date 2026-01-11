let display=document.getElementById('calDisplay');
window.onload=()=>{
    display.focus();
}
function appendValue(value){
    if(display.value === "0"){
        display.value=value;
    } else{
    display.value=display.value+value;
    }
}
function clearDisplay(){
    display.value='0';
}
function backspace(){
    if(display.value.length === 1){
        display.value="0";
    } else{
    display.value=display.value.slice(0,-1)
    }
}
function calculater(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value='error';
    }
}