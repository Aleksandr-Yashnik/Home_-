function arrayProcessor(arr, callback) {
  const stringArray = [];
  for (let i = 0; i < arr.length; i++) {
    stringArray.push(String(arr[i]));
  }
  return callback(stringArray);
}

function uppercaseConverter(arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(arr[i].toUpperCase());
  }
  return resultArray;
}

function totalLength(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  return sum;
}

function runProgram() {
  const result1 = arrayProcessor(
    ["apple", "banana", "cherry"],
    uppercaseConverter
  );
  document.getElementById("result1").innerText = result1.join(", ");

  const result2 = arrayProcessor(["apple", "banana", "cherry"], totalLength);
  document.getElementById("result2").innerText = result2;
}
