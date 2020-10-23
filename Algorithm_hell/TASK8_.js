var cumle = "Azerbaycan dovletdir";
var soz = "guclu";
var index = 10;
var yenicumle = "";

function InsertText(cumle, soz, index){
  for (var i = 0; i<index; i++){
    yenicumle+= cumle[i];}
  
  yenicumle+=soz;
  
  for (i=index;i<cumle.length;i++){
    yenicumle+=cumle[i];
  }
return yenicumle; 
}

console.log(InsertText(cumle, soz, index));