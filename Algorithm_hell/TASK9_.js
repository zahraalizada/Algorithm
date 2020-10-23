// 1,2,5,7,8-ci
//3,4-cü
//6-cı
//9-cu

var a = Math.floor(prompt("0-9 arası bir rəqəm daxil edin"));

if (a==3 || a==4 ){
  console.log(a + " -cü")
}
else if (a==6 || a==0){
  console.log(a + " -cı")
}

else if (a==9 ){
  console.log(a + " -cu")
}
else {
  console.log(a + " -ci")
}