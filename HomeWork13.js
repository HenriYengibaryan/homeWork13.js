//1
function recursForSum(x) {
  if (x.length == 0) {
    return 0;
  } else {
    return x.pop() + fx(x);
  }
}

//2
function frecurseForNumber(x) {
  x += "";
  let reserve = "";
  if (x.length === 0) {
    return reserve;
  } else {
    reserve += x.slice(-1);
    x = x.slice(0, x.length - 1);
    return reserve + frecurseForNumber(x);
  }
}

//3
function recursPi(string) {
  let reserve = "";
  if (string.length === 0) {
    return reserve;
  } else {
    if (string.slice(0, 1) === "p" || string.slice(0, 1) === "P") {
      if (string.slice(0, 2) === "Pi" || string.slice(0, 2) === "pi") {
        reserve += "3.14";
      }
    } else {
      reserve += string.slice(0, 1);
    }
    string = string.slice(1, string.length);
    return reserve + recursPi(string);
  }
}
//4
function recurseSimetric(x) {
  if (x.length === 0) {
    return true;
  } else {
    let leftChar = x.slice(x.length / 2 - 1, x.length / 2);
    let rightChar = x.slice(x.length / 2, x.length / 2 + 1);
    if (left !== right) {
      return false;
    }
    let leftWord = x.slice(0, x.length / 2 - 1);
    let rightWord = x.slice(x.length / 2 + 1, x.length);
    x = leftWord + rightWord;
    recurseSimetric(x);
  }
}
//5
function recurseConcat(x) {
  let reserve = [];
  if (x.length === 0) {
    return reserve;
  }
  reserve.push(x.pop());
  return reserve.flat(2).concat(recurseConcat(x));
}
