// Using Keyboard Event to listen for keydown (event is sent when key is first depressed)
// Add Event Listener to listen for transitionend (event is fired when CSS transition has completed)
// Using .play method to play audio file

function playSound(event) {
    // Creates a new audio variable to select <audio> using attribute selector
    // String interpolation is used to dynamically check for keyCode whenever keydown event is triggered
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    // Creates a new key variable to select <div> using attribute selector
    // String interpolation is used to dynamically check for keyCode whenever keydown event is triggered
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    // Stops the function from running altogether if keydown input does not trigger matching event
    if(!audio) return;
    
    // If same keydown event is triggered, audio will rewind to start and replay, rather than ignoring and waiting for audio function to finish
    audio.currentTime = 0;
    
    // To invoke audio file to be played:
    audio.play();
    
    // Adds .playing to .key Class when event is triggered
    key.classList.add('playing');
}

function removeTransition(event) {
    // When the longest transition is over, the removeTransition function will execute the following, by targeting the propertyName attribute in 'transitionend'
    // Skip the function if it's not a transform
    if(event.propertyName !=='transform') return;
    // 'this' is equal to whatever called against it - in this case, key
    this.classList.remove('playing');
}

// The transitioned event will only fire after it has stopped animating itself - every key needs to be selected as this event will listen for all
// keys variable creates a new variable to listen for all keys
const keys = document.querySelectorAll('.key');

// forEach is used listen for an event called transitionend for each key
// Each key has an Event Listener added to it ('transitionend') which will run the removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);