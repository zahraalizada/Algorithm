var arr = [1,2,2,2,5,5,6,7];
var num = 2;
var c = [];

for (var i=0; i<arr.length;i++){
  if (arr[i]!=num){
   c += arr[i] + ",";
  }

}     console.log(c)
