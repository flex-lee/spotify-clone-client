export function handleTimeChange(msTime) {
  let time = Math.floor(msTime / 1000);
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60).toString();
  sec = sec[1] ? sec : "0" + sec;

  return `${min}:${sec}`;
}
