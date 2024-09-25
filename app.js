let userseq=[];
let gameseq=[];

let btnr=['red','green','yellow','blue'];

let level=0;
let start=true;

let buttons=document.querySelectorAll('.btn')
let h2=document.querySelector('h2')

document.addEventListener('keypress',function(){
    if(start==true){
        randomBlink();
        start=false;
    }
});
userclick();
function randomBlink(){
    userseq=[];
    level++;

    h2.innerHTML=`<b>Level:${level}</b>`;
    let btn=Math.floor(Math.random()*4);
    gameseq.push(btnr[btn]);
    console.log('game:',gameseq);
    blinkBtn(btnr[btn]);
}
function blinkBtn(button){
    // let btncolor= document.querySelectorAll('.btn');
    // console.log(btncolor);
    for(btn of buttons){
        if(btn.classList[1]==button){
            blink(btn);
        }
    }
}
function blink(bt){
    bt.classList.add('blink');
 setTimeout(() => {
    bt.classList.remove('blink');
 }, 350);
}

function blinkuser(bt){
    bt.classList.add('blinkuser');
 setTimeout(() => {
    bt.classList.remove('blinkuser');
 }, 350);
}

function userclick(){
    for(btn of buttons){
        btn.addEventListener('click',function(e){
            let userBtn=e.target;
            console.log("YOU CLICKED",userBtn);
            blinkuser(userBtn);
            userseq.push(userBtn.classList[1]);
            console.log('user:',userseq);
            checkstatus();
        });
    }
}

function checkstatus(){

    let idx=userseq.length-1;
    console.log('user seq:',userseq[idx]);
    console.log('game seq:',gameseq[idx]);

    if(userseq[idx]==gameseq[idx]){

        if(userseq.length==gameseq.length){
            userseq=[];
            setTimeout(()=>{
                randomBlink();
            },500)
        }
    }
    else{
        if(level!=0){
            h2.innerHTML=`You click the wrong button Your score is:<b>${level-1}</b>`;
            reset();
        }
    }
}

function reset(){
    userseq=[];
    gameseq=[];
    start=true;
    level=0;
}