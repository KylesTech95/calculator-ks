let btns = document.querySelectorAll('.btn'),
    display = document.querySelector('.display-actual'),
    board = document.querySelector('.board');

//Looping throught the btns array to use the "click" event listener
btns.forEach(btn => {
    //Event listener to click buttons
    btn.addEventListener('click',(e)=>{
        if(display.value=='0')display.value=''
        var chr = e.target.innerHTML; 
        //Regex.test(string) - condition for programming chrs, deleting chrs & All Clear(AC)
        if(/\d|[0-9-+*./]/.test(chr)){
            display.value += chr;
            if(/(\+|\-|\/|\*)(\-)(\+|\-|\/|\*)/g.test(display.value)){
                display.value=display.value.replace('-','')
                }
        }
        if(/(\+|\/|\*)(\+|\/|\*)/g.test(display.value)){
            display.value = display.value.replace(/(\+|\/|\*)/,'')
        }
        if(/(\+|\-|\/|\*)?(\-)(\+|\-|\/|\*)/g.test(display.value)){
            display.value = display.value.replace('-','')
            }
        if(/DELETE/.test(chr))display.value = display.value.slice(0,-1);

        if(/AC/.test(chr)){
            display.value = '0';
            board.textContent='0'}
        if(/NEG/.test(chr)){
            display.value = display.value.replace(/\d+$/,n=>(+n*-1).toString())
        }
        if(/=/.test(chr)){
            //Helper function to evaluate
            display.value = eval(display.value);
            board.innerHTML = eval(display.value); 
        }
        if(/\./g.test(chr)){
    // display.value = '.....22+45+56..3/77-4.............3'
    //regex to ensure possible decimals are limited to no more than 1.
    display.value = display.value.replace(/([(0-9)*|\.{1}])(\+|\-|\/|\*)(\+|\-|\/|\*)([(0-9)*|\.{1}])/g,'$1\s$2\s$3')
    .replace(/([0-9]*)(\+|\-|\/|\*)([0-9]*)/g,'$1 $2 $3')                
         .split(" ")
         .map(num=>{
             if(/\d+/g.test(num)){
                 num = num.replace(/(\d+)(\.{1})(\d+)(\.{1})/g,'$1$2$3')
                 .replace(/(\.{1})(\d+)(\.{1})/g,'$1$2')
                 .replace(/(\d+)(\.{1})(\.*)/g,'$1$2')
             }
             else{
                 num
             }
             return num
         })
         .join('')
        }
        //regex to ensure possible decimals are limited to no more than 1.
        display.value = display.value.replace(/\.{2,}/g,'.')
        display.value = display.value.replace(/\.(\d+)\./g,'$1')
    })
    
})

//Event listener to detect keydown event listener
window.addEventListener('keydown',(e)=>{
    if(display.value=='0')display.value=''

    if(/[0-9-+*./]/.test(e.key)){
        display.value += e.key;
    }
    if(/(\+|\/|\*)(\+|\/|\*)/g.test(display.value)){
        display.value = display.value.replace(/(\+|\/|\*)/,'')
    }
    if(/(\+|\-|\/|\*)?(\-)(\+|\-|\/|\*)/g.test(display.value)){
        display.value = display.value.replace('-','')
        }
    if(e.key=='Enter'|| e.key=='='){
    board.innerHTML= eval(display.value);
    display.value = eval(display.value);
    }
    if(e.key=='c') {
        display.value = '0';
        board.innerHTML='0'
    }
    if(e.key=='Backspace') {display.value = display.value.slice(0,-1)}
    if(e.key=='n'){
        display.value = display.value.replace(/\d+$/,n=>(+n*-1).toString())
    }
    if(e.key=='.'){
        display.value = display.value.replace(/([(0-9)*|\.{1}])(\+|\-|\/|\*)(\+|\-|\/|\*)([(0-9)*|\.{1}])/g,'$1\s$2\s$3')
                                     .replace(/([0-9]*)(\+|\-|\/|\*)([0-9]*)/g,'$1 $2 $3')                
                                    .split(" ")
                                    .map(num=>{
                                        if(/\d+/g.test(num)){
                                            num = num.replace(/(\d+)(\.{1})(\d+)(\.{1})/g,'$1$2$3')
                                                        .replace(/(\.{1})(\d+)(\.{1})/g,'$1$2')
                                                        .replace(/(\d+)(\.{1})(\.*)/g,'$1$2')
                                                        .replace(/(\d+)(\.{1})(\.*)/g,'$1$2')
                                        }
                                        else{
                                            num
                                        }
                                        return num
                                    })
                                    .join('')
            }
})