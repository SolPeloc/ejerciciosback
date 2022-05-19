"use strict";

var express = require("express"); //esto es lo mismo que => import express from "express"// 


var app = express();

var suma = function suma(a, b) {
  return a + b;
};

console.log(suma(2, 5));

var resta = function resta(a, b) {
  return a - b;
};

console.log(resta(10, 5));

var multi = function multi(a, b) {
  return a * b;
};

console.log(multi(10, 5));

var color = function color() {
  let1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var rgb = "".concat(let1, ", ").concat(let2, ", ").concat(let3);
  return rgb;
};

console.log(color());
app.listen(8080, function () {
  console.log("server corriendo");
});