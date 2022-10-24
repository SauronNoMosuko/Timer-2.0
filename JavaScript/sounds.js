import {
  slider,
  slider2,
  slider3,
  slider4
} from './script.js'

export default () => {
  const TreeSound = new Audio('https://github.com/SauronNoMosuko/Sounds-From-Timer/blob/main/Floresta.wav?raw=true')
  const RainSound = new Audio('https://github.com/SauronNoMosuko/Sounds-From-Timer/blob/main/Chuva.wav?raw=true')
  const CitySound = new Audio('https://github.com/SauronNoMosuko/Sounds-From-Timer/blob/main/Cafeteria.wav?raw=true')
  const FireSound = new Audio('https://github.com/SauronNoMosuko/Sounds-From-Timer/blob/main/Lareira.wav?raw=true')

  function TreeAudioOn() {
    TreeSound.play()
    CitySound.pause()
    FireSound.pause()
    RainSound.pause()

    TreeSound.loop = true
  }

  function RainSoundOn() {
    TreeSound.pause()
    CitySound.pause()
    FireSound.pause()
    RainSound.play()

    RainSound.loop = true
  }

  function CitySoundOn() {
    CitySound.play()
    TreeSound.pause()
    FireSound.pause()
    RainSound.pause()
    
    CitySound.loop = true
  }

  function FireSoundOn() {
    FireSound.play()
    CitySound.pause()
    TreeSound.pause()
    RainSound.pause()

    FireSound.loop = true
  }

  slider.addEventListener('input', () => {
    TreeSound.volume = slider.value / 100;
  });
  
  slider2.addEventListener('input', () => {
    RainSound.volume = slider2.value / 100;
  });
  
  slider3.addEventListener('input', () => {
    CitySound.volume = slider3.value / 100;
  });
  
  slider4.addEventListener('input', () => {
    FireSound.volume = slider4.value / 100;
  })


  return {
    TreeAudioOn,
    RainSoundOn,
    CitySoundOn,
    FireSoundOn
  }
}