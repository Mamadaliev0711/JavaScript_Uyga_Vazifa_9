// 1 Masala
let arr = [2, 1, 4, 5, 9, 6, 7, 3];
let a = arr.sort();
console.log(a);

// 2 Masala
let son = [2, 1, 4, 5, 9, 6, 7, 3];
let sum = 0;
for (let i = 0; i < son.length; i++) {
  if (son[i] % 2 == 1) {
    sum += son[i];
  }
}
console.log(sum);

// 3 Masala
let son1 = [15, 30];
let sum1 = 0;
for (let i = 0; i < son1.length; i++) {
  if (son1[i] % 3 == 0) {
    if (son1[i] % 5 == 0) {
      sum1 += son1[i];
    }
  }
}
console.log(sum1);

// 4 Masala
let son2 = [2, 1, 4, 5, 9, 6, 7, 3];
let sum2 = 0;
for (let i = 0; i < son2.length; i++) {
  if (son2[i] % 3 == 0) {
    sum2 += son2[i];
  }
}
console.log(sum2);
