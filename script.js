"use strict";

console.log("hihi");

const array = [];
let counter = [];
let i = 0;

count();

function count() {
  array.unshift(i);
  i++;

  console.log(array, i);

  setTimeout(count, 1000);
}
