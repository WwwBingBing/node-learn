
// 输出变量
exports.name = 'lib'
exports.age = 11

// 如果使用这个方法，整个文件的输入只有 = 后面的变量
module.exports =  function a(n) {
  console.log(n);
  return n*2
}
