
//Elə bir javascript conditional statement yazın ki o 5 ədədiçərisində ən böyüyünü tapsın.

//Giriş: -5  -2  -3  -1  0
//Çıxış: 0



var a = -5;
var b = -2;
var c = -3;
var d = -1;
var e = 0;


if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > c && b > d && b > e) {
    console.log(b);
} else if ( c > d && c > e) {
    console.log(c);
} else if (d > e) {
    console.log(d);
} else {
    console.log(e);
}