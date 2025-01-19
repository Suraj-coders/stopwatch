let seconds = 00;
let milisec = 00;
let mins = 00;
let getseconds=document.querySelector(".seconds");
let getmillisec=document.querySelector(".tens");
let getmins=document.querySelector(".mins");
let btnStart= document.querySelector(".btn-start");
let btnStop=document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;
btnStart.addEventListener('click',() =>{
    clearInterval(interval)
   inverval= setInterval(startTimer,10)
    
})
btnStop.addEventListener('click',()=>{
    clearInterval(inverval)
})
btnReset.addEventListener('click',()=>{
    clearInterval(inverval)
    milisec='00';
    seconds='00';
    mins='00';
    getmillisec.innerHTML=milisec;
    getseconds.innerHTML=seconds;
    getmins.innerHTML=mins;
})

function startTimer(){ 
    milisec++;
    if(milisec<=9){
        getmillisec.innerHTML='0'+milisec;
    }
    if(milisec > 9){
    getmillisec.innerHTML= milisec;
}
if(milisec> 99){
    seconds++;
    getseconds.innerHTML='0'+seconds;
    milisec=0;
    getmillisec.innerHTML='0'+0;

}
if(seconds >9){
    getseconds.innerHTML=seconds;
}
if(seconds > 59){
    mins++
    getmins.innerHTML='0'+mins;
    seconds=0;
    getseconds.innerHTML='0'+0;

}
if(mins > 9){
    getmins.innerHTML=mins;
}
}
