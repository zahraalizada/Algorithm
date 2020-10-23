var a = 1001;

var b = Math.floor(a/1000);
var c = Math.floor(a/100)%10;
var d = Math.floor(a/10)%10;
var e = a%10;

var sum = b*Math.pow(2,3)+ c*Math.pow(2,2)+d*Math.pow(2,1)+ e*Math.pow(2,0);
console.log(sum)