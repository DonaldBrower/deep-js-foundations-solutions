if (!Object.is || true) {
  Object.is = function (a, b) {
    if (isItNaN(a) && isItNaN(b)) {
      return true;
    }
    if (a === 0 && b === 0) {
      return isNegativeZero(a) === isNegativeZero(b);
    }

    return a === b;
  };
}
// function isNotANumber(x) {
//   if (typeof x === "number" && x.toString() === "NaN") {
//     return true;
//   } else {
//     return false;
//   }
// }
function isItNaN(x) {
  return x !== x;
}
function isNegativeZero(x) {
  if (x === 0 && -Infinity / x === Infinity) {
    return true;
  } else if (x === 0 && -Infinity / x === -Infinity) {
    return false;
  }
}

// tests:
console.log("0, ", Object.is(42, 42) === true);
console.log("1, ", Object.is("foo", "foo") === true);
console.log("2, ", Object.is(false, false) === true);
console.log("3, ", Object.is(null, null) === true);
console.log("4, ", Object.is(undefined, undefined) === true);
console.log("5, ", Object.is(NaN, NaN) === true);
console.log("6, ", Object.is(-0, -0) === true);
console.log("7, ", Object.is(0, 0) === true);

console.log("8, ", Object.is(-0, 0) === false);
console.log("9, ", Object.is(0, -0) === false);
console.log("10, ", Object.is(0, NaN) === false);
console.log("11, ", Object.is(NaN, 0) === false);
console.log("12, ", Object.is(42, "42") === false);
console.log("13, ", Object.is("42", 42) === false);
console.log("14, ", Object.is("foo", "bar") === false);
console.log("15, ", Object.is(false, true) === false);
console.log("16, ", Object.is(null, undefined) === false);
console.log("17, ", Object.is(undefined, null) === false);
