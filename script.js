"use strict";

console.log("hihi");

const array = [];
let counter = 0;

count();

function count() {
  array.unshift(counter);
  counter++;

  setTimeout(count, 1000);

  if (array.length > 9) {
    array.pop();
  }

  console.log(array);
}
