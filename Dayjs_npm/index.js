function updateTime() {
  const today = dayjs();
  const dates = today.format("dddd,D MMMM YYYY"); // Output: Current date in YYYY-MM-DD format
  const times = today.format("h:mm:ss A");
  dayjs.extend(window.dayjs_plugin_utc);
  dayjs.extend(window.dayjs_plugin_timezone);
  const timezone = dayjs.tz.guess();

  document.getElementById("timezone-div").textContent = timezone;
  document.getElementById("time-div").textContent = times;
  document.getElementById("date-div").textContent = dates;
}

setInterval(updateTime, 1000);
var MicroModal = require("micromodal"); // commonjs module

document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init();
});
