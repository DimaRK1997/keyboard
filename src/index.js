import '../src/styles/style.css';

const body=document.querySelector('body');

const keyboardRU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 
'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 
'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
   
const keyboardEN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 
'Ctrl', 'Win', 'Alt', '  ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const idArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
                'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI','KeyO','KeyP','BracketLeft', 'BracketRight', 'Backslash','Delete',
                'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
                'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM','Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
                'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

body.innerHTML='<div class="container"><h2 class="nametitle">RSS Виртуальная клавиатура</h2>'+'<textarea class="textarea" id="textarea"></textarea>'+'<div class="keyboard"><div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div></div></div>';

const row=document.querySelectorAll('.row');
const textarea=document.querySelector('.textarea');

function init(keyboard){
    let out ='';
    for(let i=0; i<14; i++){
        out+='<div class="keys '+idArr[i]+'">'+keyboard[i]+'</div>';  
    }
    row[0].innerHTML=out; 
    out=''; 
    for(let i=14; i<29; i++){
        out+='<div class="keys '+idArr[i]+'">'+keyboard[i]+'</div>';       
    }
    row[1].innerHTML=out;
    out=''; 
    for(let i=29; i<42; i++){
        out+='<div class="keys '+idArr[i]+'">'+keyboard[i]+'</div>'; 
    }
    row[2].innerHTML=out; 
    out='';  
    for(let i=42; i<55; i++){
        out+='<div class="keys '+idArr[i]+'">'+keyboard[i]+'</div>';   
    }
    row[3].innerHTML=out;
    out=''; 
    for(let i=55; i<keyboard.length; i++){
        out+='<div class="keys '+idArr[i]+'">'+keyboard[i]+'</div>'; 
    }
    row[4].innerHTML=out; 
    out='';  
    
}
init(keyboardEN);



// function setLocalStorage() {
//     localStorage.setItem('lang', JSON.stringify(lang));
//   }
//   window.addEventListener('beforeunload', setLocalStorage);
  
//   function getLocalStorage() {
//     if (localStorage.getItem('lang')) {
//       lang = JSON.parse(localStorage.getItem('lang'));
//       switchLangKey(lang);
//     }
//   }
//   window.addEventListener('load', getLocalStorage);



const keys=document.querySelectorAll('.keys');

for(let i=0; i<keys.length; i++){
    keys[i].setAttribute('en', keyboardEN[i]);
    keys[i].setAttribute('encaps', keyboardEN[i].toUpperCase());
    keys[i].setAttribute('ru', keyboardRU[i]);
    keys[i].setAttribute('rucaps', keyboardRU[i].toUpperCase());
}
const keyShiftLeft=document.querySelector('.ShiftLeft');
const keyShiftRight=document.querySelector('.ShiftRight');
const keyAltLeft=document.querySelector('.AltLeft');
// регистр по мышке
const keyCapsLock=document.querySelector('.CapsLock');
keyCapsLock.addEventListener('click', function(e){
    if(keyCapsLock.classList.contains('active')){
        keyCapsLock.classList.remove('active');
        capsLock();
    }else{
        keyCapsLock.classList.add('active');
        capsLock();
    }   
})
// смена языка по мышке
const keyControlLeft=document.querySelector('.ControlLeft');

function swapLang(){
    if(keyControlLeft.classList.contains('swap')&&keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.remove('swap');
        lang('encaps', 'rucaps');
    }else if(keyControlLeft.classList.contains('swap')&&!keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.remove('swap');
        lang('en', 'ru');
    }else if(keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.add('swap');
        lang('encaps', 'rucaps');
    }else if(!keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.add('swap');
        lang('en', 'ru');
    }
}


//регистр по клавиатуре
window.addEventListener('keyup', (e)=>{
    if(e.code=='CapsLock'){
        if(keyCapsLock.classList.contains('active')){
            keyCapsLock.classList.remove('active');
            capsLock();
        }else{
            keyCapsLock.classList.add('active');
            capsLock();
        }   
    }  
})
//функция смены регистра
function capsLock(){
    for(let i=0; i<13; i++){
        if(keyCapsLock.classList.contains('active')){
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }
    }
    for(let i=15; i<28; i++){
        if(keyCapsLock.classList.contains('active')){
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }
    }
    for(let i=30; i<41; i++){
        if(keyCapsLock.classList.contains('active')){
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }
    }
    for(let i=43; i<53; i++){
        if(keyCapsLock.classList.contains('active')){
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }
    }
}

function lang(en, ru){
    for(let i=0; i<13; i++){
        
        if(keyControlLeft.classList.contains('swap')){
            keys[i].innerHTML=keys[i].getAttribute(`${ru}`);
        }else{
            keys[i].innerHTML=keys[i].getAttribute(`${en}`);
        }
    }
    for(let i=15; i<28; i++){
        if(keyControlLeft.classList.contains('swap')){
            keys[i].innerHTML=keys[i].getAttribute(`${ru}`);
        }else{
            keys[i].innerHTML=keys[i].getAttribute(`${en}`);
        }
    }
    for(let i=30; i<41; i++){
        if(keyControlLeft.classList.contains('swap')){
            keys[i].innerHTML=keys[i].getAttribute(`${ru}`);
        }else{
            keys[i].innerHTML=keys[i].getAttribute(`${en}`);
        }
    }
    for(let i=43; i<53; i++){
        if(keyControlLeft.classList.contains('swap')){
            keys[i].innerHTML=keys[i].getAttribute(`${ru}`);
        }else{
            keys[i].innerHTML=keys[i].getAttribute(`${en}`);
        }
    }
    
}

window.addEventListener('keydown', (e)=>{
    for(let i=0; i<keys.length; i++){
        
            if(e.code==idArr[i]){
                keys[i].classList.add('active2');
            }
        
        
        console.log(idArr[1]);
        console.log(e.code);
    }
})

function activeShiftLeft(){
    for(let i=0; i<13; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();    
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=15; i<28; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=30; i<41; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=43; i<53; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }   
}

function activeShiftRigth(){
    for(let i=0; i<13; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();    
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=15; i<28; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=30; i<41; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=43; i<53; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
        if(!keyCapsLock.classList.contains('active')&&!keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }  
}
window.addEventListener('keyup', (e)=>{
    for(let i=0; i<keys.length; i++){
        if(e.code==idArr[i]){
            keys[i].classList.remove('active2');
        } 
        // console.log(idArr[1]);
        // console.log(e.code);
    }
    if(e.code=='ShiftLeft'){
        //keyShiftLeft.classList.add('swap');
        activeShiftLeft();
    }
    if(e.code=='ShiftRight'){
        //keyShiftLeft.classList.add('swap');
        activeShiftRigth();
    }
})

let text=[];
console.log(text)
function inputText(e){
    for(let i =0; i<keys.length; i++){
        if(e.code==idArr[i]){
            //keyCapsLkeys[i].classList.remove('active');
            if(i>=0&&i<13){
                //text=text+keys[i].innerHTML;
                text.push(keys[i].innerHTML);
            }
            if(i>14&&i<28){
                //text=text+keys[i].innerHTML;
                text.push(keys[i].innerHTML);
            }  
            if(i>29&&i<41){
                //text=text+keys[i].innerHTML;
                text.push(keys[i].innerHTML);
            }   
            if(i>42&&i<54){
                //text=text+keys[i].innerHTML;
                text.push(keys[i].innerHTML);
            }
            if(i>59&&i<63){
                //text=text+keys[i].innerHTML;
                text.push(keys[i].innerHTML);
            }
        }        
    }
    if(e.code=='Tab'){
        text.push('   ');
    }
    if(e.code=='Backspace'){
        text.pop();
    }
    if(e.code=='Space'){
        text.push(' ');
    }
    textarea.textContent=text.join('');    
}

window.addEventListener('keydown', function(e){
    inputText(e);
    if(e.code=='ShiftLeft'){
        activeShiftLeftdown(); 
    }
    if(e.code=='ShiftRight'){
        activeShiftRigthdown();
    }
    if (e.ctrlKey&&e.altKey ) {
        swapLang();
      }
    console.log(e)
})
function activeShiftLeftdown(){
    for(let i=0; i<13; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();    
        }
    }
    for(let i=15; i<28; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=30; i<41; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=43; i<53; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftLeft.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }  
}

function activeShiftRigthdown(){
    for(let i=0; i<13; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase();    
        }
    }
    for(let i=15; i<28; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=30; i<41; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }
    for(let i=43; i<53; i++){
        if(keyCapsLock.classList.contains('active')&&keyShiftRight.classList.contains('active2')){
            keys[i].innerHTML=keys[i].innerHTML.toLowerCase();
        }else{
            keys[i].innerHTML=keys[i].innerHTML.toUpperCase(); 
        }
    }  
}
keys.forEach((e,n)=>{
    e.addEventListener('mousedown', (event) => {

    if(n==42){
        //keyShiftLeft.classList.add('swap');
        keys[n].classList.add('active2');
        activeShiftLeftdown();
        }
    if(n==54){
        //keyShiftLeft.classList.add('swap');
        keys[n].classList.add('active2');
        activeShiftRigthdown();
    }
    if(n==55){
        keys[n].classList.add('active2');
    }
    if(n==56){
        keys[n].classList.add('active2');
    }
    if(n==57){
        keys[n].classList.add('active2');
    }
    if(n==59){
        keys[n].classList.add('active2');
    }
    if(n==28){
        keys[n].classList.add('active2');
    }
    if(n==41){
        keys[n].classList.add('active2');
    }
    if(n>=0&&n<13){
        keys[n].classList.add('active2');
        text.push(keys[n].innerHTML);
        //text=text.join(',')
    }
    if(n>14&&n<28){
        keys[n].classList.add('active2');
        //text=text+keys[n].innerHTML;
        text.push(keys[n].innerHTML);
    }  
    if(n>29&&n<41){
        keys[n].classList.add('active2');
       // text=text+keys[n].innerHTML;
       text.push(keys[n].innerHTML);
    }   
    if(n>42&&n<54){
        keys[n].classList.add('active2');
       // text=text+keys[n].innerHTML;
       text.push(keys[n].innerHTML);
    }
    if(n>59&&n<63){
        keys[n].classList.add('active2');
       // text=text+keys[n].innerHTML;
       text.push(keys[n].innerHTML);
    }
    if(n==14){
        keys[n].classList.add('active2');
        text.push('   ');
    }
    if(n==13){
        keys[n].classList.add('active2');
       // text=text.slice(0, -1);
       text.pop();
    }
    if(n==58){
        keys[n].classList.add('active2');
        text.push(' ');
    }
    //keys[n].classList.add('active2');
    //console.log(n)
    //console.log(text.join(''))
    textarea.textContent=text.join('');
    })
})

keys.forEach((e,n)=>{
    e.addEventListener('mouseup', (event) => {
        keys[n].classList.remove('active2');  
        if(n==42){
            //keyShiftLeft.classList.add('swap');
            activeShiftLeft();
        }
        if(n==54){
            //keyShiftLeft.classList.add('swap');
            activeShiftRigth();
        }
    })
})