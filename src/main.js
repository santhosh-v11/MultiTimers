//get elements
const timers = [];
const dashEl = document.getElementById("dash");
const nameEl = document.getElementById("input-name");
const hrEl = document.getElementById("hr");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const addBtn = document.getElementById("add-btn");
const msg = document.getElementById("msg");

//quick timer funt
document.querySelectorAll("[data-min]").forEach((e) => {
  e.addEventListener("click", () => quickbtn(e.dataset.min));
});
// console.log("qi",minEl)
function quickbtn(min) {
  hrEl.value = 0;
  minEl.value = min;
  secEl.value = 0;
  console.log(min);
}

//create timer card
function createcard(timer, index) {
  // console.log(msg);
  msg.classList = "hidden transition-all duration-300";
  const card = document.createElement("div");
  card.className =
    "p-5  transition-all duration-300 ease-out opacity-0   scale-95 translate-y-2";
  card.innerHTML = `
        <div class="ring-4 ring-green-500 shadow-2xl mx-auto w-42 h-42 p-2 flex flex-col justify-center items-center rounded-full  ">
          <h1 class="font-semibold text-center">${timer.name}</h1>
            <div class="time text-center text-2xl p-1" id="time-${index}">
              <span id="out-${index}" >${formattime(timer.remain)}</span>
            </div>
            <div id="control-btns-${index}">
            <button class="bg-yellow-200 rounded-full px-2 hover:cursor-pointer hover:ring-1 hover:ring-yellow-400" id="start-${index}"> Start </button>
            <button class="bg-yellow-200 rounded-full px-2 hidden " id="pause-${index}"> Pause </button>
            <button class="bg-red-200 rounded-full  px-2 hover:cursor-pointer hover:ring-1 hover:ring-red-400 " id="reset-${index}">Reset</button>
            <button id="delete-${index}" class="*:hover:cursor-pointer *:hover:scale-120 hover:shadow-2xl transition-all"><i class="fa-solid fa-circle-xmark text-red-600  " title="delete" ></i></button>
            </div>
        </div>
          `;
  dashEl.appendChild(card);
  setTimeout(() => {
    card.classList.remove("opacity-0", "scale-95", "translate-y-2");
    card.classList.add("opacity-100", "scale-100", "translate-y-0");
  }, 50);

  // console.log("tim-num", index);
  //start function
  card.querySelector(`#start-${index}`).addEventListener("click", () => {
    if (timer.interval) return;
    timer.interval = setInterval(() => {
      if (timer.remain == 0) {
        clearInterval(timer.interval);
        timer.interval = null;
        document.getElementById(`control-btns-${index}`).innerHTML =
          `<div class="mx-auto text-center"><p class="text-2xl text-red-500 font-semibold">Times Up !</p>
        <button id="delete-${index}" class="*:hover:cursor-pointer  *:hover:scale-120 hover:shadow-2xl transition-all"><i class="fa-solid fa-circle-xmark text-red-600  " title="delete" ></i></button></div>`;
        document.getElementById(`delete-${index}`).onclick = () => {
        clearInterval(timer.interval);
        card.remove();
      };
        
      }

      timer.remain--;
      
      document.getElementById(`start-${index}`).classList.add("hidden");
      document.getElementById(`pause-${index}`).classList.remove("hidden");
      document.getElementById(`out-${index}`).innerText =
        `${formattime(timer.remain)}`;
    }, 100);
    console.log(timer.remain);
  });

  //pause function;
  card.querySelector(`#pause-${index}`).addEventListener("click", () => {
    clearInterval(timer.interval);
    timer.interval = null;
    document.getElementById(`start-${index}`).classList.toggle("hidden");
    document.getElementById(`pause-${index}`).classList.toggle("hidden");
  });
  //reset function
  card.querySelector(`#reset-${index}`).addEventListener("click", () => {
    // console.log("fine");
    clearInterval(timer.interval);
    timer.interval = null;
    timer.remain = timer.total;
    document.getElementById(`out-${index}`).innerText =
      `${formattime(timer.remain)}`;
    document.getElementById(`start-${index}`).classList.remove("hidden");
    document.getElementById(`pause-${index}`).classList.add("hidden");
  });
  //delete function
  card.querySelector(`#delete-${index}`).onclick = () => {
    if (confirm("Are you sure to delete this Timer ") == true) {
      clearInterval(timer.interval);
      card.remove();
    }
    return;
  };
}

function formattime(remain) {
  let hrout = String(Math.floor(remain / 3600)).padStart(2, "0");
  let minout = String(Math.floor((remain / 60) % 60)).padStart(2, "0");
  let secout = String(remain % 60).padStart(2, "0");
  return ` ${hrout}:${minout}:${secout}`;
}
//Add Timer btn
addBtn.addEventListener("click", () => {
  // console.log(formattime(3700));
  const total =
    Number(hrEl.value || 0) * 3600 +
    Number(minEl.value || 0) * 60 +
    Number(secEl.value || 0);
  console.log("totoal", total);

  formattime(total);
  if(nameEl.value.trim() === "") return alert("Enter any Name  ")
  if (total == 0) return alert("Enter the Time");

  const timer = {
    name: nameEl.value || "Timer",
    total,
    remain: total,
    interval: null,
  };

  timers.push(timer);
  createcard(timer, timers.length - 1);
  // console.log(timers);
  nameEl.value = hrEl.value = minEl.value = secEl.value = "";
});

//inputel
//quickmin
//addcard
//start count
//timers -->timer.index == value;
//timer.interval == null
