let a = 0,
  ave = 0,
  b = 0;
const x = [1, 2, 3];

for (let i = 0; i < x.length; i++) {
  ave += x[i];
}
ave = ave / x.length

for (let i = 0; i < x.length; i++) {
  a += Math.pow(x[i] - ave, 2);
}

b = a / x.length; 
let sigma = Math.sqrt(b);

console.log("Standard :: ", sigma);
