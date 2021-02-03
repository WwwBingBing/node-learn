const lib = require('./lib');

console.log(lib);

lib.newName = 'newName'
// lib实际是是对lib.js文件的引用
console.log(lib);