const minutesEl = document.querySelector("#minutes"),
  secondsEl = document.querySelector("#seconds"),
  millisecondsEl = document.querySelector("#milliseconds"),
  startBtn = document.querySelector("#startBtn"),
  pauseBtn = document.querySelector("#pauseBtn"),
  resumeBtn = document.querySelector("#resumeBtn"),
  resetBtn = document.querySelector("#resetBtn");
let interval,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
  isPaused = !1;
startBtn.addEventListener("click", startTmer),
  pauseBtn.addEventListener("click", pauseTimer),
  resumeBtn.addEventListener("click", resumeTimer),
  resetBtn.addEventListener("click", resetTimer);
function startTmer() {
  (interval = setInterval(() => {
    isPaused ||
      ((milliseconds += 10),
      1e3 === milliseconds && (seconds++, (milliseconds = 0)),
      60 === seconds && (minutes++, (seconds = 0)),
      (minutesEl.textContent = formatTime(minutes)),
      (secondsEl.textContent = formatTime(seconds)),
      (millisecondsEl.textContent = formatMilliseconds(milliseconds)));
  }, 10)),
    (startBtn.style.display = "none"),
    (pauseBtn.style.display = "block");
}
function pauseTimer() {
  (isPaused = !0),
    (pauseBtn.style.display = "none"),
    (resumeBtn.style.display = "block");
}
function resumeTimer() {
  (isPaused = !1),
    (pauseBtn.style.display = "block"),
    (resumeBtn.style.display = "none");
}
function resetTimer() {
  clearInterval(interval),
    (minutes = 0),
    (seconds = 0),
    (milliseconds = 0),
    (minutesEl.textContent = "00"),
    (secondsEl.textContent = "00"),
    (millisecondsEl.textContent = "000"),
    (startBtn.style.display = "block"),
    (pauseBtn.style.display = "none"),
    (resumeBtn.style.display = "none");
}
function formatTime(a) {
  return 10 > a ? `0${a}` : a;
}
function formatMilliseconds(a) {
  return 100 > a ? `${a}`.padStart(3, "0") : a;
}
