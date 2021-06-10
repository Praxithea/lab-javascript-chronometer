class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() => {

      this.currentTime++


      // executed 
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
    // ... your code goes here
  }
  getSeconds() {

    let seconds = this.currentTime - (this.getMinutes() * 60)
    return seconds;
    //CurrentTime- (minutes* 60)
    // ... your code goes here
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number
    } else {
      return number.toString()
    }
  }
  // ... your code goes here
//
//stopClick() {
  

  ClearInterval(this.intervalID);
      
   // }
  // ... your code goes here
//}
//resetClick () {
//current time zero 
  // ... your code goes here
//}
splitClick() {
let doubleDigMin = twoDigitsNumber(this.getMinutes())
let doubleDidSec = twoDigitsNumber(this.getSeconds())
return `${doubleDigMin}:{this.getMinutes}`;
return `${doubleDigSec}:{this.getSeconds}`;
  // ... your code goes here
}
}
