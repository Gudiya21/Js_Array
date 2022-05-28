var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
let i=0;
var max=a[i];
for(i in a){
    if(a[i]>max){
        max=a[i]
    }
}
console.log(max)