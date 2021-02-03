// 时间监听内置包
const EventEmitter = require('events').EventEmitter;
// 新建一个起床类
class WakeUp extends EventEmitter {
  constructor(){
    super()
    // .5s后发出起床事件
    setTimeout( ()=> {
        this.emit('wakeUp',{time:'8:00'})
    },500)
  }
}
// 实例化 发出事件
const wakeUp = new WakeUp;

module.exports = wakeUp