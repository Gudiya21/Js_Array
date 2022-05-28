var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over"; 
var c = mainStr.split(" ");
var index=c.indexOf("over");
var l=[];
c[index]="on"
c+="\n"
console.log(c)





// var items =[523,3452,334,31,5346];
// var index = items.indexOf(3452);

// if (index !== -1) {
//     items[index] = 1010;
// }
// console.log(items)