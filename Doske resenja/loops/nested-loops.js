var n = 15;
var i;
var j;
var s;

for (i = 0; i < n; i++) {
    s = "";
    for (j = 0; j < n; j++) {

        if (j == (n - 1) / 2 || i == (n - 1) / 2) {
            s += "*";
        } else {
            s += " ";
        }
    }
    console.log(s);
}



var n1 = 6, n2 = 1, n3 = 7;
var i;
var s;
var s1 = '';
var s2 = '';
var s3 = '';

for (i = 0; i < n1; i++) {
    s1 += '*';

}
for (i = 0; i < n2; i++) {
    s2 += '*';

}
for (i = 0; i < n3; i++) {
    s3 += '*';

}

s = s1 + "\n" + s2 + "\n" + s3 + "\n"; s

console.log(s);



