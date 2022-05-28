// sort array method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)


// reverse method in array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)

// numeric sort
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a- b});
// console.log(points)


// Map method
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(myFunction(numbers2))