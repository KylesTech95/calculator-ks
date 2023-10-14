let btns = document.querySelectorAll('.btn'),
    display = document.querySelector('.display-actual'),
    board = document.querySelector('.board');

//Looping throught the btns array
btns.forEach(btn => {
    //Event listener to click buttons
    btn.addEventListener('click',(e)=>{
        if(display.value=='0')display.value=''
        var chr = e.target.innerHTML;
        if(/\./.test(chr)){
            display.value += chr;
        }
        //Regex.test(string) - condition for programming chrs, deleting chrs & All Clear(AC)
        if(/\d|[0-9-+*/]/.test(chr)){
            display.value += chr;
        }
        if(/(\+|\-|\/|\*)(\+|\-|\/|\*)/g.test(display.value)){
            display.value = display.value.replace(/(\+|\-|\/|\*)/,'')
        }
        if(/DELETE/.test(chr))display.value = display.value.slice(0,-1);

        if(/AC/.test(chr)){
            display.value = '0';
            board.textContent='0'}
            
        //Equals(Evaluation)
        if(/=/.test(chr)){
            //Helper function to evaluate
            display.value = eval(display.value);
            board.innerHTML = eval(display.value);
            
        }
        //regex to ensure possible decimals are limited to no more than 1.
        display.value = display.value.replace(/\.{2,}/g,'.')
        display.value = display.value.replace(/\.(\d+)\./g,'$1')//start here
    })
})
//Event listener to detect keys
window.addEventListener('keydown',(e)=>{
    if(display.value=='0')display.value=''
if(/\./.test(e.key)){
    display.value += e.key;
}
    if(/[0-9-+*/]/.test(e.key)){
        display.value += e.key;
    }
    if(/(\+|\-|\/|\*)(\+|\-|\/|\*)/g.test(display.value)){
        display.value = display.value.replace(/(\+|\-|\/|\*)/,'')
    }
    if(e.key=='Enter'|| e.key=='='){
    board.innerHTML= eval(display.value);
    display.value = eval(display.value);
    }
    if(e.key=='c') {
        display.value = '0';
        board.innerHTML='0'
}
    if(e.key=='Backspace') display.value = display.value.slice(0,-1)
    
//regex to ensure possible decimals are limited to no more than 1.
display.value = display.value.replace(/\.{2,}/g,'.')
display.value = display.value.replace(/\.(\d+)\./g,'$1')


})

