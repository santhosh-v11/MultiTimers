//element
const timers = [];
const dashEl = document.getElementById("dash");
const nameEl = document.getElementById("input-name");
const hrEl = document.getElementById("hr");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const addBtn = document.getElementById("add-btn");
// const createBtn = document.getElementById("create");
// let inp-name = "";

let qi = document.querySelectorAll("[dataset-min]")
console.log(qi);

function quickbtn(min) {
    hrEl.value = 0;
    minEl.value = min;
    secEl.value = 0;
    console.log(min);
    

    
}
function createcard(timer, index) {
  const card = document.createElement("div");
  card.innerHTML = `
   
        <div id="dash" class="p-5">
        <div class="border w-42 h-42 p-2 flex flex-col justify-center items-center rounded-full  ">
          <h1 class="font-semibold text-center">${timer.name}</h1>
            <div class="time text-center text-2xl p-1" id=" time-${index}">
              <span data-role="hr">00</span>:
              <span data-role="min">00</span>:
              <span data-role="sec">00</span>
            </div>
            <div>
                <button class="bg-yellow-200 rounded-full px-2 " id="start-${index}"> Start </button>
                <button class="bg-red-500 rounded-full  px-2 text-white " id="reset-${index}">Reset</button>
            </div>
        </div>
      </div>
    `;
  dashEl.appendChild(card);
  console.log("timnum",index);
  
}
function formattime(remain) {
  let hrout = Math.floor(remain / 3600);
  let minout = Math.floor((remain % 3600) / 60);
  let secout = remain % 60;
  return ` ${hrout}:${minout}:${secout}`;
}
addBtn.addEventListener("click", () => {
  console.log("sa");

  //    console.log(timer);

  console.log(formattime(3700));
  const total =
    (hrEl.value || 0) * 3600 + (minEl.value || 0) * 60 + (secEl.value || 0);

  if (total == 0) return alert("Enter the Time");

  const timer = {
    name: nameEl.value || "Timer",
    total,
    remain: total,
    interval: null,
  };

  timers.push(timer);
  createcard(timer, timers.length - 1);

  console.log(timers);
  
  
  nameEl.value = hrEl.value = minEl.value = secEl.value = "";
});


// document.querySelector("#start-${index}"){

//     interval= setTimeout(() => {
//         remain--

//     }, 1000);

// }

// function updateui(){
//     document.querySelector(#start-${index})

// }

//inputel
//quickmin
//addcard
//start count
//timers -->timer.index == value;
//timer.interval == null
