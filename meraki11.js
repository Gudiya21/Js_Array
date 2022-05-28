// var Name=['m','a','l','a','y','a','l','a','m'];
// var store=Name;
// var str="";
// for (let i=Name.length-1;i>=0;i--){
//    str=str+Name[i]
// }
// if (store===str){
//    console.log(store,"This is a polindrome")
// }
// else{
//    console.log(store,"This is not a polindrome")
// }



var Name=['m','a','l','a','y','a','l','a','m'];
var store='';
var str="";
for (let i=Name.length-1;i>=0;i--){
   str+=Name[i]
}
for (let i=0;i<Name.length;i++){
    store+=Name[i]
}
if (store===str){
   console.log(store,"This is a polindrome")
}
else{
   console.log(store,"This is not a polindrome")
}