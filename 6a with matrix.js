var data = ["264, 340", "308, 156", "252, 127", "65, 75", "102, 291", "47, 67", "83, 44", "313, 307", "159, 48", "84, 59", "263, 248", "188, 258", "312, 240", "59, 173", "191, 130", "155, 266", "252, 119", "108, 299", "50, 84", "172, 227", "226, 159", "262, 177", "233, 137", "140, 211", "108, 175", "278, 255", "259, 209", "233, 62", "44, 341", "58, 175", "252, 74", "232, 63", "176, 119", "209, 334", "103, 112", "155, 94", "253, 255", "169, 87", "135, 342", "55, 187", "313, 338", "210, 63", "237, 321", "171, 143", "63, 238", "79, 132", "135, 113", "310, 294", "289, 184", "56, 259"];
size = 400;
abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
res = [];
edge = [];

var matrix = []
for(var i = 0; i < size; i++) {
    matrix.push(new Array(size).fill("X"))
    }

var s;
for (s = 0; s < (data.length); s++) {
	res[s] = 1;
	edge[s] = 1;
	cor = data[s].split(',');
	x = parseInt(cor[0]);
	y = parseInt(cor[1]);
	matrix[x][y] = abc[s];
}

var a;
var b;
for (a = 0; a < (matrix.length); a++) {
for (b = 0; b < (matrix.length); b++) {
z = 99999999999;
j = 0;
	
if (matrix[a][b] === "X") {
var c;
for (c = 0; c < (data.length); c++) {
	cor2 = data[c].split(',');
	p = Math.abs(a - parseInt(cor2[0])) + Math.abs(b - parseInt(cor2[1]));
	
if (z > p) {
	z = p;
	m = c;
    j = 0;	
}
else if (z == p) {
	j = 1;
}
}
}

if ((matrix[a][b] === "X") & (j == 0)) {
matrix[a][b] = abc[m];
res[m]++;
}
else if ((matrix[a][b] === "X") & (j == 1)) {
matrix[a][b] = ".";
}
if ((a == 0) || (b == size - 1)||(b == 0) || (a == size - 1)){
	edge[m] = 0;
}
}	
}
var gt = 0;
var ed;
for (ed = 0; ed < (data.length); ed++) {
res[ed] = (res[ed] * edge[ed]);
if (res[ed] > gt) {
	gt = res[ed];
}
}
console.log(gt);