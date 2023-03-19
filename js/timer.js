import Sound from './sounds.js'
const sound = Sound()
export default function Timer({ minutesDisplay, secondsDisplay, resetTimer }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        resetTimer()
        updateDisplay()
        sound.timeOut()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function resetDisplay() {
    updateDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }

  function updateMinutesAndSeconds(newMinutes, newSeconds) {
    minutes = newMinutes
    seconds = newSeconds
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }
  return {
    countdown,
    resetDisplay,
    updateDisplay,
    updateMinutesAndSeconds,
    pause
  }
}
