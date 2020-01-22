// function TOH(n, source, dest, via) {
//   if (n >= 1) {
//     // Move a tower of n-1 to the buffer peg, using the destination peg.
//     TOH(n - 1, source, via, dest);

//     // Move the remaining disk to the destination peg.
//     console.log("Move disk from Tower ", source, " to Tower ", dest);

//     // Move the tower of `n-1` from the `buffer peg` to the `destination peg` using the `source peg`.
//     TOH(n - 1, via, dest, source);
//   }

//   return;
// }

// TOH(3, "A", "C", "B");

//Drill 1 iterative, counting sheep

function sheepCounter(n) {
  for (let i = n; n >= 0; i--) {
    if (i > 0) {
      console.log(`${i}: Another sheep jumps over the fence`);
    } else {
      console.log("All sheep jumped over the fence.");
      return;
    }
  }
}

sheepCounter(3);

function powerCalc(base, exp) {
  return Math.pow(base, exp);
}

function reverseString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++ ) {
    if (str.charAt(str.length -1) ) {
      newStr = newStr + 
    }
  }
}