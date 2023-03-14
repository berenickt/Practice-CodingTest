const table = {};

table['key'] = 100;
table['key2'] = 'Hello';
console.log(table['key']); // 100

table['key'] = 349;
console.log(table['key']); // 349

delete table['key'];
console.log(table['key']); // undefined
