export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) {
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Informe os minutos')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }
  function getSeconds() {
    let newSeconds = prompt('Informe os segundos')

    if (!newSeconds) {
      return false
    }
    return newSeconds
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
    getSeconds
  }
}
