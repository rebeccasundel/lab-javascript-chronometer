class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null

  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => { //setInterval it's a loop that gets executed periodically with a specified time lapse
      if (callback) callback(); //if there's a callback, callback gets executed
      this.currentTime = this.currentTime +1;
    }, 1000);
  }//this returns currentTime + 1
  

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueToString = value.toString();
    let totalValue
    if (valueToString.length === 1) {
      totalValue = "0" + valueToString;
    }else 
      totalValue = valueToString 

    return totalValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let splitTime = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
     return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
