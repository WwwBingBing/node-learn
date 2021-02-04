const glob = require('glob');
let res = null;
// 阻塞io调用
console.time('s');
res = glob.sync(__dirname+'/**/*')
console.log(res);
console.timeEnd('s'); // 13ms


// 非阻塞io调用
// console.time('s');
// glob(__dirname+'/**/*',function(e,r){
//     res = r
//     console.log(res);
// })
// console.timeEnd('s'); // 1.6ms
