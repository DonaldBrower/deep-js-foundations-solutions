function isValidName(name) {
  if (
    typeof name === "string" &&
    name.length > 0 &&
    name.replace(/[\s]/g, "").length >= 3
  ) {
    return true;
  } else {
    return false;
  }
}

function hoursAttended(attended, length) {
  if (length && attended) {
    if (attended === "" || length === "") return false;

    if (!["string", "number"].includes(typeof attended)) return false;
    if (!["string", "number"].includes(typeof length)) return false;

    if (String(length).match(/[.]/g) || String(attended).match(/[.]/g))
      return false;

    if (Number(attended) <= Number(length)) return true;
  }

  return false;
}

// tests:
console.log("0, ", isValidName("Frank") === true);
console.log("1, ", hoursAttended(6, 10) === true);
console.log("2, ", hoursAttended(6, "10") === true);
console.log("3, ", hoursAttended("6", 10) === true);
console.log("4, ", hoursAttended("6", "10") === true);
"5, ", console.log("6, ", isValidName(false) === false);
console.log("7, ", isValidName(null) === false);
console.log("8, ", isValidName(undefined) === false);
console.log("9, ", isValidName("") === false);
console.log("10, ", isValidName("  \t\n") === false);
console.log("11, ", isValidName("X") === false);
console.log("12, ", hoursAttended("", 6) === false);
console.log("13, ", hoursAttended(6, "") === false);
console.log("14, ", hoursAttended("", "") === false);
console.log("15, ", hoursAttended("foo", 6) === false);
console.log("16, ", hoursAttended(6, "foo") === false);
console.log("17, ", hoursAttended("foo", "bar") === false);
console.log("18, ", hoursAttended(null, null) === false);
console.log("19, ", hoursAttended(null, undefined) === false);
console.log("20, ", hoursAttended(undefined, null) === false);
console.log("21, ", hoursAttended(undefined, undefined) === false);
console.log("22, ", hoursAttended(false, false) === false);
console.log("23, ", hoursAttended(false, true) === false);
console.log("24, ", hoursAttended(true, false) === false);
console.log("25, ", hoursAttended(true, true) === false);
console.log("26, ", hoursAttended(10, 6) === false);
console.log("27, ", hoursAttended(10, "6") === false);
console.log("28, ", hoursAttended("10", 6) === false);
console.log("29, ", hoursAttended("10", "6") === false);
console.log("30, ", hoursAttended(6, 10.1) === false);
console.log("31, ", hoursAttended(6.1, 10) === false);
console.log("32, ", hoursAttended(6, "10.1") === false);
console.log("33, ", hoursAttended("6.1", 10) === false);
console.log("34, ", hoursAttended("6.1", "10.1") === false);
