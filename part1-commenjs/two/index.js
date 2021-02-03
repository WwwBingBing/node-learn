// 获取命令行自定义参数
// let playerAction = process.argv[process.argv.length-1];

const game = require('./lib');
// 获取游戏结果
// const result = game(playerAction)

let count = 0
// 获取进程的标准输入
process.stdin.on('data',e=>{
  const playerAction = e.toString().trim();
  const result = game(playerAction)
  console.log(result);
  if(result === -1){
    count++
  }
  if(count===3){
    console.log('游戏结束');
    // 结束进程
    process.exit()
  }
})