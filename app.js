// let count = 1
// let interval ;
// function timer (){
//     console.log(count);
//     count++;
//     }

// interval=setInterval(timer,1000)

// function stopSetInterval(){
//     clearInterval(interval)
// }
// setTimeout(stopSetInterval,5000)

// function timeOut(){
   
// }

// setTimeout(timeOut,4000)\


// let count = 1;

// timer = () =>{
  
//     console.log(count)
//     count++
// }
// clock=setInterval(timer,1000)


// function stopTime(){
//     clearInterval(clock)
// }

// setTimeout(stopTime,10000)


let object_min = document.getElementById('min')
let object_sec =document.getElementById('sec')
let object_msec = document.getElementById('msec')

min=object_min.innerHTML  
min=Number(min)                        // converting into interger
                                
sec=object_sec.innerHTML
sec=Number(sec)                         // converting into interger
  
msec=object_msec.innerHTML              // converting into interger
msec=Number(msec)                  

let interval;


function timer (){
    document.getElementById('start').disabled = true
    object_msec.innerHTML=++msec
    if(msec >=100){
        object_sec.innerHTML=++sec
        msec=0;
    }
    else if(sec >59){
        object_min.innerHTML=++min
        sec=0
        object_sec.innerHTML=sec
       
    }
}


function start(){
   interval =  setInterval(timer,10)
   document.getElementById('start').innerHTML='Start'
}
function stpp(){
    document.getElementById('start').disabled = false
    clearInterval(interval)
    if(msec>0){
    document.getElementById('start').innerHTML='Resume'
    }
}

function reset(){
    document.getElementById('start').disabled = false
    msec=0
    sec=0
    min=0
    object_msec.innerHTML=msec
    object_sec.innerHTML=sec
    object_min.innerHTML =min
    clearInterval(interval)
    document.getElementById('start').innerHTML='Start'
}