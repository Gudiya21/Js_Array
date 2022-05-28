var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
let i=0;
var max=a[i];
for(i in a){
    if(a[i]>max){
        max=a[i]
    }
var max2=a[i];
for(j in a){
    if(a[j]>max2){
        if(a[j]<max){
            max2=a[j]
        }
    }
}
}
console.log(max)
console.log(max2)