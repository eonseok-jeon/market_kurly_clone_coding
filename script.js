const obj = { a: 'a', b: 'b', c: 'c' };

const { a: ah, b, c, d = 4 } = obj;
console.log(ah, b, c, d);
