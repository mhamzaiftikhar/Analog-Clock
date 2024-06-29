// LOGIC
// FOR Hours hand Movement :
// 12 hours = 360 deg rotation
// 1 hour = 360d/12h= 30 deg rotation
// h hour = 30d/h = 30h + m/2

// FOR Checking Hand Movement in Minutes that will be added in Hours Hand Movement:
// 60 minutes = 30 deg
// 1 mintues = 30d/60m = 1/2m
// m minutes = m/2

// FOR MINUTE Hand Movement:
// 60 minute = 360 deg
// 1minute = 360d/60m =6m
// m minute = 6m

// FOR SECONDS Hand Movement:
// 60 seconds = 360 deg
// 1seconds = 360d/60s = 6s
// s seconds = 6s

let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displaytime() {
  let date = new Date();
  // Getting Hours, minutes and Seconds from Date function
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // Rotation Part logic
  let hrotation = 30 * hh + mm / 2;
  let mrotation = 6 * mm;
  let srotation = 6 * ss;

  //  Now Rotation Part in style

  hr.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displaytime, 1000);
