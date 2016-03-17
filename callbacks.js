function Clock () {
  // 1. Create a Date object.
  var time = Date.new();
  // 2. Store the hours, minutes, and seconds.
  this.hours = time.GetHours();
  this.minutes = time.getMinutes();
  time.seconds = time.getSeconds();
  // 3. Call printTime.
  this.printTime();
  // 4. Schedule the tick at 1 second intervals.
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var str = this.hours + ':' + this.minutes + ':' + this.seconds;
  // Use console.log to print it.
  console.log(str);
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  this.seconds += 1;
  // 2. Call printTime.
  this.printTime();
};



var readline = require('readline')

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0){

    reader.question("Enter a number: ", function(numStr){
      var ints = parseInt(numStr);

      sum += ints;
      console.log("Current sum: " + sum);
    });
  }
  else{
    completionCallback(sum);
  }

};



var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question("Is " + el1 + "> " + el2 + "?", function(val){
    if (val === "yes") {callback(true);}
    else {callback(false);}

  });

}


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if (i == arr.length-1){
    outerBubbleSortLoop(madeAnySwaps);
  }
  else{
    askIfGreaterThan(arr[i], arr[i+1], function (greaterThan){
      if greaterThan{

        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(true);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}
