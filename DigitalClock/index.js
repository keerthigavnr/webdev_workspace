function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridian = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  //   console.log(hours);
  //   console.log(minutes);
  //   console.log(seconds);

  const timeString = `${hours}:${minutes}:${seconds}`;
  //   console.log(timeString);
  //   console.log(document.getElementById("clock").innerText);
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds} ${meridian}`;
  console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(updateClock, 1000);
