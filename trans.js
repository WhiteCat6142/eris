
function s(arr){
  var str="";
  for (var i = 0, len = arr.length; i < len; i++){
   if(Array.isArray(arr[i]))str+=s(arr[i]);
    else str+=arr[i].toString();
   str+=" ";
  }
  return "("+str+")";
}
var reg = new RegExp(/[^\b\s*]|\*/g);
function read(str){
var a=new Array();
var arr;
while ((arr = reg.exec(str)) !=null) {
switch(arr[0]){
case ")": return a;
case "(": a.push(read(str));break;
case "+": 
 var x = new Array();
 x[0]="add";x[1]=a;
 a=x;
 break;
default:a.push(arr[0]);
}
}
return a;
}
print(s(read("(a) b (1+1*1)")));
