let time = document.querySelectorAll(".show");
setInterval(() => {
  let d = new Date();
  time[0].innerHTML = d.getHours();
  time[1].innerHTML = d.getMinutes();
  time[2].innerHTML = d.getSeconds();
}, 1000);
