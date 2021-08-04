"use strict";

// TODO: write `findAll(..)`

function findAll(query, values) {
  var storage = [];

  for (let v of values) {
  }
  values.forEach(function coerceValue(v) {
    if (Object.is(query, v)) {
      storage.push(v);
    } else if (query == null && v == null) {
      storage.push(v);
    } else if (typeof query == "boolean" && typeof v == "boolean") {
      if (query == v) {
        storage.push(v);
      }
    } else if (
      !Object.is(v, -0) &&
      typeof query == "string" &&
      query.trim() != "" &&
      typeof v == "number"
    ) {
      if (query == v) {
        storage.push(v);
      }
    } else if (
      typeof query == "number" &&
      !Object.is(query, -0) &&
      !Object.is(query, NaN) &&
      !Object.is(query, Infinity) &&
      !Object.is(query, -Infinity) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (query == v) {
        storage.push(v);
      }
    }
  });
  return storage;
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log("1: ", setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log("2", setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log("3", setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
