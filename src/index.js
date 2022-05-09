//import './styles/style.css';



const body=document.querySelector('body');
//body.classList.add('en');
// //let keyboard=[];
// let keyboard=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
// 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 
// 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 
// 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 
// 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
// // document.onkeydown= function (e){
// //     keyboard.push(e.key);
// //     console.log(keyboard);
// // }


const keyboardRU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 
'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 
'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

    
const keyboardEN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];


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
const keys=document.querySelectorAll('.keys');
// for(let i=0; i<keys.length; i++){
//     keys[i].setAttribute('keyname', keys[i].innerText)
//     keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase())
// }
for(let i=0; i<keys.length; i++){
    keys[i].setAttribute('en', keyboardEN[i]);
    keys[i].setAttribute('encaps', keyboardEN[i].toUpperCase());
    keys[i].setAttribute('ru', keyboardRU[i]);
    keys[i].setAttribute('rucaps', keyboardRU[i].toUpperCase());
}
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
keyControlLeft.addEventListener('click', function(e){
    if(keyControlLeft.classList.contains('swap')&&keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.remove('swap');
        lang('encaps', 'rucaps');
    }else if(keyControlLeft.classList.contains('swap')&&!keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.remove('swap');
        lang('en', 'ru');
    }else if(keyCapsLock.classList.contains('active')){
        keyControlLeft.classList.add('swap');
        lang('encaps', 'rucaps');
    }else{
        keyControlLeft.classList.add('swap');
        lang('en', 'ru');
    }
})
// keyCapsLock.addEventListener('keyup', function(e){
//     if(!e.target.classList.contains('hidden')&&e.target.classList.contains('CapsLock')){
//         keyCapsLock.classList.toggle('hidden');
//         for(let i=0; i<keys.length; i++){
//             keys[i].innerHTML=keys[i].getAttribute('encaps');
//         }
//     }else{
//         keyCapsLock.classList.toggle('hidden');
//         for(let i=0; i<keys.length; i++){
//             keys[i].innerHTML=keys[i].getAttribute('en');
//         }
//     } 
// })

//console.log(idArr[54]);
// document.onkeydown=function(e){

//     for(let i=0; i<keys.length; i++){
//         if(e.code=='ShiftLeft'){
//             flag=true;
//             keys[i].innerHTML=keys[i].getAttribute('en');
//         }
//         if(e.code=='AltLeft'&&flag){
//             keys[i].innerHTML=keys[i].getAttribute('ru');
//         }else{
            
//         }
        
//     }
// сМЕНА ЯЗЫКА ПО КЛАВИАТУРЕ
window.addEventListener('keyup', (e)=>{
    if(e.code=='ControlLeft'){
        if(keyControlLeft.classList.contains('swap')){
            keyControlLeft.classList.remove('swap');
            lang('en', 'ru');
        }else{
            keyControlLeft.classList.add('swap');
            lang('en', 'ru');
        }   
    }
})

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
    }else{

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

alert("Проверьте работу, пожалуста, попозже(не успеваю доделать), а лучше напишите мне в дискорд 1DiMaS1K#5002. Спасибо");












let text='';

// window.addEventListener('keyup', function(e){
//     for(let i =0; i<keys.length; i++){
//         if(e.code=='CapsLock'&&e.target.classList.contains('active')){
//             //keyCapsLock.classList.remove('active');
//         }else{
//             keys[i].classList.remove('active');
//             if(i>=0&&i<13){
//                 textarea.textContent=textarea.textContent+keyboardEN[i];
//             }
//             if(i>15&&i<28){
//                 textarea.textContent=textarea.textContent+keyboardEN[i];
//             }  
//             if(i>29&&i<41){
//                 textarea.textContent=textarea.textContent+keyboardEN[i];
//             }   
//             if(i>42&&i<53){
//                 textarea.textContent=textarea.textContent+keyboardEN[i];
            
//             }
//         }
        
//     }     
    
    
// })

// const span=document.querySelectorAll('span');
// const keyCapsLock=document.querySelector('.CapsLock');
// let ret=[];
// keyCapsLock.addEventListener('click', upperCase)

// function upperCase(e){
//     keyCapsLock.classList.toggle('hidden');
//     for(let i=0; i<13; i++){
//         if(!e.target.classList.contains('hidden') &&e.target.classList.contains('CapsLock')){
//             keys[i].innerHTML=keys[i].getAttribute('upperCase'); 
//         }else{
//             keys[i].innerHTML=keyboardEN[i];
//             console.log(keyboardEN[i])
//         }  
//     }
//     for(let i=15; i<28; i++){
//         if(!e.target.classList.contains('hidden') &&e.target.classList.contains('CapsLock')){
//             keys[i].innerHTML=keys[i].getAttribute('upperCase'); 
//         }else{
//             keys[i].innerHTML=keyboardEN[i];
//             console.log(keyboardEN[i])
//         }
//     }
//     for(let i=30; i<41; i++){
//         if(!e.target.classList.contains('hidden') &&e.target.classList.contains('CapsLock')){
//             keys[i].innerHTML=keys[i].getAttribute('upperCase'); 
//         }else{
//             keys[i].innerHTML=keyboardEN[i];
//             console.log(keyboardEN[i])
//         } 
//     }
//     for(let i=43; i<53; i++){
//         if(!e.target.classList.contains('hidden') &&e.target.classList.contains('CapsLock')){
//             keys[i].innerHTML=keys[i].getAttribute('upperCase'); 
//         }else{
//             keys[i].innerHTML=keyboardEN[i];
//             console.log(keyboardEN[i])
//         }
        
//     }
// }

