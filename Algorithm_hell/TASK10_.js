var a = "yasinugur";
var b = 3;
var yeni ="";

for (var i=0;i<b;i++){
  yeni += a.slice(0,b) + "\n";
break;}

for(i=b;i<a.length-b;i++){
  yeni+=a.slice(b,a.length-b)+ "\n"
break;
}

for (i=(a.length-b); i<a.length;i++){
  yeni+=a.slice(a.length-b, a.length)+ "\n";
break;}

  console.log(yeni)