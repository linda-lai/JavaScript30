// SETTINGS FOR THE SECONDS CLOCK HAND
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();
  console.log(now)

  // FOR SECONDS HAND
  const seconds = now.getSeconds();
  // To convert seconds to base 100 (at 0 = 0deg, 100 = 360deg), +90 seconds to align start with 12:00
  const secondsDegrees = ((seconds / 60 ) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  // FOR MINUTE HAND
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  // FOR HOUR HAND
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  // Temporarily takes off transition so when ticks to 12:00 doesn't reapply itself
  if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
  else secondHand.style.transition = 'all 0.05s';

  if (minsDegrees === 90) minHand.style.transition = 'all 0s';
  else minHand.style.transition = 'all 0.1s';

 console.log('it\'s： ' + hour + ":" + mins + ":" + seconds);

}

setInterval(setDate, 1000)
setDate()