var yourDateToGo = new Date(); //here you're making new Date object
yourDateToGo.setDate(yourDateToGo.getDate() + 1); //your're setting date in this object 1 day more from now
//you can change number of days to go by putting any number in place of 1

let timing = setInterval(
  // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
  function () {
    let currentDate = new Date().getTime(); //same thing as above
    let timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days
    if (days < 10) days = "0" + days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); //conversion miliseconds on hours
    if (hours < 10) hours = "0" + hours;
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); //conversion miliseconds on seconds
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("countdown").innerHTML =
      hours + "h " + minutes + "m " + seconds + "s"; // putting number of days, hours, minutes and seconds in div,
    //which id is countdown

    if (timeLeft <= 0) {
      clearInterval(timing);
      document.getElementById("countdown").innerHTML = "It's over"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now)
      //and you see "It's over" instead of time left
    }
  },
  1000
);

// home page settings icon script

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
// home page baricon expand
function bars() {
  let nav = document.getElementsByClassName("expanded");
  let element = document.getElementById("side-navigation");
  let element1 = document.getElementById("side-mar");

  if (nav.length > 0) {
    element.classList.remove("expanded");
    element1.classList.remove("side-margin");
    element.classList.add("show-nav");
    element.classList.add("d-none");
  } else {
    element.classList.add("expanded");
    element1.classList.add("side-margin");
    element.classList.remove("show-nav");
    element.classList.remove("d-none");
  }
}

// buttons toggle events listener
// Lights - interior
// kitchen button
function switchhIt() {
  let box = document.getElementById("customSwitch4");
  let element = document.getElementById("s-1");

  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}
// Dining room button
function switchhIt2() {
  let box = document.getElementById("customSwitch5");
  let element = document.getElementById("s-2");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}
// Living room button

function switchhIt3() {
  let box = document.getElementById("customSwitch6");
  let element = document.getElementById("s-3");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}
//  Bedroom btn
function switchhIt4() {
  let box = document.getElementById("customSwitch7");
  let element = document.getElementById("s-4");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Bathroom
function switchhIt5() {
  let box = document.getElementById("customSwitch8");
  let element = document.getElementById("s-5");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// All Button toggle
function on() {
  let switches = document.getElementById();
  let bulbStatus = document.getElementById("s1", "s2", "s3", "s4", "s5");
}

// Security system

function switchhIt0() {
  let box = document.getElementById("customSwitch1");
  let element1 = document.getElementById("dis-armed");
  let element2 = document.getElementById("armed");
  let element3 = document.getElementById("security-box");
  if (box.checked) {
    element1.classList.add("d-none");
    element2.classList.remove("d-none");
    element2.classList.add("armed");
    element3.classList.add("security-box");
  } else {
    element1.classList.remove("d-none");
    element2.classList.remove("Armed");
    element2.classList.add("d-none");
    element3.classList.remove("security-box");
  }
}

// Lights - exterior
// Front doors
function switchhIt6() {
  let box = document.getElementById("customSwitch9");
  let element = document.getElementById("s-6");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Back doors
function switchhIt7() {
  let box = document.getElementById("customSwitch10");
  let element = document.getElementById("s-7");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}
//  Pool
function switchhIt8() {
  let box = document.getElementById("customSwitch11");
  let element = document.getElementById("s-8");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Garage
function switchhIt9() {
  let box = document.getElementById("customSwitch12");
  let element = document.getElementById("s-9");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// camra 1 buttons
function switchhIt10() {
  let box = document.getElementById("customSwitch15");
  let element = document.getElementById("s-10");
  let element1 = document.getElementById("off-1");
  let element2 = document.getElementById("on-1");
  if (box.checked) {
    element.classList.remove("icons-colors");
    element1.classList.add("d-none");
    element.classList.add("icons-colors-glow");
    element2.classList.remove("d-none");
  } else {
    element.classList.remove("icons-colors-glow");
    element.classList.add("icons-colors");
    element1.classList.remove("d-none");
    element2.classList.add("d-none");
  }
}
// camra 2 buttons
function switchhIt11() {
  let box = document.getElementById("customSwitch16");
  let element = document.getElementById("s-11");
  let element1 = document.getElementById("off-2");
  let element2 = document.getElementById("on-2");
  if (box.checked) {
    element.classList.remove("icons-colors");
    element1.classList.add("d-none");
    element.classList.add("icons-colors-glow");
    element2.classList.remove("d-none");
  } else {
    element.classList.remove("icons-colors-glow");
    element.classList.add("icons-colors");
    element1.classList.remove("d-none");
    element2.classList.add("d-none");
  }
}

// page-2 Lights section exterior

// Kitchen

function switchhIt12() {
  let box = document.getElementById("customSwitch7");
  let element = document.getElementById("s-12");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}
// dinning room

function switchhIt13() {
  let box = document.getElementById("customSwitch8");
  let element = document.getElementById("s-13");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// dinning room
function switchhIt14() {
  let box = document.getElementById("customSwitch9");
  let element = document.getElementById("s-14");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Bed room

function switchhIt15() {
  let box = document.getElementById("customSwitch10");
  let element = document.getElementById("s-15");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Bathroom

function switchhIt16() {
  let box = document.getElementById("customSwitch11");
  let element = document.getElementById("s-16");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}
// light section exterior
// front door
function switchhIt17() {
  let box = document.getElementById("customSwitch12");
  let element = document.getElementById("s-17");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Back door
function switchhIt18() {
  let box = document.getElementById("customSwitch13");
  let element = document.getElementById("s-18");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Pool
function switchhIt19() {
  let box = document.getElementById("customSwitch14");
  let element = document.getElementById("s-19");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Garage
function switchhIt20() {
  let box = document.getElementById("customSwitch15");
  let element = document.getElementById("s-20");
  if (box.checked) {
    element.classList.remove("fa-lightbulb");
    element.classList.add("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
  } else {
    element.classList.remove("fa-lightbulb-on", "on-bulb", "icons-colors-glow");
    element.classList.add("fa-lightbulb");
  }
}

// Appliances section
// Washing Machine timer
function countdown() {
  var seconds = 60;
  function tick() {
    let counter = document.getElementById("counter");
    let element = document.getElementById("");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      alert("Game over");
    }
  }
  tick();
}

countdown();

// timer section
var timer = new Timer();
timer.start();

timer.addEventListener("secondsUpdated", function (e) {
  $("#basicUsage").html(timer.getTimeValues().toString());
});

// On off tv button
function switchhIt21() {
  let box = document.getElementById("customSwitch16");
  let element = document.getElementById("tv-off");
  let element1 = document.getElementById("tv-color");
  if (box.checked) {
    element.classList.remove("d-none");
    element1.classList.add("icons-colors-glow");
  } else {
    element.classList.add("d-none");
    element1.classList.remove("icons-colors-glow");
    element1.classList.add("icons-color");
  }
}
