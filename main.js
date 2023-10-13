let btns = document.querySelectorAll('.btn'),
display = document.querySelector('.display-actual'),
board = document.querySelector('.board');

//helper function to determine if there is a decimal in the current
const oneDecimal = (str) =>{
    let hasOne = (/\.{1}/).test(str)
    return !hasOne
}

//Looping throught the btns array
btns.forEach(btn => {
    //Event listener to click buttons
    btn.addEventListener('click',(e)=>{
        if(display.value=='0')display.value=''
        e.preventDefault();
        var chr = e.target.innerHTML;
        if(/\./.test(chr) && oneDecimal(display.value)){
            display.value += chr;
        }
            //Regex.test(string) - condition for programming chrs, deleting chrs & All Clear(AC)
        if(/\d|[0-9-+*/]/.test(chr)){
            display.value += chr;
        }
        if(/DELETE/.test(chr))display.value = display.value.slice(0,-1)
        if(/AC/.test(chr)){
            display.value = '0';
            board.textContent='0'}
        //Equals(Evaluation)
        if(/=/.test(chr)){
            //Helper function to evaluate
            display.value = eval(display.value);
            board.innerHTML = eval(display.value);}
    })
})

//Event listener to detect keys
window.addEventListener('keydown',(e)=>{
    if(display.value=='0')display.value=''
if(/\./.test(e.key) && oneDecimal(display.value)){
    display.value += e.key;
}
    if(/[0-9-+*/]/.test(e.key)){
        display.value += e.key;
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
})
