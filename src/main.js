//element
const timers = [];
const dashEl = document.getElementById("dash");
const nameEl = document.getElementById("name");
const hrEl = document.getElementById("hr");
const minEl = document.getElementById("min");
const secEl =document.getElementById("sec");
const addBtn = document.getElementById("add-btn");
// const createBtn = document.getElementById("create");
// let inp-name = "";

function createcard(timer,index){
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="border w-fit  ">
          <h1 class="font-semibold">${timer.name}</h1>
          <div class="time">
            <span data-role="hr" class="text-2xl font-semibold" >00</span>:
            <span data-role="min" class="text-2xl font-semibold">00</span>:
            <span data-role="sec " class="text-2xl font-semibold">Sec</span>
          </div>
          <button class="bg-yellow-400 p-1 space-x-2 rounded-full px-2 " id="start-${index}">Start</button>
          <!-- <button class="bg--400 p-2 space-x-2">Pause</button> -->
          <button class="bg-red-500 rounded-full p-1 px-2 text-white " id="reset-${index}">Reset</button>
        </div>
    `
}
function formattime(){
    let hrout = Math.floor(remain/3600);
    let minout = Math.floor((remain%3600)/60)
    let secout = remain % 60;
    retrun ` ${hrout}:${minout}:${secout}`;
}

addBtn.addEventListener = () => {
    const total = (hrEl.value || 0) * 3600 + (minEl.value || 0)* 60  +
    (secEl.value || 0);
     
    if (total==0) return 
    alert ("Enter the Time");


    const timer ={
        name:nameEl.value || "Timer",
        total,
        remain: total,
        interval: null,
    };

    timers.push(timer);
    createcard(timer, timers.length - 1)

    nameEl.value = hrEl.value = minEl.value = secEl.value = " ";
    
}

document.querySelector("start"){
    
}