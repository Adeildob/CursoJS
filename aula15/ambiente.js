let num = [5, 7, 9, 11, 13];
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
num.push(1);
let total = num.length;

for (i = 0; i < total; i++) {
  console.log(num[i]);
}
