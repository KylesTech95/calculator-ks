let btns = document.querySelectorAll('.btn'),
display = document.querySelector('.display-actual'),
board = document.querySelector('.board');

//Looping throught the btns array
btns.forEach(btn => {
    //Event listener to click buttons
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        var chr = btn.innerHTML;
            //Regex.test(string) - condition for programming chrs, deleting chrs & All Clear(AC)
        if(/\d|[-+*./]/.test(chr))display.value += chr;
        if(/DELETE/.test(chr))display.value = display.value.slice(0,-1)
        if(/AC/.test(chr)){
            display.value = '';
            board.textContent=''}
        //Equals(Evaluation)
        if(/=/.test(chr)){
            //Helper function to evaluate
            display.value = eval(display.value);
            board.innerHTML = eval(display.value);}
    })
})
//Event listener to detect keys
window.addEventListener('keydown',(e)=>{
    if(/[0-9-+*./]/.test(e.key))display.value += e.key;
    if(e.key=='Enter'|| e.key=='='){
    board.innerHTML= eval(display.value);
    display.value = eval(display.value);
    }
    if(e.key=='c') {
        display.value = '';
        board.innerHTML=''
}
    if(e.key=='Backspace') display.value = display.value.slice(0,-1)
})
