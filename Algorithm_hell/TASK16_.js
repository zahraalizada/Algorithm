var a = "iSyAnKaR-47_SaMiR"
var b = ""
 
for (i=0;i<a.length;i++){
  if (a[i] != a[i].toUpperCase()){
   b+= a[i].toUpperCase()
  }
  else{
    b+= a[i].toLowerCase()
  }  
}
  console.log(b)