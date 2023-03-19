import { elements } from './elements.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'

const sound = Sound()

const {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetTimer: controls.reset
})

function playTimer() {
  controls.play()
  timer.countdown()
  sound.buttonPress()
}

function pauseTimer() {
  controls.pause()
  timer.pause()
  sound.buttonPress()
}

function stopTimer() {
  controls.reset()
  timer.resetDisplay()
  sound.buttonPress()
}

function setTimerMinutesAndSeconds() {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.resetDisplay()
    return
  }

  let newSeconds = controls.getSeconds()

  if (newSeconds <= 59) {
    if (!newSeconds) {
      timer.resetDisplay()
      return
    }
  } else {
    alert('Valor incorreto')
    newSeconds = 0
  }

  timer.updateDisplay(newMinutes, newSeconds)
  timer.updateMinutesAndSeconds(newMinutes, newSeconds)
}

function muteOff() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
}

function muteOn() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')

  sound.bgAudio.play()
}

buttonPlay.addEventListener('click', playTimer)
buttonPause.addEventListener('click', pauseTimer)
buttonStop.addEventListener('click', stopTimer)
buttonSet.addEventListener('click', setTimerMinutesAndSeconds)
buttonSoundOn.addEventListener('click', muteOff)
buttonSoundOff.addEventListener('click', muteOn)
