const wake = require('./lib');
// 监听
wake.addListener('wakeUp',(res)=>{
  console.log(res.time);
})