import Sounds from "./sounds.js"

let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonSett = document.querySelector('.sett')
let buttonStop = document.querySelector('.stop')
let buttonMore = document.querySelector('.moreOne')
let buttonLess = document.querySelector('.lessOne')
let buttonSoundTree = document.querySelector('.tree')
let buttonSoundRain = document.querySelector('.rain')
let buttonSoundCity = document.querySelector('.city')
let buttonSoundFire = document.querySelector('.fire')
let buttonSun = document.querySelector('.sun')
let buttonMoon = document.querySelector('.moon')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let themeDisplay = document.querySelector('.numbers')
let slider = document.querySelector('.slider')
let slider2 = document.querySelector('.slider2')
let slider3 = document.querySelector('.slider3')
let slider4 = document.querySelector('.slider4')
let body = document.querySelector('.body')
let Path = document.querySelector('.buttons')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

export {
  slider,
  slider2,
  slider3,
  slider4
}

const sound = Sounds()

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimerOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    updateTimerDisplay(minutes, 0)

    if(minutes <= 0 && seconds <=0){
     
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
      buttonStop.classList.add('hide')
      buttonSett.classList.remove('hide')
      
      return
    }
    
    if(seconds <=0) {
      
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSett.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimerOut)

})

buttonStop.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonSett.classList.remove('hide')

  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
})

buttonSett.addEventListener('click', () => {
  let newMinutes = prompt('Quantos minutos?')

  if(!newMinutes) {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSett.classList.remove('hide')
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})

buttonMore.addEventListener('click', () => {
  let newMinutes = 1
  minutes = Number(minutes) + newMinutes

  updateTimerDisplay(minutes, 0)
})

buttonLess.addEventListener('click', () => {
  let newMinutes = 1

  if (minutes == 0) {
    return
  }

  minutes = minutes - newMinutes
  updateTimerDisplay(minutes, 0)
})

buttonSoundTree.addEventListener('click', () => {
  sound.TreeAudioOn()
})

buttonSoundCity.addEventListener('click', () => {
  sound.CitySoundOn()
})

buttonSoundRain.addEventListener('click', () => {
  sound.RainSoundOn()
})

buttonSoundFire.addEventListener('click', () => {
  sound.FireSoundOn()
})

buttonSun.addEventListener('click', () => {
  buttonSun.classList.add('hide')
  buttonMoon.classList.remove('hide')
  body.classList.remove('light-bg')
  body.classList.add('dark-bg')

  buttonSoundTree.classList.remove('button-light')
  buttonSoundRain.classList.remove('button-light')
  buttonSoundFire.classList.remove('button-light')
  buttonSoundCity.classList.remove('button-light')

  buttonSoundTree.classList.add('button-dark')
  buttonSoundTree.classList.add('dark-fill')
  buttonSoundRain.classList.add('button-dark')
  buttonSoundRain.classList.add('dark-fill')
  buttonSoundFire.classList.add('button-dark')
  buttonSoundFire.classList.add('dark-fill')
  buttonSoundCity.classList.add('button-dark')
  buttonSoundCity.classList.add('dark-fill')

  themeDisplay.classList.remove('color-light')
  themeDisplay.classList.add('dark-color')
  Path.classList.add('dark-fill')

  slider2.classList.remove('slider-light')
  slider2.classList.add('slider-dark')

  slider3.classList.remove('slider-light')
  slider3.classList.add('slider-dark')

  slider4.classList.remove('slider-light')
  slider4.classList.add('slider-dark')

  slider.classList.remove('slider-light')
  slider.classList.add('slider-dark')
}) 

buttonMoon.addEventListener('click', () => {
  buttonSun.classList.remove('hide')
  buttonMoon.classList.add('hide')
  body.classList.add('light-bg')
  body.classList.remove('dark-bg')

  buttonSoundTree.classList.add('button-light')
  buttonSoundRain.classList.add('button-light')
  buttonSoundFire.classList.add('button-light')
  buttonSoundCity.classList.add('button-light')

  buttonSoundTree.classList.remove('button-dark')
  buttonSoundTree.classList.remove('dark-fill')
  buttonSoundRain.classList.remove('button-dark')
  buttonSoundRain.classList.remove('dark-fill')
  buttonSoundFire.classList.remove('button-dark')
  buttonSoundFire.classList.remove('dark-fill')
  buttonSoundCity.classList.remove('button-dark')
  buttonSoundCity.classList.remove('dark-fill')

  themeDisplay.classList.add('color-light')
  themeDisplay.classList.remove('dark-color')
  Path.classList.remove('dark-fill')

  slider2.classList.add('slider-light')
  slider2.classList.remove('slider-dark')

  slider3.classList.add('slider-light')
  slider3.classList.remove('slider-dark')

  slider4.classList.add('slider-light')
  slider4.classList.remove('slider-dark')

  slider.classList.add('slider-light')
  slider.classList.remove('slider-dark')

})


