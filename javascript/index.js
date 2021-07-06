const chronometer = new Chronometer();

let minutes = 0;
 let seconds = 0;
 let millis = 0;


// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  minutes = printMinutes();
  seconds = printSeconds();
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

function printMinutes() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  millis = chronometer.getMilliSecond();
  milDecElement.innerText = millis[0];
  milUniElement.innerText = millis[1];

}

function clearMillis() {
  chronometer.currentMillis = 0;
  printMilliseconds();

}

function printSplit() {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    const splitTime = `<li>${chronometer.split()}</li>`
    const parentElement = document.querySelector("ol");
    parentElement.insertAdjacentHTML('beforeend', splitTime);
  }

}

function clearSplits() {
  // ... your code goes here
  const parent = document.querySelector('ol');
  parent.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  chronometer.start()
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.stop();
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  if (btnRightElement.innerText === 'RESET') {
    chronometer.reset()
    clearSplits();
    clearMillis();
    printTime();
  }
}

const toggleButtons = () => {
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');

  const leftBtnText = btnLeftElement.innerText;
  const rightBtnText = btnRightElement.innerText;

  btnLeftElement.innerText = leftBtnText === 'START' ? 'STOP' : 'START';
  btnRightElement.innerText = rightBtnText === 'RESET' ? 'SPLIT' : 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  toggleButtons();
   if (btnLeftElement.classList.contains('stop')) {
     setStopBtn();
     setInterval(() => {
       printTime();
       setInterval(printMilliseconds, 500);
     }, 1000);
   } else {
     setStartBtn();
   }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  setResetBtn();
  printSplit();
});
