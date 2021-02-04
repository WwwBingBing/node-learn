function inter(callback) {
  setTimeout(()=>{
    if(Math.random()<0.5){
      callback(new Error('fail'))
    }else {
      callback()
    }
  },500)
}
inter((e)=>{
  if (e) {
    console.log(0);
  } else {
    console.log(1);
  }
})