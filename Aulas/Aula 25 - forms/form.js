"use strict";

let number1 = document.getElementById("in1");
let number2 = document.getElementById("in2");
let result = document.getElementById("res");

const sum = function () {
  let n1 = Number(number1.value);
  let n2 = Number(number2.value);
  if (n1 == 0 && n2 == 0) {
    window.alert("[ERROR] Fill the fields");
  } else {
    result.innerHTML = n1 + n2;
  }
};

const test = function () {
  result.innerHTML = 0;
};
